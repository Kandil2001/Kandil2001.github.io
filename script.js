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
    const track = document.querySelector('#project-track');
    const previousButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const status = document.querySelector('.carousel-status');

    if (!track || !previousButton || !nextButton) return;

    const cards = Array.from(track.querySelectorAll('.project-card'));
    if (!cards.length) return;

    let currentIndex = 0;

    const updateStatus = () => {
        const trackLeft = track.getBoundingClientRect().left;
        const distances = cards.map((card) => Math.abs(card.getBoundingClientRect().left - trackLeft));
        currentIndex = distances.indexOf(Math.min(...distances));

        if (status) {
            status.textContent = `${currentIndex + 1} / ${cards.length}`;
        }

        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === cards.length - 1;
    };

    const scrollToCard = (index) => {
        const safeIndex = Math.max(0, Math.min(cards.length - 1, index));
        cards[safeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        currentIndex = safeIndex;
        window.setTimeout(updateStatus, 350);
    };

    previousButton.addEventListener('click', () => scrollToCard(currentIndex - 1));
    nextButton.addEventListener('click', () => scrollToCard(currentIndex + 1));
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
