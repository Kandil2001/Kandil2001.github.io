const ORCID_URL = 'https://orcid.org/0009-0007-2724-4565';

function forceBluePortfolio() {
  document.documentElement.dataset.theme = 'blue-cfd';

  const title = document.querySelector('title');
  if (title) title.textContent = 'Ahmed Kandil | CFD & Scientific Computing';

  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle && !heroTitle.dataset.blueUpdated) {
    heroTitle.innerHTML = 'Ahmed <span>Kandil</span>';
    heroTitle.dataset.blueUpdated = 'true';
  }

  const heroText = document.querySelector('.hero-text, .lead');
  if (heroText && !heroText.dataset.blueUpdated) {
    heroText.textContent = 'I build validation-focused CFD and scientific computing workflows for real engineering problems — from industrial multiphase simulation to solver development, benchmarking, and parallel computing.';
    heroText.dataset.blueUpdated = 'true';
  }

  const firstButtonRow = document.querySelector('.hero .button-row, .hero .buttons');
  if (firstButtonRow && !firstButtonRow.querySelector('a[href*="orcid.org"]')) {
    const orcid = document.createElement('a');
    orcid.className = firstButtonRow.querySelector('.button') ? 'button' : 'btn';
    orcid.id = 'cy-effective-orcid-url';
    orcid.href = ORCID_URL;
    orcid.target = 'orcid.widget';
    orcid.rel = 'me noopener noreferrer';
    orcid.textContent = 'ORCID iD';
    firstButtonRow.appendChild(orcid);
  }

  const contact = document.querySelector('#contact .contact-box, #contact .contact');
  if (contact && !contact.querySelector('a[href*="orcid.org"]')) {
    const p = document.createElement('p');
    p.className = 'contact-line';
    p.innerHTML = `<strong>ORCID:</strong> <a href="${ORCID_URL}" target="orcid.widget" rel="me noopener noreferrer">${ORCID_URL}</a>`;
    const emailLine = contact.querySelector('.contact-line');
    if (emailLine && emailLine.parentNode) emailLine.parentNode.insertBefore(p, emailLine.nextSibling);
    else contact.appendChild(p);
  }

  const footer = document.querySelector('footer');
  if (footer && !footer.querySelector('.blue-version-marker')) {
    const marker = document.createElement('span');
    marker.className = 'blue-version-marker';
    marker.textContent = ' · Blue CFD version';
    footer.appendChild(marker);
  }
}

function setupMobileNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!menuToggle || !navLinks) return;
  const closeMenu = () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

function setupProjectCarousel() {
  const track = document.querySelector('#project-track');
  if (!track) return;
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  const status = document.querySelector('.carousel-status');
  const cards = Array.from(track.querySelectorAll('.project-card'));
  if (!cards.length) return;
  const update = () => {
    if (!status) return;
    const index = Math.round(track.scrollLeft / Math.max(1, cards[0].getBoundingClientRect().width));
    status.textContent = `${Math.min(cards.length, index + 1)} / ${cards.length}`;
  };
  const step = () => cards[0].getBoundingClientRect().width + 20;
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', () => requestAnimationFrame(update));
  update();
}

function init() {
  forceBluePortfolio();
  setupMobileNavigation();
  setupProjectCarousel();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
