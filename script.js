// Smooth Scrolling with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Responsive Menu (if elements exist)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Add subtle parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add cursor glow effect
document.addEventListener('mousemove', (e) => {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.style.left = e.pageX + 'px';
  glow.style.top = e.pageY + 'px';
  document.body.appendChild(glow);

  setTimeout(() => {
    glow.remove();
  }, 500);
});
