// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  const closeMenu = () => { links.classList.remove('open'); toggle.textContent = '☰'; };
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.textContent = isOpen ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

// Scroll-reveal: sections ease in as they enter the screen
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
