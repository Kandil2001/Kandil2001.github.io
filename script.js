const ORCID_URL = 'https://orcid.org/0009-0007-2724-4565';

const ICONS = {
  github: '<svg class="brand-icon social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin: '<svg class="brand-icon social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>',
  orcid: '<img class="orcid-icon" src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="">'
};

function setIcon(link, type, label) {
  if (!link || link.querySelector('svg,img')) return;
  link.innerHTML = `${ICONS[type]}${label}`;
}

function forceBluePortfolio() {
  document.documentElement.dataset.theme = 'blue-cfd-final';

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

  document.querySelectorAll('a[href*="github.com/Kandil2001"]').forEach((link) => setIcon(link, 'github', 'GitHub'));
  document.querySelectorAll('a[href*="linkedin.com/in/ahmed-kandil03"]').forEach((link) => setIcon(link, 'linkedin', 'LinkedIn'));
  document.querySelectorAll('a[href*="orcid.org/0009-0007-2724-4565"]').forEach((link) => setIcon(link, 'orcid', link.textContent.trim() || 'ORCID iD'));

  const firstButtonRow = document.querySelector('.hero .button-row, .hero .buttons');
  if (firstButtonRow && !firstButtonRow.querySelector('a[href*="orcid.org"]')) {
    const orcid = document.createElement('a');
    orcid.className = firstButtonRow.querySelector('.button') ? 'button' : 'btn';
    orcid.id = 'cy-effective-orcid-url';
    orcid.href = ORCID_URL;
    orcid.target = 'orcid.widget';
    orcid.rel = 'me noopener noreferrer';
    orcid.setAttribute('aria-label', 'ORCID iD');
    orcid.innerHTML = `${ICONS.orcid}ORCID iD`;
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
