/**
 * Image Generation using Gemini API (via MCP or direct)
 * Generates images for St Raphael Health website
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.GOOGLE_AI_API_KEY;
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images');

// Priority images to generate
const images = [
  {
    name: 'hero-hospitals.jpg',
    folder: 'hero',
    prompt: 'Professional photograph of a modern hospital exterior at golden hour, warm lighting, clean architecture, welcoming entrance with glass doors, landscaped grounds, Texas regional hospital setting, photorealistic, high-end architectural photography, warm color grading with subtle gold tones, 16:9 aspect ratio',
  },
  {
    name: 'hero-physicians.jpg',
    folder: 'hero',
    prompt: 'Professional photograph of physicians collaborating in a modern medical office, natural lighting through large windows, diverse medical team reviewing patient charts on digital tablets, warm professional atmosphere, clean modern interior design, photorealistic, corporate healthcare photography style, 16:9 aspect ratio',
  },
  {
    name: 'case-study-bmc.jpg',
    folder: 'case-studies',
    prompt: 'Professional exterior photograph of a large modern surgical hospital in Greater Houston, multiple stories, contemporary architecture, clear blue sky, well-maintained landscaping, parking area with vehicles, Texas setting, golden hour lighting, photorealistic, architectural photography, 16:9 aspect ratio',
  },
];

async function generateWithGemini(prompt, outputPath) {
  console.log(`\n🎨 Generating: ${path.basename(outputPath)}`);
  console.log(`📝 Prompt: ${prompt.substring(0, 80)}...`);

  // Try Gemini's generateContent with image generation
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`;
  
  const requestBody = JSON.stringify({
    contents: [{
      parts: [{
        text: `Generate an image: ${prompt}`
      }]
    }],
    generationConfig: {
      temperature: 0.4,
      topK: 32,
      topP: 1,
      maxOutputTokens: 4096,
    }
  });

  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Response received');
          console.log('📄 Response:', data.substring(0, 200));
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

async function main() {
  console.log('🚀 Gemini Image Generation');
  console.log('=' .repeat(50));
  
  if (!API_KEY) {
    console.error('❌ No API key found in .env');
    process.exit(1);
  }

  console.log('🔑 API Key found');
  console.log('📁 Output:', OUTPUT_DIR);
  console.log('\n⚠️  Note: Gemini may not support direct image generation yet.');
  console.log('⚠️  This script will test the API and show what\'s available.\n');

  for (const img of images) {
    try {
      const outputPath = path.join(OUTPUT_DIR, img.folder, img.name);
      const result = await generateWithGemini(img.prompt, outputPath);
      console.log('Result:', JSON.stringify(result, null, 2));
    } catch (error) {
      console.error(`❌ Error:`, error.message);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
}

main();
