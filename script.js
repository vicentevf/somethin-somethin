/* ═══ SOMETHIN' — warm editorial interactions ═══ */

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const closeMenu = () => { links.classList.remove('open'); toggle.classList.remove('open'); };
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  toggle.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Hero parallax (subtle)
const heroMedia = document.getElementById('heroMedia');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight) heroMedia.style.transform = `translateY(${y * 0.18}px)`;
}, { passive: true });

// Fade-in on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Menu: master dropdown + category accordions
const menuTrigger = document.getElementById('menuTrigger');
if (menuTrigger) {
  const menuPanel = document.getElementById('menuPanel');
  menuTrigger.addEventListener('click', () => {
    const open = menuTrigger.classList.toggle('open');
    menuPanel.classList.toggle('open', open);
    menuTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuTrigger.querySelector('span').textContent = open ? 'Close the Menu' : 'View the Full Menu';
  });

  document.querySelectorAll('.macc-head').forEach(head => {
    const panel = head.nextElementSibling; // the .collapsible
    head.addEventListener('click', () => {
      const open = head.classList.toggle('open');
      panel.classList.toggle('open', open);
    });
  });
}
