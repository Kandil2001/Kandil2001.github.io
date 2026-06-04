const enhancementStyles = document.createElement('link');
enhancementStyles.rel = 'stylesheet';
enhancementStyles.href = document.currentScript.src.includes('/projects/') ? '../enhancements.css' : 'enhancements.css';
document.head.appendChild(enhancementStyles);

document.querySelectorAll('img[src*="Jupedsim-Evacuation-Analysis"][src$=".gif"]').forEach((image) => {
    image.src = 'https://raw.githubusercontent.com/Kandil2001/Jupedsim-Evacuation-Analysis/main/figures/pedestrian_heatmap.png';
    image.alt = 'Pedestrian-flow heatmap from the JuPedSim evacuation analysis project';
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
