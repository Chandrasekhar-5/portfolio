let currentScroll = 0;
let targetScroll = 0;
let scrollVelocity = 0;

const ease = 0.075;

export function initParallaxEngine() {
  window.addEventListener("scroll", () => {
    targetScroll = window.scrollY;
  });

  requestAnimationFrame(update);
}

function update() {
  const prevScroll = currentScroll;
  currentScroll += (targetScroll - currentScroll) * ease;
  scrollVelocity = currentScroll - prevScroll;

  parallaxHomeAbout(currentScroll);
  animateSections(currentScroll, scrollVelocity);

  requestAnimationFrame(update);
}

function parallaxHomeAbout(scrollY) {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  if (!home || !about) return;

  const vh = window.innerHeight;
  const progress = Math.min(scrollY / vh, 1);

  home.style.transform = `
    translateY(${-progress * 120}px)
    scale(${1 - progress * 0.08})
  `;
  home.style.filter = `blur(${progress * 6}px)`;

  about.style.transform = `
    translateY(${(1 - progress) * 120}px)
  `;
  about.style.opacity = progress;
}

function animateSections(scrollY, velocity) {
  document.querySelectorAll(".section").forEach(section => {
    const rect = section.getBoundingClientRect();
    const depth = rect.top * -0.04;

    section.style.transform = `
      translateY(${depth}px)
    `;
  });
}

export function getScrollVelocity() {
  return scrollVelocity;
}