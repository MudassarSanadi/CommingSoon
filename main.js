// Theme toggle
function initTheme() {
  const saved = localStorage.getItem('ls-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}
initTheme();

document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ls-theme', next);
    });
  }

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // Nav scroll effect
  const navEl = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navEl.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
    else navEl.style.boxShadow = 'none';
  });
});
