// Vercel Serverless Function - Contact Form Handler
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

// Rate limiting store (in-memory, resets on cold start)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  try {
    const { fullName, email, phone, organization, cityState, reason, message, website } = req.body;
    
    // Honeypot check
    if (website) {
      console.log('Honeypot triggered');
      return res.status(400).json({ ok: false, message: 'Invalid submission' });
    }
    
    // Rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        ok: false, 
        message: 'Too many requests. Please try again later.' 
      });
    }
    
    // Validation
    const errors = validateForm({ fullName, email, phone, organization, cityState, message });
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ ok: false, message: 'Validation failed', errors });
    }

    // Log submission to file (backup)
    try {
      logSubmissionToFile({ fullName, email, phone, organization, cityState, reason, message });
    } catch (logError) {
      console.error('Failed to log submission to file:', logError);
      // Continue even if logging fails - don't block the submission
    }
    
    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>City/State:</strong> ${cityState}</p>
      ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted from St Raphael Health website</p>
    `;
    
    const emailText = `
New Contact Form Submission

From: ${fullName}
Email: ${email}
Phone: ${phone}
Organization: ${organization}
City/State: ${cityState}
${reason ? `Reason: ${reason}\n` : ''}
Message:
${message}

---
Submitted from St Raphael Health website
    `;
    
    const toEmail = process.env.TO_EMAIL || 'info@saintraphaelhealth.com';
    const ccEmail = process.env.CC_EMAIL;
    
    const emailData = {
      from: 'SRH Website <noreply@saintraphaelhealth.com>',
      to: [toEmail],
      subject: `New Contact: ${fullName} - ${organization}`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
    };
    
    // Add CC if configured
    if (ccEmail) {
      emailData.cc = [ccEmail];
    }
    
    const result = await resend.emails.send(emailData);
    
    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ 
        ok: false, 
        message: 'Failed to send email. Please try again or contact us directly.' 
      });
    }
    
    return res.status(200).json({ 
      ok: true, 
      message: 'Message sent successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      ok: false, 
      message: 'An error occurred. Please try again or contact us directly at info@saintraphaelhealth.com' 
    });
  }
}

function validateForm(data) {
  const errors = {};
  
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name is required';
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Valid email is required';
  }
  
  if (!data.phone || data.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Valid phone number is required';
  }
  
  if (!data.organization || data.organization.trim().length < 2) {
    errors.organization = 'Organization is required';
  }
  
  if (!data.cityState || data.cityState.trim().length < 2) {
    errors.cityState = 'City/State is required';
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function checkRateLimit(clientIp) {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIp) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };
  
  // Reset if window expired
  if (now > clientData.resetTime) {
    clientData.count = 0;
    clientData.resetTime = now + RATE_LIMIT_WINDOW;
  }
  
  clientData.count++;
  rateLimitStore.set(clientIp, clientData);
  
  // Clean up old entries (simple cleanup)
  if (rateLimitStore.size > 1000) {
    const keysToDelete = [];
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        keysToDelete.push(key);
      }
    }
    keysToDelete.forEach(key => rateLimitStore.delete(key));
  }
  
  return clientData.count <= MAX_REQUESTS;
}

function logSubmissionToFile(data) {
  const timestamp = new Date().toISOString();
  const logEntry = `
================================================================================
SUBMISSION: ${timestamp}
================================================================================
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Organization: ${data.organization}
City/State: ${data.cityState}
Reason: ${data.reason || 'Not specified'}
Message:
${data.message}
================================================================================

`;

  // In Vercel, /tmp is the only writable directory
  const logDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'logs');
  const logFile = path.join(logDir, 'contact-submissions.log');

  // Create logs directory if it doesn't exist (only works locally, not on Vercel)
  if (!process.env.VERCEL && !fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  // Append to log file
  fs.appendFileSync(logFile, logEntry, 'utf8');

  console.log(`Submission logged to: ${logFile}`);
}
