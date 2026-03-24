// =============================================
// OVERREACTION UNIVERSITY — PODCAST WEBSITE
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- STICKY NAV -----
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('hero');

  // On inner pages (no hero), navbar is always dark
  const isInnerPage = !hero;

  const onScroll = () => {
    if (isInnerPage || window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  // ----- HAMBURGER MENU -----
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });


  // ----- SCROLL REVEAL -----
  const revealEls = document.querySelectorAll(
    '.episode-card, .platform-card, .about-seal, .about-content, .section-header'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 80px 0px' });

  revealEls.forEach(el => {
    el.classList.add('reveal-ready');
    revealObserver.observe(el);
  });

});
