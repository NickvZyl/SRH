// St Raphael Health - Site JavaScript
// Navigation, animations, and utilities

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initActiveNavState();
  initHomepageHeroHighlight();
});

// Mobile Navigation Toggle
function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');
  const body = document.body;
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        // Opening menu
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('open');
        body.classList.add('overflow-hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
      } else {
        // Closing menu
        mobileMenu.classList.remove('open');
        // Wait for animation to finish before hiding
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
        body.classList.remove('overflow-hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      body.classList.remove('overflow-hidden');
      // Wait for animation to finish before hiding
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('open');
      body.classList.remove('overflow-hidden');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    }
  });
}

// Scroll-triggered fade-in animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with data-animate attribute
  // Don't set opacity to 0 - let content be visible by default
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

// Set active navigation state based on current page
function initActiveNavState() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a[href]');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Handle both root and nested paths
    if (href === currentPath || 
        (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Homepage hero panel highlight on hover with default state
function initHomepageHeroHighlight() {
  // Only run on homepage
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    return;
  }

  const heroPanels = document.querySelectorAll('.hero-panel');
  if (heroPanels.length !== 2) return;

  const leftPanel = heroPanels[0]; // For Hospitals
  const rightPanel = heroPanels[1]; // For Physicians

  // Set default highlight on left panel (For Hospitals)
  const setDefaultHighlight = () => {
    leftPanel.classList.add('hero-highlighted');
    rightPanel.classList.remove('hero-highlighted');
  };

  // Initialize with default
  setDefaultHighlight();

  // Handle hover states
  leftPanel.addEventListener('mouseenter', () => {
    leftPanel.classList.add('hero-highlighted');
    rightPanel.classList.remove('hero-highlighted');
  });

  rightPanel.addEventListener('mouseenter', () => {
    rightPanel.classList.add('hero-highlighted');
    leftPanel.classList.remove('hero-highlighted');
  });

  // Revert to default when mouse leaves both panels
  const heroPanelContainer = leftPanel.parentElement;
  heroPanelContainer.addEventListener('mouseleave', () => {
    setDefaultHighlight();
  });
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without triggering navigation
      history.pushState(null, '', `#${targetId}`);
      // Set focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  }
});
