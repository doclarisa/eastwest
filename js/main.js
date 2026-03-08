// Sticky nav shadow on scroll
const nav = document.getElementById('siteNav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
};
window.addEventListener('scroll', onScroll, { passive: true });

// Close mobile menu when any mobile link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});

// Prevent mobile menu from staying open on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.getElementById('menu-toggle').checked = false;
  }
});
