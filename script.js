const GOATCOUNTER_BASE = 'https://kandil2001.goatcounter.com';
const IS_HOME_PAGE = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');

function loadAnalytics() {
    const goatCounterScript = document.createElement('script');
    goatCounterScript.async = true;
    goatCounterScript.src = 'https://gc.zgo.at/count.js';
    goatCounterScript.dataset.goatcounter = `${GOATCOUNTER_BASE}/count`;
    document.head.appendChild(goatCounterScript);
}

function setupMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    const closeMenu = () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });
}

function setupProjectCarousel() {
    const carousel = document.querySelector('.project-carousel');
    const track = document.querySelector('#project-track');
    const previousButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const status = document.querySelector('.carousel-status');

    if (!carousel || !track || !previousButton || !nextButton) return;

    if (!carousel.querySelector('.carousel-side-prev')) {
        const sidePrevious = document.createElement('button');
        sidePrevious.className = 'carousel-side-button carousel-side-prev';
        sidePrevious.type = 'button';
        sidePrevious.setAttribute('aria-label', 'Show previous project');
        sidePrevious.textContent = '‹';
        carousel.prepend(sidePrevious);
    }

    if (!carousel.querySelector('.carousel-side-next')) {
        const sideNext = document.createElement('button');
        sideNext.className = 'carousel-side-button carousel-side-next';
        sideNext.type = 'button';
        sideNext.setAttribute('aria-label', 'Show next project');
        sideNext.textContent = '›';
        carousel.appendChild(sideNext);
    }

    const previousButtons = Array.from(document.querySelectorAll('.carousel-prev, .carousel-side-prev'));
    const nextButtons = Array.from(document.querySelectorAll('.carousel-next, .carousel-side-next'));
    const cards = Array.from(track.querySelectorAll('.project-card'));

    if (!cards.length) return;

    const tolerance = 8;
    const getMaxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);
    const getStep = () => {
        const firstCard = cards[0];
        const gap = parseFloat(window.getComputedStyle(track).columnGap || '0');
        return firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth;
    };

    const isAtStart = () => track.scrollLeft <= tolerance;
    const isAtEnd = () => track.scrollLeft >= getMaxScroll() - tolerance;

    const updateStatus = () => {
        const maxScroll = getMaxScroll();
        const totalPages = maxScroll === 0 ? 1 : Math.ceil(track.scrollWidth / track.clientWidth);
        const currentPage = maxScroll === 0 ? 1 : Math.min(totalPages, Math.floor(track.scrollLeft / Math.max(1, track.clientWidth)) + 1);

        if (status) status.textContent = `${currentPage} / ${totalPages}`;

        previousButton.textContent = isAtStart() ? '← End' : '← Previous';
        nextButton.textContent = isAtEnd() ? 'Start →' : 'Next →';
    };

    const scrollToPosition = (left) => {
        track.scrollTo({ left, behavior: 'smooth' });
        window.setTimeout(updateStatus, 400);
    };

    previousButtons.forEach((button) => {
        button.addEventListener('click', () => {
            scrollToPosition(isAtStart() ? getMaxScroll() : Math.max(0, track.scrollLeft - getStep()));
        });
    });

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            scrollToPosition(isAtEnd() ? 0 : Math.min(getMaxScroll(), track.scrollLeft + getStep()));
        });
    });

    track.addEventListener('scroll', () => window.requestAnimationFrame(updateStatus));
    window.addEventListener('resize', updateStatus);
    updateStatus();
}

async function fetchTotalVisits() {
    const response = await fetch(`visitor-count.json?t=${Date.now()}`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error(`Counter request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.count;
}

function addTotalVisitCounter() {
    if (!IS_HOME_PAGE) return;

    const footer = document.querySelector('footer');
    if (!footer || footer.querySelector('.analytics-shortcut')) return;

    const counter = document.createElement('div');
    counter.className = 'analytics-shortcut';
    counter.innerHTML = '<span>Total portfolio visits: <strong data-site-total>—</strong></span>';
    footer.appendChild(counter);

    const value = counter.querySelector('[data-site-total]');

    const refreshCount = async () => {
        try {
            value.textContent = await fetchTotalVisits();
            value.title = 'Total anonymous portfolio visits recorded by GoatCounter';
        } catch (error) {
            value.textContent = '—';
            value.title = 'Visitor count is temporarily unavailable.';
        }
    };

    refreshCount();
    window.setInterval(refreshCount, 300000);
}

loadAnalytics();
setupMobileNavigation();
setupProjectCarousel();
addTotalVisitCounter();
