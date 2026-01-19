// St Raphael Health - Form Handling
// Validation and submission

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-contact-form]');
  forms.forEach(form => initContactForm(form));
});

function initContactForm(form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton ? submitButton.textContent : 'Submit';
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearFormErrors(form);
    
    // Validate form
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const errors = validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      displayFormErrors(form, errors);
      return;
    }
    
    // Check honeypot
    if (data.website) {
      // Honeypot filled - likely spam
      showFormMessage(form, 'error', 'There was an error submitting your form. Please try again.');
      return;
    }
    
    // Submit form
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        showFormMessage(form, 'success',
          'Thank you. A member of our operating team will be in touch shortly.'
        );
        form.reset();
      } else {
        showFormMessage(form, 'error',
          result.message || 'There was an error sending your message. Please try again or contact us directly at info@saintraphaelhealth.com'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormMessage(form, 'error', 
        'There was an error sending your message. Please try again or contact us directly at info@saintraphaelhealth.com'
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
  
  // Real-time validation on blur
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => {
      const fieldName = field.name;
      const fieldValue = field.value;
      const errors = validateContactForm({ [fieldName]: fieldValue });
      
      if (errors[fieldName]) {
        displayFieldError(field, errors[fieldName]);
      } else {
        clearFieldError(field);
      }
    });
  });
}

function validateContactForm(data) {
  const errors = {};
  
  // Full Name
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }
  
  // Email
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Phone
  if (!data.phone) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  // Organization
  if (!data.organization || data.organization.trim().length < 2) {
    errors.organization = 'Organization name is required';
  }
  
  // City/State
  if (!data.cityState || data.cityState.trim().length < 2) {
    errors.cityState = 'City/State is required';
  }
  
  // Message
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a message (at least 10 characters)';
  }
  
  return errors;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  // Allow various phone formats
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10;
}

function displayFormErrors(form, errors) {
  Object.keys(errors).forEach(fieldName => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field) {
      displayFieldError(field, errors[fieldName]);
    }
  });
  
  // Focus first error field
  const firstErrorField = form.querySelector('.form-input.border-deep-red');
  if (firstErrorField) {
    firstErrorField.focus();
  }
}

function displayFieldError(field, message) {
  clearFieldError(field);
  
  field.classList.add('border-deep-red');
  field.setAttribute('aria-invalid', 'true');
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.id = `${field.name}-error`;
  errorDiv.textContent = message;
  errorDiv.setAttribute('role', 'alert');
  
  field.setAttribute('aria-describedby', errorDiv.id);
  field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
  field.classList.remove('border-deep-red');
  field.removeAttribute('aria-invalid');
  field.removeAttribute('aria-describedby');
  
  const existingError = field.parentNode.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }
}

function clearFormErrors(form) {
  form.querySelectorAll('.form-error').forEach(el => el.remove());
  form.querySelectorAll('.border-deep-red').forEach(el => {
    el.classList.remove('border-deep-red');
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  });
}

function showFormMessage(form, type, message) {
  // Remove existing messages
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message p-4 rounded mb-6 ${
    type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 
    'bg-red-50 text-red-800 border border-red-200'
  }`;
  messageDiv.setAttribute('role', type === 'error' ? 'alert' : 'status');
  messageDiv.textContent = message;
  
  form.insertBefore(messageDiv, form.firstChild);
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
