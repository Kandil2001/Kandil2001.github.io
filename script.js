const enhancementStyles = document.createElement('link');
enhancementStyles.rel = 'stylesheet';
enhancementStyles.href = document.currentScript.src.includes('/projects/') ? '../enhancements.css' : 'enhancements.css';
document.head.appendChild(enhancementStyles);

const isProjectPage = document.currentScript.src.includes('/projects/');
const localPedestrianImage = isProjectPage
    ? '../assets/images/pedestrian-simulation.svg?v=2'
    : 'assets/images/pedestrian-simulation.svg?v=2';

document.querySelectorAll('img[src*="Jupedsim-Evacuation-Analysis"], img[alt*="pedestrian" i]').forEach((image) => {
    image.src = localPedestrianImage;
    image.alt = 'Pedestrian evacuation and directional flow analysis';
    image.onerror = null;
});

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
