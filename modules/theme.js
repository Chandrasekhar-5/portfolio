export function initTheme() {
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

        window.dispatchEvent(new Event('themeChanged'));
    });
}