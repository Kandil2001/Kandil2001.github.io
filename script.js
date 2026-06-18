const GOATCOUNTER_BASE = 'https://kandil2001.goatcounter.com';
const IS_HOME_PAGE = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
const LANGUAGE_STORAGE_KEY = 'portfolio-language';

const translations = {
    en: {
        metaTitle: 'Ahmed Kandil | CFD & Scientific Computing',
        metaDescription: 'Ahmed Kandil portfolio: CFD, thermal-fluid simulation, scientific computing, solver validation, MATLAB, Python, C/C++, MPI, OpenMP, STAR-CCM+, ANSYS Fluent, and reproducible engineering workflows.',
        languageButton: 'DE',
        languageLabel: 'Switch language to German',
        'skip.link': 'Skip to content',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.eyebrow': 'CFD · thermal-fluid simulation · scientific software',
        'hero.title': 'CFD work that can be checked, rerun, and explained.',
        'hero.text': 'I am Ahmed Kandil, an engineer in Germany focused on CFD, heat transfer, numerical simulation, and scientific programming. I like projects where the physics is visible, the code is reproducible, and the results are compared honestly against reference data.',
        'hero.cta.projects': 'See selected projects',
        'panel.focus.title': 'Current focus',
        'panel.focus.text': 'Fraunhofer FFB, battery-cell production research, and low-humidity mini-environments.',
        'panel.strength.title': 'Main strength',
        'panel.strength.text': 'Connecting CFD physics, validation, clean code, and clear engineering communication.',
        'panel.code.title': 'Code stack',
        'panel.code.text': 'MATLAB, Python, C/C++, MPI, OpenMP, shell scripting, plotting workflows.',
        'panel.education.title': 'Education',
        'panel.education.text': 'M.Sc. Computer Simulation in Science, Bergische Universität Wuppertal.',
        'stats.cfd.title': 'CFD + R&D',
        'stats.cfd.text': 'Industrial and academic simulation experience',
        'stats.projects.title': '6+ projects',
        'stats.projects.text': 'Solver, HPC, LBM, TSP, and pedestrian simulation',
        'stats.validation.title': 'Validation-first',
        'stats.validation.text': 'Mesh studies, reference data, residuals, and limits',
        'stats.hpc.title': 'HPC mindset',
        'stats.hpc.text': 'Serial baselines before OpenMP, MPI, and acceleration',
        'about.label': 'What this portfolio shows',
        'about.title': 'Not just nice plots. A complete engineering story.',
        'about.text': 'This site is built around the way I try to work: understand the physics, write the setup clearly, run controlled comparisons, and document what worked as well as what still needs improvement.',
        'about.physics.title': 'Physics first',
        'about.physics.text': 'CFD and thermal-fluid problems are explained from the governing idea before jumping into software or code.',
        'about.workflow.title': 'Reproducible workflow',
        'about.workflow.text': 'Projects include structured folders, run instructions, CSV output, plots, and notes that make the result easier to check.',
        'about.validation.title': 'Honest validation',
        'about.validation.text': 'I prefer showing reference comparisons, mesh dependence, runtime limits, and failed or weak cases instead of hiding them.',
        'current.label': 'Current direction',
        'current.title': 'Low-humidity mini-environments and air-curtain sealing.',
        'current.text': 'At Fraunhofer FFB, my current thesis direction is connected to sealing low-humidity mini-environments against moisture ingress. The work combines literature review, process understanding, experimental thinking, and CFD planning around humidity, turbulence, temperature, and dew-point related behaviour.',
        'current.note': 'The technical details are kept high-level here because the work is connected to an active research environment.',
        'projects.label': 'Selected projects',
        'projects.title': 'CFD first. HPC and simulation around it.',
        'projects.intro': 'These are the projects I would show first to a CFD, simulation, or scientific-software recruiter.',
        'project.comparison.type': 'Main portfolio project',
        'project.comparison.title': 'Lid-Driven Cavity Solver Comparison',
        'project.comparison.text': 'A multi-language CFD benchmark comparing the same lid-driven cavity problem across readable reference code, compiled CPU solvers, MPI/OpenMP versions, and a CUDA prototype.',
        'project.comparison.result': 'it connects numerical thinking, code structure, validation, benchmarking, and HPC development in one project.',
        'project.cpp.type': 'C++ CFD baseline',
        'project.cpp.title': 'C++ Lid-Driven Cavity Solver',
        'project.cpp.text': 'A clean C++17 implementation used as a single-core baseline before adding parallel versions. The project keeps the numerical setup close to the MATLAB reference.',
        'project.cpp.result': 'refined-grid cases passed the selected Ghia validation thresholds.',
        'project.matlab.type': 'Reference solver',
        'project.matlab.title': 'MATLAB Lid-Driven Cavity Solver',
        'project.matlab.text': 'The reference implementation for the cavity benchmark, with looped and vectorized variants, mesh studies, solver comparison, and Ghia centreline validation.',
        'project.matlab.result': 'documented successful cases and limitations instead of only showing the best plots.',
        'project.lbm.type': 'LBM learning project',
        'project.lbm.title': 'D2Q9 LBM Channel Flow in C++',
        'project.lbm.text': 'A deliberately simple lattice Boltzmann code for 2D Poiseuille flow, checked against the analytical parabolic velocity profile.',
        'project.lbm.result': 'it shows learning a new CFD method from first principles while keeping the code readable.',
        'project.tsp.type': 'High-performance computing',
        'project.tsp.title': 'Distributed TSP Solver',
        'project.tsp.text': 'A C99/MPI optimisation project using parallel tempering, two-opt moves, precomputed distances, and coordinated replica exchange.',
        'project.tsp.result': 'reported strong speedup and good efficiency on the tested cluster setup.',
        'project.jps.type': 'Computational simulation',
        'project.jps.title': 'JuPedSim Evacuation Analysis',
        'project.jps.text': 'A reproducible pedestrian-dynamics workflow using a real building geometry, scenario logic, trajectory output, and visual post-processing.',
        'project.jps.result': 'it shows simulation setup, geometry handling, automation, and communication of results.',
        'project.why.label': 'Why it matters:',
        'project.result.label': 'Result:',
        'project.link.case': 'Read case study →',
        'project.link.repo': 'Repository ↗',
        'experience.label': 'Experience',
        'experience.title': 'Engineering and research experience',
        'experience.ffb.title': 'Fraunhofer FFB',
        'experience.ffb.date': 'Student Assistant · Jun 2026 – Present',
        'experience.ffb.text': 'Supporting battery-cell production research, process analysis, and engineering documentation. Current thesis direction: low-humidity mini-environments and air-curtain sealing.',
        'experience.uni.title': 'Bergische Universität Wuppertal',
        'experience.uni.date': 'Student Assistant · Jan 2026 – Present',
        'experience.uni.text': 'Supporting simulation and data-analysis workflows, including pedestrian-dynamics research and structured analysis output.',
        'experience.vorwerk.title': 'Vorwerk',
        'experience.vorwerk.date': 'Working Student · CFD · Mar 2024 – Mar 2026',
        'experience.vorwerk.text': 'Worked on thermal-fluid and multiphase simulation tasks, STAR-CCM+ workflows, Java automation, test-bench support, and engineering analysis.',
        'experience.fs.title': 'Mansoura Motorsport Formula Student',
        'experience.fs.date': 'Aerodynamics & Chief Engineer roles · 2020 – 2023',
        'experience.fs.text': 'Worked on bodywork, front-wing and vehicle-design decisions, connecting aerodynamics, CAD, simulation, manufacturing constraints, and team leadership.',
        'experience.grind.title': 'GRIND for Engineering Solutions',
        'experience.grind.date': 'CFD Engineer · Jun 2023 – Oct 2023',
        'experience.grind.text': 'Performed CFD simulation and design optimisation using ANSYS Fluent and engineering analysis tools.',
        'skills.label': 'Technical skills',
        'skills.title': 'Tools and methods I use',
        'skills.cfd.title': 'CFD & physics',
        'skills.cfd.text': 'Incompressible flow, heat transfer, multiphase flow, aerodynamics, thermal-fluid systems, humidity and dew-point related modelling.',
        'skills.numerics.title': 'Numerical methods',
        'skills.numerics.text': 'Pressure-correction ideas, iterative solvers, mesh studies, validation against reference data, and numerical-result interpretation.',
        'skills.programming.title': 'Programming',
        'skills.programming.text': 'MATLAB, Python, C, C++, Java automation, shell scripts, Git, structured CSV output, and plotting workflows.',
        'skills.hpc.title': 'HPC',
        'skills.hpc.text': 'MPI, OpenMP, CUDA basics, serial baselines, scaling tests, runtime comparison, and cluster-run documentation.',
        'skills.software.title': 'CFD software',
        'skills.software.text': 'STAR-CCM+, ANSYS Fluent, SimScale, OpenFOAM learning path, FDS/Smokeview, post-processing, and reporting.',
        'skills.communication.title': 'Communication',
        'skills.communication.text': 'Technical documentation, literature review, presentation preparation, English, Arabic, and German B2-level communication.',
        'education.label': 'Education and credentials',
        'education.title': 'Simulation foundation plus mechanical design background',
        'education.msc.title': 'Bergische Universität Wuppertal',
        'education.msc.date': 'M.Sc. Computer Simulation in Science · 2023 – Present',
        'education.msc.text': 'Focus areas: numerical simulation, scientific computing, mathematical modelling, programming, and applied computational methods.',
        'education.bsc.title': 'Mansoura University',
        'education.bsc.date': 'B.Sc. Mechatronics Engineering · 2018 – 2023',
        'education.bsc.text': 'Bachelor thesis on CFD-based micro-pin-fin heat-sink analysis for microprocessor cooling.',
        'education.sw.title': 'SOLIDWORKS certifications',
        'education.sw.date': '6 credentials',
        'education.sw.text': 'Mechanical design, surfacing, drawings, mold tools, and expert-level CAD certification background.',
        'contact.label': 'Contact',
        'contact.title': 'Let’s connect',
        'contact.text': 'I am interested in CFD, numerical simulation, scientific computing, and engineering R&D roles where clear modelling and reproducible workflows matter.',
        'contact.email.label': 'Email:',
        'contact.email.button': 'Email me',
        'footer.text': '© 2026 Ahmed Kandil. Built with GitHub Pages.'
    },
    de: {
        metaTitle: 'Ahmed Kandil | CFD & Scientific Computing',
        metaDescription: 'Portfolio von Ahmed Kandil: CFD, thermofluiddynamische Simulation, Scientific Computing, Solver-Validierung, MATLAB, Python, C/C++, MPI, OpenMP, STAR-CCM+, ANSYS Fluent und reproduzierbare Engineering-Workflows.',
        languageButton: 'EN',
        languageLabel: 'Sprache auf Englisch umstellen',
        'skip.link': 'Zum Inhalt springen',
        'nav.about': 'Über mich',
        'nav.projects': 'Projekte',
        'nav.experience': 'Erfahrung',
        'nav.skills': 'Skills',
        'nav.contact': 'Kontakt',
        'hero.eyebrow': 'CFD · thermofluiddynamische Simulation · wissenschaftliche Software',
        'hero.title': 'CFD-Arbeit, die überprüfbar, reproduzierbar und verständlich ist.',
        'hero.text': 'Ich bin Ahmed Kandil, Ingenieur in Deutschland mit Fokus auf CFD, Wärmeübertragung, numerische Simulation und wissenschaftliche Programmierung. Mich interessieren Projekte, bei denen die Physik sichtbar bleibt, der Code reproduzierbar ist und die Ergebnisse ehrlich mit Referenzdaten verglichen werden.',
        'hero.cta.projects': 'Ausgewählte Projekte ansehen',
        'panel.focus.title': 'Aktueller Fokus',
        'panel.focus.text': 'Fraunhofer FFB, Batteriezellfertigungsforschung und Mini-Environments mit niedriger Luftfeuchtigkeit.',
        'panel.strength.title': 'Stärke',
        'panel.strength.text': 'CFD-Physik, Validierung, sauberen Code und klare technische Kommunikation miteinander verbinden.',
        'panel.code.title': 'Code-Stack',
        'panel.code.text': 'MATLAB, Python, C/C++, MPI, OpenMP, Shell-Skripte und Plotting-Workflows.',
        'panel.education.title': 'Ausbildung',
        'panel.education.text': 'M.Sc. Computer Simulation in Science, Bergische Universität Wuppertal.',
        'stats.cfd.title': 'CFD + F&E',
        'stats.cfd.text': 'Industrie- und Hochschulerfahrung in Simulation',
        'stats.projects.title': '6+ Projekte',
        'stats.projects.text': 'Solver, HPC, LBM, TSP und Fußgängersimulation',
        'stats.validation.title': 'Validierung zuerst',
        'stats.validation.text': 'Netzstudien, Referenzdaten, Residuen und Grenzen',
        'stats.hpc.title': 'HPC-Denkweise',
        'stats.hpc.text': 'Serielle Baselines vor OpenMP, MPI und Beschleunigung',
        'about.label': 'Was dieses Portfolio zeigt',
        'about.title': 'Nicht nur schöne Plots. Eine vollständige Engineering-Story.',
        'about.text': 'Diese Website zeigt, wie ich arbeite: die Physik verstehen, den Aufbau klar dokumentieren, kontrollierte Vergleiche durchführen und festhalten, was funktioniert hat und was noch verbessert werden muss.',
        'about.physics.title': 'Physik zuerst',
        'about.physics.text': 'CFD- und thermofluiddynamische Probleme werden zuerst über die Grundidee erklärt, bevor Software oder Code im Mittelpunkt stehen.',
        'about.workflow.title': 'Reproduzierbarer Workflow',
        'about.workflow.text': 'Die Projekte enthalten strukturierte Ordner, Run-Anleitungen, CSV-Ausgaben, Plots und Notizen, damit Ergebnisse leichter überprüft werden können.',
        'about.validation.title': 'Ehrliche Validierung',
        'about.validation.text': 'Ich zeige lieber Referenzvergleiche, Netzabhängigkeiten, Laufzeitgrenzen und schwache Fälle, statt sie zu verstecken.',
        'current.label': 'Aktuelle Richtung',
        'current.title': 'Mini-Environments mit niedriger Luftfeuchtigkeit und Abdichtung durch Air Curtains.',
        'current.text': 'Bei Fraunhofer FFB ist meine aktuelle Thesis-Richtung mit der Abdichtung von Mini-Environments mit niedriger Luftfeuchtigkeit gegen Feuchteeintrag verbunden. Die Arbeit kombiniert Literaturrecherche, Prozessverständnis, experimentelles Denken und CFD-Planung rund um Feuchte, Turbulenz, Temperatur und Taupunktverhalten.',
        'current.note': 'Die technischen Details bleiben hier bewusst allgemein, weil die Arbeit mit einer aktiven Forschungsumgebung verbunden ist.',
        'projects.label': 'Ausgewählte Projekte',
        'projects.title': 'CFD zuerst. HPC und Simulation darum herum.',
        'projects.intro': 'Das sind die Projekte, die ich einem Recruiter für CFD, Simulation oder Scientific Software zuerst zeigen würde.',
        'project.comparison.type': 'Hauptprojekt im Portfolio',
        'project.comparison.title': 'Lid-Driven-Cavity Solver-Vergleich',
        'project.comparison.text': 'Ein CFD-Benchmark über mehrere Programmiersprachen, der dasselbe Lid-Driven-Cavity-Problem mit lesbarem Referenzcode, kompilierten CPU-Solvern, MPI/OpenMP-Versionen und einem CUDA-Prototyp vergleicht.',
        'project.comparison.result': 'es verbindet numerisches Denken, Code-Struktur, Validierung, Benchmarking und HPC-Entwicklung in einem Projekt.',
        'project.cpp.type': 'C++ CFD-Baseline',
        'project.cpp.title': 'C++ Lid-Driven-Cavity Solver',
        'project.cpp.text': 'Eine saubere C++17-Implementierung als Single-Core-Baseline, bevor parallele Versionen ergänzt werden. Das Projekt bleibt numerisch nah an der MATLAB-Referenz.',
        'project.cpp.result': 'verfeinerte Gitterfälle erfüllen die ausgewählten Ghia-Validierungsschwellen.',
        'project.matlab.type': 'Referenzsolver',
        'project.matlab.title': 'MATLAB Lid-Driven-Cavity Solver',
        'project.matlab.text': 'Die Referenzimplementierung für den Cavity-Benchmark mit Schleifen- und Vektorvarianten, Netzstudien, Solver-Vergleich und Ghia-Centerline-Validierung.',
        'project.matlab.result': 'erfolgreiche Fälle und Grenzen werden dokumentiert, statt nur die besten Plots zu zeigen.',
        'project.lbm.type': 'LBM-Lernprojekt',
        'project.lbm.title': 'D2Q9 LBM Channel Flow in C++',
        'project.lbm.text': 'Ein bewusst einfacher Lattice-Boltzmann-Code für 2D-Poiseuille-Strömung, geprüft gegen das analytische parabolische Geschwindigkeitsprofil.',
        'project.lbm.result': 'es zeigt, wie ich eine neue CFD-Methode von Grund auf lerne und den Code trotzdem lesbar halte.',
        'project.tsp.type': 'High-Performance Computing',
        'project.tsp.title': 'Distributed TSP Solver',
        'project.tsp.text': 'Ein C99/MPI-Optimierungsprojekt mit Parallel Tempering, Two-Opt-Schritten, vorberechneten Distanzen und koordiniertem Replica Exchange.',
        'project.tsp.result': 'auf dem getesteten Cluster-Setup wurden guter Speedup und gute Effizienz berichtet.',
        'project.jps.type': 'Computational Simulation',
        'project.jps.title': 'JuPedSim Evacuation Analysis',
        'project.jps.text': 'Ein reproduzierbarer Workflow für Fußgängerdynamik mit realer Gebäudegeometrie, Szenariologik, Trajektorienausgabe und visueller Nachbearbeitung.',
        'project.jps.result': 'es zeigt Simulationsaufbau, Geometriehandling, Automatisierung und Ergebnis-Kommunikation.',
        'project.why.label': 'Warum es wichtig ist:',
        'project.result.label': 'Ergebnis:',
        'project.link.case': 'Case Study lesen →',
        'project.link.repo': 'Repository ↗',
        'experience.label': 'Erfahrung',
        'experience.title': 'Engineering- und Forschungserfahrung',
        'experience.ffb.title': 'Fraunhofer FFB',
        'experience.ffb.date': 'Studentische Hilfskraft · Juni 2026 – heute',
        'experience.ffb.text': 'Unterstützung bei Forschung zur Batteriezellfertigung, Prozessanalyse und technischer Dokumentation. Aktuelle Thesis-Richtung: Mini-Environments mit niedriger Luftfeuchtigkeit und Air-Curtain-Abdichtung.',
        'experience.uni.title': 'Bergische Universität Wuppertal',
        'experience.uni.date': 'Studentische Hilfskraft · Jan. 2026 – heute',
        'experience.uni.text': 'Unterstützung von Simulations- und Datenanalyse-Workflows, einschließlich Fußgängerdynamik und strukturierter Ergebnisauswertung.',
        'experience.vorwerk.title': 'Vorwerk',
        'experience.vorwerk.date': 'Werkstudent · CFD · März 2024 – März 2026',
        'experience.vorwerk.text': 'Arbeit an thermofluiddynamischen und mehrphasigen Simulationsaufgaben, STAR-CCM+-Workflows, Java-Automatisierung, Prüfstandsunterstützung und technischer Analyse.',
        'experience.fs.title': 'Mansoura Motorsport Formula Student',
        'experience.fs.date': 'Aerodynamik & Chief-Engineer-Rollen · 2020 – 2023',
        'experience.fs.text': 'Arbeit an Bodywork, Front Wing und Fahrzeugdesign-Entscheidungen mit Verbindung von Aerodynamik, CAD, Simulation, Fertigungsgrenzen und Teamführung.',
        'experience.grind.title': 'GRIND for Engineering Solutions',
        'experience.grind.date': 'CFD Engineer · Juni 2023 – Okt. 2023',
        'experience.grind.text': 'Durchführung von CFD-Simulationen und Designoptimierung mit ANSYS Fluent und Engineering-Analysewerkzeugen.',
        'skills.label': 'Technische Skills',
        'skills.title': 'Tools und Methoden, die ich nutze',
        'skills.cfd.title': 'CFD & Physik',
        'skills.cfd.text': 'Inkompressible Strömung, Wärmeübertragung, Mehrphasenströmung, Aerodynamik, thermofluiddynamische Systeme sowie Feuchte- und Taupunktmodellierung.',
        'skills.numerics.title': 'Numerische Methoden',
        'skills.numerics.text': 'Pressure-Correction-Ideen, iterative Solver, Netzstudien, Validierung gegen Referenzdaten und Interpretation numerischer Ergebnisse.',
        'skills.programming.title': 'Programmierung',
        'skills.programming.text': 'MATLAB, Python, C, C++, Java-Automatisierung, Shell-Skripte, Git, strukturierte CSV-Ausgabe und Plotting-Workflows.',
        'skills.hpc.title': 'HPC',
        'skills.hpc.text': 'MPI, OpenMP, CUDA-Grundlagen, serielle Baselines, Scaling-Tests, Laufzeitvergleiche und Dokumentation von Cluster-Runs.',
        'skills.software.title': 'CFD-Software',
        'skills.software.text': 'STAR-CCM+, ANSYS Fluent, SimScale, OpenFOAM-Lernpfad, FDS/Smokeview, Postprocessing und Reporting.',
        'skills.communication.title': 'Kommunikation',
        'skills.communication.text': 'Technische Dokumentation, Literaturrecherche, Präsentationsvorbereitung, Englisch, Arabisch und Deutsch auf B2-Niveau.',
        'education.label': 'Ausbildung und Zertifikate',
        'education.title': 'Simulationsgrundlage plus mechanischer Design-Hintergrund',
        'education.msc.title': 'Bergische Universität Wuppertal',
        'education.msc.date': 'M.Sc. Computer Simulation in Science · 2023 – heute',
        'education.msc.text': 'Schwerpunkte: numerische Simulation, Scientific Computing, mathematische Modellierung, Programmierung und angewandte computergestützte Methoden.',
        'education.bsc.title': 'Mansoura University',
        'education.bsc.date': 'B.Sc. Mechatronics Engineering · 2018 – 2023',
        'education.bsc.text': 'Bachelorarbeit zur CFD-basierten Analyse eines Micro-Pin-Fin-Kühlkörpers für Mikroprozessor-Kühlung.',
        'education.sw.title': 'SOLIDWORKS-Zertifikate',
        'education.sw.date': '6 Zertifikate',
        'education.sw.text': 'Hintergrund in mechanischem Design, Oberflächenmodellierung, technischen Zeichnungen, Mold Tools und Expert-Level-CAD-Zertifizierung.',
        'contact.label': 'Kontakt',
        'contact.title': 'Lass uns vernetzen',
        'contact.text': 'Ich interessiere mich für CFD, numerische Simulation, Scientific Computing und Engineering-R&D-Rollen, in denen klare Modellierung und reproduzierbare Workflows wichtig sind.',
        'contact.email.label': 'E-Mail:',
        'contact.email.button': 'E-Mail schreiben',
        'footer.text': '© 2026 Ahmed Kandil. Erstellt mit GitHub Pages.'
    }
};

function loadAnalytics() {
    const goatCounterScript = document.createElement('script');
    goatCounterScript.async = true;
    goatCounterScript.src = 'https://gc.zgo.at/count.js';
    goatCounterScript.dataset.goatcounter = `${GOATCOUNTER_BASE}/count`;
    document.head.appendChild(goatCounterScript);
}

function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const queryLanguage = params.get('lang');
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (queryLanguage === 'de' || queryLanguage === 'en') return queryLanguage;
    if (savedLanguage === 'de' || savedLanguage === 'en') return savedLanguage;
    return 'en';
}

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : 'en';
    const dictionary = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.title = dictionary.metaTitle;

    const description = document.querySelector('meta[name="description"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');

    if (description) description.setAttribute('content', dictionary.metaDescription);
    if (openGraphDescription) openGraphDescription.setAttribute('content', dictionary.metaDescription);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    const languageButton = document.querySelector('[data-language-toggle]');
    if (languageButton) {
        languageButton.textContent = dictionary.languageButton;
        languageButton.setAttribute('aria-label', dictionary.languageLabel);
        languageButton.setAttribute('title', dictionary.languageLabel);
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
}

function setupLanguageToggle() {
    const languageButton = document.querySelector('[data-language-toggle]');
    if (!languageButton) return;

    applyLanguage(getInitialLanguage());

    languageButton.addEventListener('click', () => {
        const nextLanguage = document.documentElement.lang === 'de' ? 'en' : 'de';
        applyLanguage(nextLanguage);
    });
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
setupLanguageToggle();
setupMobileNavigation();
setupProjectCarousel();
addTotalVisitCounter();
