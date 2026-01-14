/**
 * St Raphael Health - Animation Controller
 * Implements style guide-compliant animations
 * 2026 MODERNIZATION UPGRADE
 */

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * 2026 MODERNIZATION - Scroll Progress Indicator
 */
function initScrollProgress() {
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.insertBefore(scrollProgress, document.body.firstChild);

  const updateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / documentHeight) * 100;
    scrollProgress.style.width = `${Math.min(progress, 100)}%`;
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();
}

/**
 * 2026 MODERNIZATION - Glassmorphism Navigation
 */
function initGlassmorphism() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2026 MODERNIZATION - Back to Top Button with Progress Ring
 */
function initBackToTop() {
  // Create back to top button
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `;
  document.body.appendChild(backToTop);

  // Show/hide button and update progress ring
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPercent = (scrolled / documentHeight) * 100;
    const rotation = (scrollPercent / 100) * 360;

    if (scrolled > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    backToTop.style.setProperty('--scroll-rotation', `${rotation}deg`);
  };

  // Scroll to top on click
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Scroll-triggered fade-in animations
 * Style Guide: 400-600ms ease, subtle
 */
function initScrollAnimations() {
  if (prefersReducedMotion) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Optionally unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });

  // Observe sections
  document.querySelectorAll('section, .section').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Stats counter animation
 * Animates numbers counting up when scrolled into view
 */
function initStatsCounter() {
  if (prefersReducedMotion) return;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('visible');
        
        // Animate the number
        const numberElement = element.querySelector('.metric-number, [data-count]');
        if (numberElement) {
          animateValue(numberElement);
        }
        
        statsObserver.unobserve(element);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.metric, [data-metric]').forEach((el) => {
    statsObserver.observe(el);
  });
}

/**
 * Animate a number counting up
 */
function animateValue(element) {
  const text = element.textContent;
  
  // Extract number from text (e.g., "$85M" -> 85)
  const match = text.match(/[\d,]+/);
  if (!match) return;
  
  const endValue = parseInt(match[0].replace(/,/g, ''));
  const prefix = text.substring(0, match.index);
  const suffix = text.substring(match.index + match[0].length);
  
  const duration = 1500; // 1.5 seconds
  const startValue = 0;
  const increment = (endValue - startValue) / (duration / 16);
  let current = startValue;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= endValue) {
      element.textContent = prefix + endValue.toLocaleString() + suffix;
      clearInterval(timer);
    } else {
      element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    }
  }, 16);
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Parallax effect for hero images
 * Style Guide: gentle, slow, subtle
 */
function initParallax() {
  if (prefersReducedMotion) return;

  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length === 0) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((el) => {
          const speed = parseFloat(el.dataset.parallaxSpeed) || 0.5;
          const yPos = -(scrolled * speed);
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Mobile menu animation
 * DISABLED - Mobile menu is now handled by site.js to prevent conflicts
 */
function initMobileMenu() {
  // Mobile menu functionality moved to site.js
  return;
}

/**
 * Set active navigation link based on current page
 * NOTE: Deferred to site.js to avoid duplicate logic
 */
function initActiveNavigation() {
  // Active nav state is handled by site.js initActiveNavState()
  return;
}

/**
 * Form enhancements
 * Style Guide: 200-300ms transitions, gold focus states
 */
function initFormEnhancements() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach((form) => {
    // Add floating label effect
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      // Add focus/blur animations
      input.addEventListener('focus', () => {
        input.parentElement?.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement?.classList.remove('focused');
        }
      });
    });

    // Form submission with loading state
    form.addEventListener('submit', (e) => {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton && !submitButton.classList.contains('loading')) {
        submitButton.classList.add('loading');
        
        const originalText = submitButton.textContent;
        submitButton.innerHTML = `
          <span class="spinner"></span>
          <span class="ml-2">Sending...</span>
        `;
        
        // Note: The actual form submission is handled by forms.js
        // This just adds the visual loading state
      }
    });
  });
}

/**
 * Hero image load animation
 */
function initHeroAnimation() {
  if (prefersReducedMotion) return;

  const heroImages = document.querySelectorAll('.hero-image');
  heroImages.forEach((img) => {
    // Add loaded class after a short delay for parallax effect
    setTimeout(() => {
      img.classList.add('loaded');
    }, 300);
  });
}

/**
 * Scroll progress indicator (optional)
 */
function initScrollProgress() {
  if (prefersReducedMotion) return;

  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight);
    progressBar.style.transform = `scaleX(${scrolled})`;
  });
}

/**
 * Card hover effects
 * Adds extra polish to team cards, case studies, etc.
 */
function initCardEffects() {
  const cards = document.querySelectorAll('.card, .team-card, .case-study-card');
  
  cards.forEach((card) => {
    // Add subtle tilt effect on mouse move (very subtle)
    if (!prefersReducedMotion) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 50; // Very subtle
        const rotateY = (centerX - x) / 50;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    }
  });
}

/**
 * Initialize all animations
 */
function init() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  // Initialize all animation systems
  initScrollAnimations();
  initStatsCounter();
  initSmoothScroll();
  initParallax();
  initMobileMenu();
  initActiveNavigation();
  initFormEnhancements();
  initHeroAnimation();
  initScrollProgress();
  initGlassmorphism();
  initBackToTop();
  initCardEffects();

  console.log('✨ SRH Animations initialized');
}

// Auto-initialize
init();

// Export for manual initialization if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    initScrollAnimations,
    initStatsCounter,
    initSmoothScroll,
    initParallax,
    initMobileMenu,
    initActiveNavigation,
    initFormEnhancements,
    initHeroAnimation,
    initScrollProgress,
    initCardEffects
  };
}
