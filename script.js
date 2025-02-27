// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
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
  
  // Responsive Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  
  // Animate Progress Bars
  const progressBars = document.querySelectorAll('.progress-bar');
  function animateProgressBar() {
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }
  const skillsSection = document.getElementById('skills');
  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBar();
        skillsObserver.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.5 });
  skillsObserver.observe(skillsSection);
  