import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { 
    initScrollAnimations, 
    animateMobileNavLinks, 
    resetMobileNavLinks, 
    animateSkillBars, 
    initCursorGlow, 
    initHeroAnimations 
} from './modules/animations.js';
import modalModule from './modules/modal.js';

let currentScroll = 0;
let targetScroll = 0;
let scrollVelocity = 0;

const ease = 0.08;


document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();

    initScrollAnimations();
    initCursorGlow();
    initHeroAnimations();
    
    initTheme();
    
    initNavigation();
    
    modalModule.init();
    
    initScrollProgress();
    
    initMobileMenu();
    
    initContactForm();
    
    updateActiveLink();
});

window.addEventListener('scroll', () => {
    targetScroll = window.scrollY;
});

function smoothScrollLoop() {
    currentScroll += (targetScroll - currentScroll) * ease;

    scrollVelocity = targetScroll - currentScroll;

    runScrollEffects();

    requestAnimationFrame(smoothScrollLoop);
}
smoothScrollLoop();

function runScrollEffects() {
    homeAboutStacking(window.scrollY);
}


function homeAboutStacking(scrollY) {
    const wrapper = document.querySelector('.stack-wrapper');
    const home = document.querySelector('.stack-home');
    const about = document.querySelector('.stack-about');

    if (!wrapper || !home || !about) return;

    const start = wrapper.offsetTop;
    const end = start + window.innerHeight;

    if (scrollY <= start) {
        home.style.opacity = '1';
        home.style.transform = 'scale(1)';
        home.style.filter = 'blur(0px)';
        about.style.transform = 'translateY(100%)';
        return;
    }

    if (scrollY >= end) {
        home.style.opacity = '0';
        home.style.transform = 'scale(0.88)';
        home.style.filter = 'blur(6px)';
        about.style.transform = 'translateY(0)';
        return;
    }

    const linear = (scrollY - start) / window.innerHeight;

    const t = linear < 0.5
        ? 16 * Math.pow(linear, 5)
        : 1 - Math.pow(-2 * linear + 2, 5) / 2;

    home.style.opacity = `${1 - t}`;
    home.style.transform = `scale(${1 - t * 0.12})`;
    home.style.filter = `blur(${t * 6}px)`;
    about.style.transform = `translateY(${(1 - t) * 100}%)`;
}


function initHeaderScroll() {
    const header = document.querySelector('.header');
    const about  = document.querySelector('#about');
    if (!header || !about) return;

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            header.classList.remove('header-scrolled');
            return;
        }

        const trigger = about.offsetTop - 80;
        if (window.scrollY >= trigger) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress .scroll-bar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = `${scrolled}%`;
        }
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!mobileMenuBtn || !mobileNavOverlay) return;
    
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
}

function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
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
}

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navUnderline = document.querySelector('.nav-underline');
    const navLinkContainer = document.querySelector('.nav-links-container');
    let activeLink = null;
    
    const scrollPos = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            if (activeLink !== link) {
                navLinks.forEach(l => {
                    if (l !== link) {
                        l.style.color = ''; 
                    }
                });
                
                activeLink = link;
                link.style.color = 'var(--accent)';
                
                if (navUnderline && navLinkContainer) {
                    const linkRect = link.getBoundingClientRect();
                    const navRect = navLinkContainer.getBoundingClientRect();
                    
                    navUnderline.style.left = `${linkRect.left - navRect.left}px`;
                    navUnderline.style.width = `${linkRect.width}px`;
                    navUnderline.style.opacity = '1';
                }
            }
        }
    });
}