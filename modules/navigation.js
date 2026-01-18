export function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navUnderline = document.querySelector('.nav-underline');
    const navLinkContainer = document.querySelector('.nav-links-container');
    let activeLink = null;
    
    updateActiveLink();
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--accent)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (activeLink !== this) {
                this.style.color = '';
            }
        });
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                navLinks.forEach(l => {
                    l.style.color = ''; 
                });
                
                activeLink = this;
                this.style.color = 'var(--accent)';
                
                updateUnderlinePosition(this);
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    function updateUnderlinePosition(link) {
        const linkRect = link.getBoundingClientRect();
        const navRect = navLinkContainer.getBoundingClientRect();
        
        navUnderline.style.left = `${linkRect.left - navRect.left}px`;
        navUnderline.style.width = `${linkRect.width}px`;
        navUnderline.style.opacity = '1';
    }
    
    function updateActiveLink() {
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
                    
                    updateUnderlinePosition(link);
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', () => {
        if (activeLink) {
            updateUnderlinePosition(activeLink);
        }
    });
}