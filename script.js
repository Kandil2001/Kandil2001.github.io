const GOATCOUNTER_CODE = 'kandil2001';
const GOATCOUNTER_BASE = `https://${GOATCOUNTER_CODE}.goatcounter.com`;

// Load GoatCounter on every page.
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

function counterUrl(path) {
    return `${GOATCOUNTER_BASE}/counter/${encodeURIComponent(path)}.json`;
}

async function getCount(path) {
    const response = await fetch(counterUrl(path), { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`Counter request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.count;
}

function addFooterAnalyticsShortcut() {
    const footer = document.querySelector('footer');
    if (!footer || footer.querySelector('.analytics-shortcut')) return;

    const onProjectPage = window.location.pathname.includes('/projects/');
    const analyticsPath = onProjectPage ? '../analytics.html' : 'analytics.html';

    const shortcut = document.createElement('div');
    shortcut.className = 'analytics-shortcut';
    shortcut.innerHTML = `
        <span>Portfolio views: <strong data-site-total>—</strong></span>
        <a href="${analyticsPath}">View site stats</a>
    `;
    footer.appendChild(shortcut);

    getCount('TOTAL')
        .then((count) => {
            const total = shortcut.querySelector('[data-site-total]');
            if (total) total.textContent = count;
        })
        .catch(() => {
            const total = shortcut.querySelector('[data-site-total]');
            if (total) {
                total.textContent = '—';
                total.title = 'Enable public visitor counts in GoatCounter settings to display this number.';
            }
        });
}

async function populateAnalyticsPage() {
    const cards = document.querySelectorAll('[data-goat-path]');
    if (!cards.length) return;

    await Promise.all(Array.from(cards).map(async (card) => {
        const path = card.dataset.goatPath;
        const value = card.querySelector('[data-count-value]');
        const status = card.querySelector('[data-count-status]');

        try {
            const count = await getCount(path);
            if (value) value.textContent = count;
            if (status) status.textContent = 'Tracked page views';
        } catch (error) {
            if (value) value.textContent = '—';
            if (status) status.textContent = 'Enable public visitor counts in GoatCounter settings';
        }
    }));

    const updated = document.querySelector('[data-stats-updated]');
    if (updated) {
        updated.textContent = `Checked ${new Date().toLocaleString()}`;
    }
}

addFooterAnalyticsShortcut();
populateAnalyticsPage();
