const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
      if (entry.target.id === 'skills') {
        animateSkillBars();
      }
      
      if (document.querySelector('.mobile-nav-overlay.active')) {
        animateMobileNavLinks();
      }
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));


const toggle = document.getElementById('themeToggle');
const body = document.body;


const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  const isLight = body.classList.contains('light-mode');
  toggle.textContent = isLight ? '☀️' : '🌙';
  
  
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
});


const scrollProgress = document.querySelector('.scroll-progress .scroll-bar');

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = `${scrolled}%`;
});


const navLinks = document.querySelectorAll('.nav-link');
const navUnderline = document.querySelector('.nav-underline');
const navLinkContainer = document.querySelector('.nav-links-container');


const navContainerRect = navLinkContainer.getBoundingClientRect();

navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    const linkRect = this.getBoundingClientRect();
    const navRect = navLinkContainer.getBoundingClientRect(); 
    
    navUnderline.style.left = `${linkRect.left - navRect.left}px`;
    navUnderline.style.width = `${linkRect.width}px`;
    navUnderline.style.opacity = '1';
  });
  
  link.addEventListener('mouseleave', function() {
    if (!activeLink) { 
      navUnderline.style.opacity = '0';
    }
  });
});


let activeLink = null;

function updateActiveLink() {
  const scrollPos = window.scrollY + 100;
  
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;
    
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
      if (activeLink !== link) {
        activeLink = link;
        
        const linkRect = link.getBoundingClientRect();
        const navRect = navLinkContainer.getBoundingClientRect();
        
        navUnderline.style.left = `${linkRect.left - navRect.left}px`;
        navUnderline.style.width = `${linkRect.width}px`;
        navUnderline.style.opacity = '1';
      }
    } else if (activeLink === link) {
      
      if (document.querySelector('.nav-links-container:hover')) {
        
      } else {
        activeLink = null;
        navUnderline.style.opacity = '0';
      }
    }
  });
}


window.addEventListener('scroll', updateActiveLink);
window.addEventListener('resize', updateActiveLink);

updateActiveLink();


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileNavOverlay.classList.add('active');
  setTimeout(() => {
    animateMobileNavLinks();
  }, 100);
});

mobileNavClose.addEventListener('click', () => {
  mobileNavOverlay.classList.remove('active');
  resetMobileNavLinks();
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('active');
    resetMobileNavLinks();
  });
});

function animateMobileNavLinks() {
  const links = document.querySelectorAll('.mobile-nav-links li');
  links.forEach((link, index) => {
    link.style.opacity = '1';
    link.style.transform = 'translateY(0)';
    link.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
  });
}

function resetMobileNavLinks() {
  const links = document.querySelectorAll('.mobile-nav-links li');
  links.forEach(link => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
  });
}


function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = `${progress}%`;
  });
}


const glow = document.createElement('div');
glow.classList.add('cursor-glow');
document.body.appendChild(glow);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;


window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


function animateGlow() {
  
  glowX += (mouseX - glowX) * 0.1;
  glowY += (mouseY - glowY) * 0.1;
  
  glow.style.left = `${glowX}px`;
  glow.style.top = `${glowY}px`;
  
  requestAnimationFrame(animateGlow);
}


animateGlow();


if ('ontouchstart' in window) {
  glow.style.display = 'none';
}


const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  
  const formData = new FormData(this);
  const name = formData.get('name') || 'User';
  
  
  const submitBtn = this.querySelector('.btn');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  submitBtn.style.background = '#10b981';
  
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.style.background = '';
    this.reset();
  }, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
  
  updateActiveLink();
  
  
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroBtn = document.querySelector('.hero .btn');
  
  setTimeout(() => {
    heroTitle.style.animation = 'fadeInUp 1s ease forwards';
  }, 300);
  
  setTimeout(() => {
    heroSubtitle.style.animation = 'fadeInUp 1s ease forwards 0.3s';
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.animationFillMode = 'forwards';
  }, 600);
  
  setTimeout(() => {
    heroBtn.style.animation = 'fadeInUp 1s ease forwards 0.6s';
    heroBtn.style.opacity = '0';
    heroBtn.style.animationFillMode = 'forwards';
  }, 900);
});