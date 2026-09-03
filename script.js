document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('mobile-open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});
