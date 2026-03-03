// ========================================
// Theme Toggle Functionality
// ========================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the theme on page load
if (currentTheme === 'dark') {
  htmlElement.classList.add('dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');

  // Save the preference
  const newTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('open');
  navMenu.classList.toggle('mobile-open');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('open');
    navMenu.classList.remove('mobile-open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    mobileMenuToggle.classList.remove('open');
    navMenu.classList.remove('mobile-open');
  }
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    // Don't scroll if href is just "#"
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Navbar Background on Scroll
// ========================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add/remove shadow based on scroll position
  if (scrollTop > 20) {
    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  lastScrollTop = scrollTop;
});

// ========================================
// Active Navigation Link Highlighting
// ========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (correspondingLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        correspondingLink.style.color = 'var(--color-primary)';
        correspondingLink.style.fontWeight = '600';
      } else {
        correspondingLink.style.color = '';
        correspondingLink.style.fontWeight = '';
      }
    }
  });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// ========================================
// Hire me Button Scroll to Contact Section
// ========================================
function callAlert(message) {
  alert(message, 3000);
  window.alert = function (message, timeout = null) {
    const alertBox = document.createElement('div');
    const alertButton = document.createElement('button')
    alertButton.innerText = 'OK';
    alertBox.classList.add('alert');
    //alertBox.setAttribute('style', 'position: fixed; top: 100px; left: 50 %; padding: 20px; border - radius: 10px; box - shadow: 0 10px 5px 0 #00000022; display: flex; flex - direction: column; border: 1px solid #333; transform: translateX(-50 %); ');
    //alertButton.setAttribute('style', 'border: 1px solid #333; background: white; border - radius: 5px; padding: 5px; ');
    alertBox.setAttribute(
      'style', 'position: fixed; top: 100px; left: 50%; padding: 20px; border-radius: 10px; box-shadow: 0 10px 5px 0 #00000022; display: flex; flex-direction: column; border: 1px solid #333; transform: translateX(-50%);'
    );

    alertButton.setAttribute(
      'style', 'border: 1px solid #333; background: white; border-radius: 5px; padding: 5px;'
    );

    alertBox.innerHTML = `<span style="padding:10px">${message}</span>`;
    alertBox.appendChild(alertButton);
    alertButton.addEventListener('click', (e) => {
      alertBox.remove();
    });
    if (timeout != null) {
      setTimeout(() => {
        if (alertBox) alertBox.remove();
      }, Number(timeout))
    }
    document.body.appendChild(alertBox);
  }
}


// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Log form data (in a real application, this would be sent to a server)
  console.log('Form submitted:', parms);

  emailjs.send("service_utpnczl", "template_cc628oj", parms);
  // Show success message
  alert('Thank you for your message! I\'ll get back to you soon.');

  // Reset form
  contactForm.reset();
});

// ========================================
// Scroll Reveal Animation
// ========================================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.service-card, .project-card, .highlight-card, .timeline-item');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize elements for scroll reveal
function initScrollReveal() {
  const reveals = document.querySelectorAll('.service-card, .project-card, .highlight-card, .timeline-item');
  reveals.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
}

window.addEventListener('load', initScrollReveal);
window.addEventListener('scroll', revealOnScroll);

// ========================================
// Animate Progress Bars on Scroll
// ========================================
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');

  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barTop < windowHeight - 100) {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
}

// Track which progress bars have been animated
const animatedBars = new Set();

function animateProgressBarsOnce() {
  const progressBars = document.querySelectorAll('.progress-fill');

  progressBars.forEach(bar => {
    if (animatedBars.has(bar)) return;

    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barTop < windowHeight - 100) {
      const targetWidth = bar.style.width;
      bar.style.width = '0%';

      setTimeout(() => {
        bar.style.width = targetWidth;
        animatedBars.add(bar);
      }, 100);
    }
  });
}

window.addEventListener('scroll', animateProgressBarsOnce);

// ========================================
// Hero Section Animations
// ========================================
window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('.hero-greeting, .hero-title, .hero-subtitle, .hero-description, .hero-cta, .hero-social');

  heroElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';

    setTimeout(() => {
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// ========================================
// Parallax Effect for Hero Section
// ========================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroGradient = document.querySelector('.hero-gradient');

  if (heroGradient) {
    heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ========================================
// Add hover effect to project cards
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});

// ========================================
// Cursor Trail Effect (Optional - can be removed)
// ========================================
// Uncomment the code below if you want a cursor trail effect

/*
const coords = {x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function (circle) {
      circle.x = 0;
    circle.y = 0;
});

    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
    coords.y = e.clientY;
});

    function animateCircles() {
      let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

    requestAnimationFrame(animateCircles);
}

    animateCircles();
    */

// ========================================
// Performance: Lazy Load Images
// ========================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========================================
// Print current year in footer (if needed)
// ========================================
const currentYearElements = document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach(element => {
  element.textContent = currentYear;
});

// ========================================
// Easter Egg: Konami Code
// ========================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  // Add a fun animation or message
  document.body.style.animation = 'rainbow 2s linear infinite';
  setTimeout(() => {
    document.body.style.animation = '';
    alert('🎉 You found the easter egg! You\'re awesome!');
  }, 2000);
}

// Add rainbow animation to CSS if easter egg is activated
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
      0 % { filter: hue - rotate(0deg); }
    100% {filter: hue-rotate(360deg); }
  }
    `;
document.head.appendChild(style);

// ========================================
// Initialize all animations on load
// ========================================
window.addEventListener('load', () => {
  revealOnScroll();
  animateProgressBarsOnce();
  highlightNavigation();
});

// ==================================
//    Gallery
// ==================================

const cards = document.querySelectorAll('.card');
const slider = document.querySelector('.slider');

let currentIndex = 0;
let autoPlayInterval;
let isPaused = false;

// Activate card
function activateCard(index) {
  cards.forEach(card => card.classList.remove('active'));
  cards[index].classList.add('active');
  currentIndex = index;
}

// Start autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    if (!isPaused) {
      let nextIndex = (currentIndex + 1) % cards.length;
      activateCard(nextIndex);
    }
  }, 5000);
}

// Stop autoplay
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Reset autoplay
function resetAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

// Click interaction
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    activateCard(index);
    resetAutoPlay();
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    activateCard((currentIndex + 1) % cards.length);
    resetAutoPlay();
  }

  if (e.key === 'ArrowLeft') {
    activateCard((currentIndex - 1 + cards.length) % cards.length);
    resetAutoPlay();
  }
});

// 🔥 Pause on hover
slider.addEventListener('mouseenter', () => {
  isPaused = true;
});

slider.addEventListener('mouseleave', () => {
  isPaused = false;
});

// 🔥 Pause while mouse is pressed
slider.addEventListener('mousedown', () => {
  isPaused = true;
});

slider.addEventListener('mouseup', () => {
  isPaused = false;
});

// Start autoplay
startAutoPlay();

console.log('Portfolio website loaded successfully! 🚀');
