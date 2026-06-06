const GOATCOUNTER_BASE = 'https://kandil2001.goatcounter.com';
const IS_HOME_PAGE = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');

// Track visits on every portfolio page.
const goatCounterScript = document.createElement('script');
goatCounterScript.async = true;
goatCounterScript.src = 'https://gc.zgo.at/count.js';
goatCounterScript.dataset.goatcounter = `${GOATCOUNTER_BASE}/count`;
document.head.appendChild(goatCounterScript);

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
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
        const card = cards[0];
        if (!card) return track.clientWidth;
        const gap = parseFloat(window.getComputedStyle(track).columnGap || '0');
        return card.getBoundingClientRect().width + gap;
    };

    const isAtStart = () => track.scrollLeft <= tolerance;
    const isAtEnd = () => track.scrollLeft >= getMaxScroll() - tolerance;

    const updateStatus = () => {
        const totalPages = getMaxScroll() === 0 ? 1 : 2;
        const page = isAtEnd() ? totalPages : 1;

        if (status) {
            status.textContent = `${page} / ${totalPages}`;
        }

        previousButton.textContent = isAtStart() ? '← End' : '← Previous';
        nextButton.textContent = isAtEnd() ? 'Start →' : 'Next →';

        previousButtons.forEach((button) => {
            button.title = isAtStart() ? 'Go to the last projects' : 'Previous projects';
        });

        nextButtons.forEach((button) => {
            button.title = isAtEnd() ? 'Back to the first projects' : 'Next projects';
        });
    };

    const scrollToPosition = (left) => {
        track.scrollTo({ left, behavior: 'smooth' });
        window.setTimeout(updateStatus, 400);
    };

    previousButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (isAtStart()) {
                scrollToPosition(getMaxScroll());
                return;
            }

            scrollToPosition(Math.max(0, track.scrollLeft - getStep()));
        });
    });

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (isAtEnd()) {
                scrollToPosition(0);
                return;
            }

            scrollToPosition(Math.min(getMaxScroll(), track.scrollLeft + getStep()));
        });
    });

    track.addEventListener('scroll', () => window.requestAnimationFrame(updateStatus));
    window.addEventListener('resize', updateStatus);

    updateStatus();
}

async function fetchTotalVisits() {
    const response = await fetch(`visitor-count.json?t=${Date.now()}`, {
        cache: 'no-store',
    });

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

setupProjectCarousel();
addTotalVisitCounter();
