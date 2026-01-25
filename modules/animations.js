import { getScrollVelocity } from "./parallaxEngine.js";

export function init3DCards() {
  document.querySelectorAll(".card, .project-card").forEach(card => {

    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const rx = ((y / r.height) - 0.5) * 10;
      const ry = ((x / r.width) - 0.5) * -10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        translateZ(20px)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });
}

export function animateFloatingCards() {
  const velocity = getScrollVelocity();

  document.querySelectorAll(".project-card").forEach(card => {
    card.style.transform += `
      translateY(${velocity * 0.4}px)
    `;
  });
}

export function initScrollAnimations() {
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
}

export function animateMobileNavLinks() {
    const links = document.querySelectorAll('.mobile-nav-links li');
    links.forEach((link, index) => {
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
        link.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
    });
}

export function resetMobileNavLinks() {
    const links = document.querySelectorAll('.mobile-nav-links li');
    links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
    });
}

export function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
}

export function initCursorGlow() {
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
}

export function initHeroAnimations() {
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
}