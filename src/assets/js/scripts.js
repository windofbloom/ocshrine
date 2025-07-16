// NAVBAR
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav__menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });