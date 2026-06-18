const GOATCOUNTER_BASE = 'https://kandil2001.goatcounter.com';
const IS_HOME_PAGE = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
const LANGUAGE_STORAGE_KEY = 'portfolio-language';

const translations = {
    en: {
        metaTitle: 'Ahmed Kandil | CFD & Scientific Computing',
        metaDescription: 'Ahmed Kandil portfolio: CFD, thermal-fluid simulation, scientific computing, solver validation, MATLAB, Python, C/C++, MPI, OpenMP, STAR-CCM+, ANSYS Fluent, and reproducible engineering workflows.',
        languageButton: 'Deutsch',
        languageLabel: 'Switch website language to German',
        'skip.link': 'Skip to content',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.eyebrow': 'CFD · heat transfer · scientific code',
        'hero.title': 'I build CFD and simulation projects that are easy to check.',
        'hero.text': 'I’m Ahmed Kandil, an engineer in Germany focused on CFD, heat transfer, numerical simulation, and scientific programming. I like work where the physics is clear, the code can be rerun, and the results are compared honestly instead of just looking nice.',
        'hero.cta.projects': 'Look at my projects',
        'panel.focus.title': 'What I’m working on now',
        'panel.focus.text': 'Fraunhofer FFB, battery-cell production research, and low-humidity mini-environments.',
        'panel.strength.title': 'What I do well',
        'panel.strength.text': 'I connect CFD, validation, clean code, and clear engineering explanation.',
        'panel.code.title': 'Tools I use often',
        'panel.code.text': 'MATLAB, Python, C/C++, MPI, OpenMP, shell scripts, and plotting workflows.',
        'panel.education.title': 'Study',
        'panel.education.text': 'M.Sc. Computer Simulation in Science, Bergische Universität Wuppertal.',
        'stats.cfd.title': 'CFD + R&D',
        'stats.cfd.text': 'Simulation work from university and industry',
        'stats.projects.title': '6+ projects',
        'stats.projects.text': 'CFD solvers, HPC, LBM, TSP, and evacuation simulation',
        'stats.validation.title': 'Validation mindset',
        'stats.validation.text': 'Reference data, mesh studies, residuals, and limitations',
        'stats.hpc.title': 'HPC basics done properly',
        'stats.hpc.text': 'Serial baseline first, then OpenMP, MPI, and acceleration',
        'about.label': 'How I try to work',
        'about.title': 'I do not want this to be only a gallery of nice plots.',
        'about.text': 'For me, a good simulation project should tell the full story: what problem I solved, what assumptions I made, how I ran it, what I compared it with, and what still needs improvement.',
        'about.physics.title': 'Start with the physics',
        'about.physics.text': 'Before talking about software, I try to explain what is happening in the flow, the heat transfer, or the numerical model.',
        'about.workflow.title': 'Make it easy to rerun',
        'about.workflow.text': 'I try to keep folders, run scripts, CSV files, plots, and notes structured so someone else can follow the work.',
        'about.validation.title': 'Show the weak points too',
        'about.validation.text': 'I prefer showing reference comparisons, mesh effects, runtime limits, and unstable cases instead of pretending everything is perfect.',
        'current.label': 'Current direction',
        'current.title': 'Air curtains for low-humidity mini-environments.',
        'current.text': 'At Fraunhofer FFB, my current thesis direction is about reducing moisture ingress into low-humidity mini-environments. The work connects literature review, process understanding, experiment planning, and CFD around humidity, turbulence, temperature, and dew point behaviour.',
        'current.note': 'I keep this part high-level here because it is connected to an active research environment.',
        'projects.label': 'Selected projects',
        'projects.title': 'CFD first, then HPC and simulation around it.',
        'projects.intro': 'These are the projects I would show first to someone hiring for CFD, simulation, or scientific software.',
        'project.comparison.type': 'Main portfolio project',
        'project.comparison.title': 'Lid-Driven Cavity Solver Comparison',
        'project.comparison.text': 'A CFD benchmark where I solve the same cavity-flow problem in different languages and compare readable reference code, compiled CPU solvers, MPI/OpenMP versions, and a CUDA prototype.',
        'project.comparison.result': 'it brings together numerical methods, code structure, validation, benchmarking, and HPC work in one place.',
        'project.cpp.type': 'C++ CFD baseline',
        'project.cpp.title': 'C++ Lid-Driven Cavity Solver',
        'project.cpp.text': 'A clean C++17 version used as the single-core baseline before moving to parallel versions. I kept the setup close to the MATLAB reference so the comparison stays fair.',
        'project.cpp.result': 'the refined-grid cases passed the selected Ghia validation limits.',
        'project.matlab.type': 'Reference solver',
        'project.matlab.title': 'MATLAB Lid-Driven Cavity Solver',
        'project.matlab.text': 'The reference version for the cavity benchmark, with looped and vectorized code, mesh studies, solver comparison, and Ghia centreline validation.',
        'project.matlab.result': 'I documented what worked and what did not, not only the cleanest plots.',
        'project.lbm.type': 'LBM learning project',
        'project.lbm.title': 'D2Q9 LBM Channel Flow in C++',
        'project.lbm.text': 'A simple lattice Boltzmann code for 2D Poiseuille flow, checked against the analytical parabolic velocity profile.',
        'project.lbm.result': 'it shows how I learn a new CFD method from the basics while keeping the code readable.',
        'project.tsp.type': 'High-performance computing',
        'project.tsp.title': 'Distributed TSP Solver',
        'project.tsp.text': 'A C99/MPI optimisation project using parallel tempering, two-opt moves, precomputed distances, and replica exchange.',
        'project.tsp.result': 'the tested cluster runs showed strong speedup and good efficiency.',
        'project.jps.type': 'Computational simulation',
        'project.jps.title': 'JuPedSim Evacuation Analysis',
        'project.jps.text': 'A reproducible pedestrian-simulation workflow using real building geometry, scenario logic, trajectory output, and visual post-processing.',
        'project.jps.result': 'it shows geometry handling, simulation setup, automation, and result communication.',
        'project.why.label': 'Why it matters:',
        'project.result.label': 'Result:',
        'project.link.case': 'Read case study →',
        'project.link.repo': 'Repository ↗',
        'experience.label': 'Experience',
        'experience.title': 'Where I have worked on engineering and simulation',
        'experience.ffb.title': 'Fraunhofer FFB',
        'experience.ffb.date': 'Student Assistant · Jun 2026 – Present',
        'experience.ffb.text': 'Supporting research around battery-cell production, process analysis, and technical documentation. My thesis direction is linked to low-humidity mini-environments and air-curtain sealing.',
        'experience.uni.title': 'Bergische Universität Wuppertal',
        'experience.uni.date': 'Student Assistant · Jan 2026 – Present',
        'experience.uni.text': 'Supporting simulation and data-analysis work, including pedestrian-dynamics research and structured result output.',
        'experience.vorwerk.title': 'Vorwerk',
        'experience.vorwerk.date': 'Working Student · CFD · Mar 2024 – Mar 2026',
        'experience.vorwerk.text': 'Worked on thermal-fluid and multiphase simulation tasks, STAR-CCM+ workflows, Java automation, test-bench support, and engineering analysis.',
        'experience.fs.title': 'Mansoura Motorsport Formula Student',
        'experience.fs.date': 'Aerodynamics & Chief Engineer roles · 2020 – 2023',
        'experience.fs.text': 'Worked on bodywork, front wing, and vehicle-design decisions, connecting aerodynamics, CAD, simulation, manufacturing limits, and team leadership.',
        'experience.grind.title': 'GRIND for Engineering Solutions',
        'experience.grind.date': 'CFD Engineer · Jun 2023 – Oct 2023',
        'experience.grind.text': 'Worked on CFD simulations and design optimisation using ANSYS Fluent and engineering analysis tools.',
        'skills.label': 'Technical skills',
        'skills.title': 'Tools and methods I am comfortable with',
        'skills.cfd.title': 'CFD & physics',
        'skills.cfd.text': 'Incompressible flow, heat transfer, multiphase flow, aerodynamics, thermal-fluid systems, humidity, and dew-point related modelling.',
        'skills.numerics.title': 'Numerical methods',
        'skills.numerics.text': 'Pressure-correction ideas, iterative solvers, mesh studies, validation against reference data, and interpretation of numerical results.',
        'skills.programming.title': 'Programming',
        'skills.programming.text': 'MATLAB, Python, C, C++, Java automation, shell scripts, Git, structured CSV output, and plotting workflows.',
        'skills.hpc.title': 'HPC',
        'skills.hpc.text': 'MPI, OpenMP, CUDA basics, serial baselines, scaling tests, runtime comparison, and cluster-run documentation.',
        'skills.software.title': 'CFD software',
        'skills.software.text': 'STAR-CCM+, ANSYS Fluent, SimScale, OpenFOAM learning path, FDS/Smokeview, post-processing, and reporting.',
        'skills.communication.title': 'Communication',
        'skills.communication.text': 'Technical documentation, literature review, presentation preparation, English, Arabic, and German B2-level communication.',
        'education.label': 'Education and certificates',
        'education.title': 'Simulation background with mechanical engineering roots',
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
        'contact.text': 'I am interested in CFD, numerical simulation, scientific computing, and engineering R&D roles where clear modelling and reproducible work matter.',
        'contact.email.label': 'Email:',
        'contact.email.button': 'Email me',
        'footer.text': '© 2026 Ahmed Kandil. Built with GitHub Pages.'
    },
    de: {
        metaTitle: 'Ahmed Kandil | CFD & Scientific Computing',
        metaDescription: 'Portfolio von Ahmed Kandil: CFD, thermofluiddynamische Simulation, Scientific Computing, Solver-Validierung, MATLAB, Python, C/C++, MPI, OpenMP, STAR-CCM+, ANSYS Fluent und reproduzierbare Engineering-Workflows.',
        languageButton: 'English',
        languageLabel: 'Website auf Englisch umstellen',
        'skip.link': 'Zum Inhalt springen',
        'nav.about': 'Über mich',
        'nav.projects': 'Projekte',
        'nav.experience': 'Erfahrung',
        'nav.skills': 'Skills',
        'nav.contact': 'Kontakt',
        'hero.eyebrow': 'CFD · Wärmeübertragung · wissenschaftlicher Code',
        'hero.title': 'Ich baue CFD- und Simulationsprojekte, die man nachvollziehen kann.',
        'hero.text': 'Ich bin Ahmed Kandil, Ingenieur in Deutschland mit Fokus auf CFD, Wärmeübertragung, numerische Simulation und wissenschaftliche Programmierung. Mir sind Projekte wichtig, bei denen die Physik klar bleibt, der Code wieder ausführbar ist und die Ergebnisse ehrlich verglichen werden, nicht nur schön aussehen.',
        'hero.cta.projects': 'Projekte ansehen',
        'panel.focus.title': 'Woran ich gerade arbeite',
        'panel.focus.text': 'Fraunhofer FFB, Batteriezellfertigungsforschung und Mini-Environments mit niedriger Luftfeuchtigkeit.',
        'panel.strength.title': 'Was ich gut kann',
        'panel.strength.text': 'CFD, Validierung, sauberen Code und klare technische Erklärung miteinander verbinden.',
        'panel.code.title': 'Tools, die ich oft nutze',
        'panel.code.text': 'MATLAB, Python, C/C++, MPI, OpenMP, Shell-Skripte und Plotting-Workflows.',
        'panel.education.title': 'Studium',
        'panel.education.text': 'M.Sc. Computer Simulation in Science, Bergische Universität Wuppertal.',
        'stats.cfd.title': 'CFD + F&E',
        'stats.cfd.text': 'Simulationserfahrung aus Uni und Industrie',
        'stats.projects.title': '6+ Projekte',
        'stats.projects.text': 'CFD-Solver, HPC, LBM, TSP und Evakuierungssimulation',
        'stats.validation.title': 'Validierung im Fokus',
        'stats.validation.text': 'Referenzdaten, Netzstudien, Residuen und Grenzen',
        'stats.hpc.title': 'HPC sauber aufgebaut',
        'stats.hpc.text': 'Erst serielle Baseline, dann OpenMP, MPI und Beschleunigung',
        'about.label': 'Wie ich arbeite',
        'about.title': 'Ich möchte hier nicht nur schöne Plots zeigen.',
        'about.text': 'Ein gutes Simulationsprojekt sollte für mich die ganze Geschichte zeigen: welches Problem gelöst wurde, welche Annahmen drin sind, wie es gelaufen ist, womit verglichen wurde und was noch besser werden muss.',
        'about.physics.title': 'Mit der Physik anfangen',
        'about.physics.text': 'Bevor es um Software geht, versuche ich zu erklären, was in der Strömung, in der Wärmeübertragung oder im numerischen Modell passiert.',
        'about.workflow.title': 'Leicht reproduzierbar machen',
        'about.workflow.text': 'Ich versuche Ordner, Run-Skripte, CSV-Dateien, Plots und Notizen so zu strukturieren, dass andere die Arbeit nachvollziehen können.',
        'about.validation.title': 'Auch Schwächen zeigen',
        'about.validation.text': 'Ich zeige lieber Referenzvergleiche, Netzabhängigkeiten, Laufzeitgrenzen und instabile Fälle, statt so zu tun, als wäre alles perfekt.',
        'current.label': 'Aktuelle Richtung',
        'current.title': 'Air Curtains für Mini-Environments mit niedriger Luftfeuchtigkeit.',
        'current.text': 'Bei Fraunhofer FFB geht meine aktuelle Thesis-Richtung darum, Feuchteeintrag in Mini-Environments mit niedriger Luftfeuchtigkeit zu reduzieren. Die Arbeit verbindet Literaturrecherche, Prozessverständnis, Versuchsplanung und CFD rund um Feuchte, Turbulenz, Temperatur und Taupunktverhalten.',
        'current.note': 'Ich halte diesen Teil hier bewusst allgemein, weil die Arbeit mit einer aktiven Forschungsumgebung verbunden ist.',
        'projects.label': 'Ausgewählte Projekte',
        'projects.title': 'Erst CFD, dann HPC und Simulation drumherum.',
        'projects.intro': 'Das sind die Projekte, die ich jemandem zeigen würde, der für CFD, Simulation oder wissenschaftliche Software einstellt.',
        'project.comparison.type': 'Hauptprojekt im Portfolio',
        'project.comparison.title': 'Lid-Driven-Cavity Solver-Vergleich',
        'project.comparison.text': 'Ein CFD-Benchmark, bei dem ich dasselbe Cavity-Flow-Problem in verschiedenen Sprachen löse und lesbaren Referenzcode, kompilierte CPU-Solver, MPI/OpenMP-Versionen und einen CUDA-Prototyp vergleiche.',
        'project.comparison.result': 'es bringt numerische Methoden, Code-Struktur, Validierung, Benchmarking und HPC-Arbeit an einem Ort zusammen.',
        'project.cpp.type': 'C++ CFD-Baseline',
        'project.cpp.title': 'C++ Lid-Driven-Cavity Solver',
        'project.cpp.text': 'Eine saubere C++17-Version als Single-Core-Baseline, bevor parallele Versionen dazukommen. Ich habe den Aufbau nah an der MATLAB-Referenz gehalten, damit der Vergleich fair bleibt.',
        'project.cpp.result': 'die verfeinerten Gitterfälle haben die ausgewählten Ghia-Validierungsgrenzen erfüllt.',
        'project.matlab.type': 'Referenzsolver',
        'project.matlab.title': 'MATLAB Lid-Driven-Cavity Solver',
        'project.matlab.text': 'Die Referenzversion für den Cavity-Benchmark mit Schleifen- und Vektorcode, Netzstudien, Solver-Vergleich und Ghia-Centerline-Validierung.',
        'project.matlab.result': 'ich habe dokumentiert, was funktioniert hat und was nicht, nicht nur die saubersten Plots.',
        'project.lbm.type': 'LBM-Lernprojekt',
        'project.lbm.title': 'D2Q9 LBM Channel Flow in C++',
        'project.lbm.text': 'Ein einfacher Lattice-Boltzmann-Code für 2D-Poiseuille-Strömung, geprüft gegen das analytische parabolische Geschwindigkeitsprofil.',
        'project.lbm.result': 'es zeigt, wie ich eine neue CFD-Methode von den Grundlagen lerne und den Code trotzdem lesbar halte.',
        'project.tsp.type': 'High-Performance Computing',
        'project.tsp.title': 'Distributed TSP Solver',
        'project.tsp.text': 'Ein C99/MPI-Optimierungsprojekt mit Parallel Tempering, Two-Opt-Schritten, vorberechneten Distanzen und Replica Exchange.',
        'project.tsp.result': 'die getesteten Cluster-Runs haben guten Speedup und gute Effizienz gezeigt.',
        'project.jps.type': 'Computational Simulation',
        'project.jps.title': 'JuPedSim Evacuation Analysis',
        'project.jps.text': 'Ein reproduzierbarer Workflow für Fußgängersimulation mit realer Gebäudegeometrie, Szenariologik, Trajektorienausgabe und visueller Nachbearbeitung.',
        'project.jps.result': 'es zeigt Geometriehandling, Simulationsaufbau, Automatisierung und Ergebnis-Kommunikation.',
        'project.why.label': 'Warum es wichtig ist:',
        'project.result.label': 'Ergebnis:',
        'project.link.case': 'Case Study lesen →',
        'project.link.repo': 'Repository ↗',
        'experience.label': 'Erfahrung',
        'experience.title': 'Wo ich an Engineering und Simulation gearbeitet habe',
        'experience.ffb.title': 'Fraunhofer FFB',
        'experience.ffb.date': 'Studentische Hilfskraft · Juni 2026 – heute',
        'experience.ffb.text': 'Unterstützung bei Forschung zur Batteriezellfertigung, Prozessanalyse und technischer Dokumentation. Meine Thesis-Richtung ist mit Mini-Environments mit niedriger Luftfeuchtigkeit und Air-Curtain-Abdichtung verbunden.',
        'experience.uni.title': 'Bergische Universität Wuppertal',
        'experience.uni.date': 'Studentische Hilfskraft · Jan. 2026 – heute',
        'experience.uni.text': 'Unterstützung von Simulations- und Datenanalysearbeit, unter anderem in Fußgängerdynamik und strukturierter Ergebnisausgabe.',
        'experience.vorwerk.title': 'Vorwerk',
        'experience.vorwerk.date': 'Werkstudent · CFD · März 2024 – März 2026',
        'experience.vorwerk.text': 'Arbeit an thermofluiddynamischen und mehrphasigen Simulationsaufgaben, STAR-CCM+-Workflows, Java-Automatisierung, Prüfstandsunterstützung und technischer Analyse.',
        'experience.fs.title': 'Mansoura Motorsport Formula Student',
        'experience.fs.date': 'Aerodynamik & Chief-Engineer-Rollen · 2020 – 2023',
        'experience.fs.text': 'Arbeit an Bodywork, Front Wing und Fahrzeugdesign-Entscheidungen, mit Verbindung von Aerodynamik, CAD, Simulation, Fertigungsgrenzen und Teamführung.',
        'experience.grind.title': 'GRIND for Engineering Solutions',
        'experience.grind.date': 'CFD Engineer · Juni 2023 – Okt. 2023',
        'experience.grind.text': 'Arbeit an CFD-Simulationen und Designoptimierung mit ANSYS Fluent und Engineering-Analysewerkzeugen.',
        'skills.label': 'Technische Skills',
        'skills.title': 'Tools und Methoden, mit denen ich sicher arbeite',
        'skills.cfd.title': 'CFD & Physik',
        'skills.cfd.text': 'Inkompressible Strömung, Wärmeübertragung, Mehrphasenströmung, Aerodynamik, thermofluiddynamische Systeme, Feuchte und Taupunktmodellierung.',
        'skills.numerics.title': 'Numerische Methoden',
        'skills.numerics.text': 'Pressure-Correction-Ideen, iterative Solver, Netzstudien, Validierung mit Referenzdaten und Interpretation numerischer Ergebnisse.',
        'skills.programming.title': 'Programmierung',
        'skills.programming.text': 'MATLAB, Python, C, C++, Java-Automatisierung, Shell-Skripte, Git, strukturierte CSV-Ausgabe und Plotting-Workflows.',
        'skills.hpc.title': 'HPC',
        'skills.hpc.text': 'MPI, OpenMP, CUDA-Grundlagen, serielle Baselines, Scaling-Tests, Laufzeitvergleiche und Dokumentation von Cluster-Runs.',
        'skills.software.title': 'CFD-Software',
        'skills.software.text': 'STAR-CCM+, ANSYS Fluent, SimScale, OpenFOAM-Lernpfad, FDS/Smokeview, Postprocessing und Reporting.',
        'skills.communication.title': 'Kommunikation',
        'skills.communication.text': 'Technische Dokumentation, Literaturrecherche, Präsentationsvorbereitung, Englisch, Arabisch und Deutsch auf B2-Niveau.',
        'education.label': 'Ausbildung und Zertifikate',
        'education.title': 'Simulationshintergrund mit mechanischen Engineering-Wurzeln',
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
        'contact.text': 'Ich interessiere mich für CFD, numerische Simulation, Scientific Computing und Engineering-R&D-Rollen, bei denen klare Modellierung und reproduzierbare Arbeit wichtig sind.',
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
