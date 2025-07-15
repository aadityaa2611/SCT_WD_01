const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('nav ul.menu li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  // Navbar background on scroll
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight nav link based on scroll position
  let currentSectionId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;  // adjust offset for nav height
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('active');
    }
  });
});
