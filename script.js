// appearance of sections
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {threshold: 0.15} );

sections.forEach(section => observer.observe(section));


// ------ Dark light mode toggle ------- //
const toggle = document.getElementById('themeToggle');
const body = document.body;

// check saved theme
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggle.textContent = '☀️';
}

// toggle theme on click
toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    const isLight = body.classList.contains('light-mode');
    toggle.textContent = isLight ? '☀️' : '🌙';

    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
});