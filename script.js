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
        'hero.eyebrow': 'CFD · thermal-fluid simulation · scientific computing',
        'hero.title': 'CFD and simulation work built for validation, clarity, and reproducibility.',
        'hero.text': 'I am Ahmed Kandil, an engineering graduate student in Germany focused on CFD, heat transfer, numerical simulation, and scientific computing. My work combines physics-based modelling, structured implementation, validation against reference data, and clear technical documentation.',
        'hero.cta.projects': 'View selected projects',
        'panel.focus.title': 'Current work',
        'panel.focus.text': 'Fraunhofer FFB, battery-cell production research, and low-humidity mini-environments.',
        'panel.strength.title': 'Core strength',
        'panel.strength.text': 'Connecting CFD physics, validation, clean implementation, and engineering communication.',
        'panel.code.title': 'Technical stack',
        'panel.code.text': 'MATLAB, Python, C/C++, MPI, OpenMP, shell scripting, and post-processing workflows.',
        'panel.education.title': 'Education',
        'panel.education.text': 'M.Sc. Computer Simulation in Science, Bergische Universität Wuppertal.',
        'stats.cfd.title': 'CFD + R&D',
        'stats.cfd.text': 'Simulation experience in academic and industrial environments',
        'stats.projects.title': '6 public project repos',
        'stats.projects.text': 'CFD solvers, LBM, MPI optimisation, and evacuation simulation',
        'stats.validation.title': 'Validation-focused',
        'stats.validation.text': 'Reference data, mesh studies, residuals, and documented limitations',
        'stats.hpc.title': 'HPC workflow',
        'stats.hpc.text': 'Serial baselines followed by OpenMP, MPI, and CUDA-style acceleration',
        'about.label': 'Engineering approach',
        'about.title': 'From physical assumptions to documented results.',
        'about.text': 'A strong simulation project should make the full workflow clear: assumptions, setup, numerical method, validation, limitations, and next steps. This portfolio is structured around that idea.',
        'about.physics.title': 'Physics-led setup',
        'about.physics.text': 'Each project starts from the physical problem before moving into software, code, or visualisation.',
        'about.workflow.title': 'Reproducible workflow',
        'about.workflow.text': 'Projects are organised with run instructions, structured outputs, plots, and notes so the work can be checked and extended.',
        'about.validation.title': 'Transparent validation',
        'about.validation.text': 'The portfolio includes reference comparisons, mesh effects, runtime behaviour, and limitations rather than only final plots.',
        'current.label': 'Current direction',
        'current.title': 'Air-curtain sealing for low-humidity mini-environments.',
        'current.text': 'At Fraunhofer FFB, my current thesis direction focuses on reducing moisture ingress into low-humidity mini-environments. The work connects literature review, process understanding, experimental planning, and CFD analysis around humidity, turbulence, temperature, and dew-point behaviour.',
        'current.note': 'The technical details are intentionally kept high-level because the work is connected to an active research environment.',
        'projects.label': 'Selected projects',
        'projects.title': 'Updated GitHub projects: CFD, HPC, LBM, and evacuation simulation.',
        'projects.intro': 'The cards below were updated from the current public GitHub repositories, including the latest README results, run modes, validation notes, and project scope.',
        'project.comparison.type': 'Main CFD benchmark suite',
        'project.comparison.title': 'Lid-Driven Cavity Solver Comparison',
        'project.comparison.text': 'A multi-platform CFD benchmark for the 2D incompressible lid-driven cavity problem. The same solver idea is implemented in MATLAB, Python, C, C++, OpenMP, MPI, and CUDA-style workflows with shared result folders and comparison scripts.',
        'project.comparison.result': 'the project compares implementation style, runtime, convergence behaviour, validation error, output structure, and post-processing across languages.',
        'project.cpp.type': 'C++17 serial CFD baseline',
        'project.cpp.title': 'C++ Lid-Driven Cavity Solver',
        'project.cpp.text': 'A C++17 single-core baseline for the larger cavity benchmark series, including upwind and central schemes, RBGS/RBSOR pressure solvers, CSV output, and Python post-processing.',
        'project.cpp.result': '22/36 cases met the selected Ghia limits, all N = 128 cases passed, and RBSOR reduced pressure-solver cost in the uploaded study.',
        'project.matlab.type': 'MATLAB reference implementation',
        'project.matlab.title': 'MATLAB Lid-Driven Cavity Solver',
        'project.matlab.text': 'The MATLAB reference version for developing the numerical method and comparing loop-based and vectorized momentum predictors before moving to lower-level implementations.',
        'project.matlab.result': '44/72 cases met the selected Ghia limits, all N = 128 cases passed, and pressure solving remained the main runtime cost.',
        'project.lbm.type': 'LBM D2Q9 validation project',
        'project.lbm.title': 'D2Q9 LBM Channel Flow in C++',
        'project.lbm.text': 'A compact C++ lattice Boltzmann solver for 2D Poiseuille channel flow using D2Q9, BGK collision, bounce-back walls, periodic streamwise boundaries, and CSV output.',
        'project.lbm.result': 'the numerical velocity profile is compared directly with the analytical parabolic Poiseuille solution and includes convergence-history output.',
        'project.tsp.type': 'MPI high-performance computing',
        'project.tsp.title': 'Distributed TSP Solver',
        'project.tsp.text': 'A C99/MPI distributed-memory Traveling Salesman solver using parallel tempering, Metropolis acceptance, two-opt route updates, precomputed distances, and neighbour replica exchange.',
        'project.tsp.result': 'the Berlin52 study reported 20.7× speedup on 24 cores, approximately 86% parallel efficiency, with scaling and runtime-breakdown plots.',
        'project.jps.type': 'Pedestrian dynamics simulation',
        'project.jps.title': 'JuPedSim Evacuation Analysis',
        'project.jps.text': 'A JuPedSim-based evacuation workflow for a university building layout with WKT geometry, nine exits, configurable spawn areas, scenario-specific exit assignment, and SQLite trajectory output.',
        'project.jps.result': 'the project compares scenario runtime and evacuation time while clearly documenting that it is an educational study, not a certified safety model.',
        'project.why.label': 'Why it matters:',
        'project.result.label': 'Current result:',
        'project.link.case': 'Read case study →',
        'project.link.repo': 'Repository ↗',
        'experience.label': 'Experience',
        'experience.title': 'Engineering and research experience',
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
        'skills.title': 'Tools and methods',
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
        'contact.text': 'I am interested in CFD, numerical simulation, scientific computing, and engineering R&D roles where clear modelling, validation, and reproducible workflows matter.',
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
        'hero.eyebrow': 'CFD · thermofluiddynamische Simulation · Scientific Computing',
        'hero.title': 'CFD- und Simulationsarbeit mit Fokus auf Validierung, Klarheit und Reproduzierbarkeit.',
        'hero.text': 'Ich bin Ahmed Kandil, Masterstudent im technischen Bereich in Deutschland mit Fokus auf CFD, Wärmeübertragung, numerische Simulation und Scientific Computing. Meine Arbeit verbindet physikbasierte Modellierung, strukturierte Implementierung, Validierung mit Referenzdaten und klare technische Dokumentation.',
        'hero.cta.projects': 'Ausgewählte Projekte ansehen',
        'panel.focus.title': 'Aktuelle Arbeit',
        'panel.focus.text': 'Fraunhofer FFB, Batteriezellfertigungsforschung und Mini-Environments mit niedriger Luftfeuchtigkeit.',
        'panel.strength.title': 'Kernstärke',
        'panel.strength.text': 'Verbindung von CFD-Physik, Validierung, sauberer Implementierung und technischer Kommunikation.',
        'panel.code.title': 'Technischer Stack',
        'panel.code.text': 'MATLAB, Python, C/C++, MPI, OpenMP, Shell-Skripte und Postprocessing-Workflows.',
        'panel.education.title': 'Ausbildung',
        'panel.education.text': 'M.Sc. Computer Simulation in Science, Bergische Universität Wuppertal.',
        'stats.cfd.title': 'CFD + F&E',
        'stats.cfd.text': 'Simulationserfahrung aus akademischen und industriellen Umgebungen',
        'stats.projects.title': '6 öffentliche Projekt-Repos',
        'stats.projects.text': 'CFD-Solver, LBM, MPI-Optimierung und Evakuierungssimulation',
        'stats.validation.title': 'Validierungsfokus',
        'stats.validation.text': 'Referenzdaten, Netzstudien, Residuen und dokumentierte Grenzen',
        'stats.hpc.title': 'HPC-Workflow',
        'stats.hpc.text': 'Serielle Baselines, anschließend OpenMP, MPI und CUDA-artige Beschleunigung',
        'about.label': 'Engineering-Ansatz',
        'about.title': 'Von physikalischen Annahmen zu dokumentierten Ergebnissen.',
        'about.text': 'Ein starkes Simulationsprojekt sollte den gesamten Workflow klar zeigen: Annahmen, Aufbau, numerische Methode, Validierung, Grenzen und nächste Schritte. Dieses Portfolio ist entsprechend strukturiert.',
        'about.physics.title': 'Physikgeleiteter Aufbau',
        'about.physics.text': 'Jedes Projekt startet beim physikalischen Problem, bevor Software, Code oder Visualisierung im Mittelpunkt stehen.',
        'about.workflow.title': 'Reproduzierbarer Workflow',
        'about.workflow.text': 'Die Projekte sind mit Run-Anleitungen, strukturierten Ausgaben, Plots und Notizen organisiert, damit die Arbeit überprüft und erweitert werden kann.',
        'about.validation.title': 'Transparente Validierung',
        'about.validation.text': 'Das Portfolio enthält Referenzvergleiche, Netzeffekte, Laufzeitverhalten und Grenzen, nicht nur finale Plots.',
        'current.label': 'Aktuelle Richtung',
        'current.title': 'Air-Curtain-Abdichtung für Mini-Environments mit niedriger Luftfeuchtigkeit.',
        'current.text': 'Bei Fraunhofer FFB fokussiert meine aktuelle Thesis-Richtung auf die Reduzierung von Feuchteeintrag in Mini-Environments mit niedriger Luftfeuchtigkeit. Die Arbeit verbindet Literaturrecherche, Prozessverständnis, Versuchsplanung und CFD-Analyse rund um Feuchte, Turbulenz, Temperatur und Taupunktverhalten.',
        'current.note': 'Die technischen Details sind hier bewusst allgemein gehalten, da die Arbeit mit einer aktiven Forschungsumgebung verbunden ist.',
        'projects.label': 'Ausgewählte Projekte',
        'projects.title': 'Aktualisierte GitHub-Projekte: CFD, HPC, LBM und Evakuierungssimulation.',
        'projects.intro': 'Die Karten unten wurden anhand der aktuellen öffentlichen GitHub-Repositories aktualisiert, einschließlich README-Ergebnissen, Run-Modi, Validierungsnotizen und Projektrahmen.',
        'project.comparison.type': 'Zentrale CFD-Benchmark-Suite',
        'project.comparison.title': 'Lid-Driven-Cavity Solver-Vergleich',
        'project.comparison.text': 'Ein Multi-Plattform-CFD-Benchmark für das zweidimensionale inkompressible Lid-Driven-Cavity-Problem. Die gleiche Solver-Idee wird in MATLAB, Python, C, C++, OpenMP, MPI und CUDA-artigen Workflows mit gemeinsamen Ergebnisordnern und Vergleichsskripten umgesetzt.',
        'project.comparison.result': 'das Projekt vergleicht Implementierungsstil, Laufzeit, Konvergenzverhalten, Validierungsfehler, Output-Struktur und Postprocessing über mehrere Sprachen hinweg.',
        'project.cpp.type': 'C++17 serielle CFD-Baseline',
        'project.cpp.title': 'C++ Lid-Driven-Cavity Solver',
        'project.cpp.text': 'Eine C++17-Single-Core-Baseline für die größere Cavity-Benchmark-Serie, mit Upwind- und Zentraldifferenz-Schemata, RBGS/RBSOR-Drucklösern, CSV-Ausgabe und Python-Postprocessing.',
        'project.cpp.result': '22/36 Fälle erfüllten die ausgewählten Ghia-Grenzen, alle N = 128 Fälle bestanden, und RBSOR reduzierte die Drucklöser-Kosten in der hochgeladenen Studie.',
        'project.matlab.type': 'MATLAB-Referenzimplementierung',
        'project.matlab.title': 'MATLAB Lid-Driven-Cavity Solver',
        'project.matlab.text': 'Die MATLAB-Referenzversion zur Entwicklung der numerischen Methode und zum Vergleich von schleifenbasierten und vektorisierten Momentum-Prädiktoren vor dem Wechsel zu Low-Level-Implementierungen.',
        'project.matlab.result': '44/72 Fälle erfüllten die ausgewählten Ghia-Grenzen, alle N = 128 Fälle bestanden, und der Drucklöser blieb der wichtigste Laufzeitkostenfaktor.',
        'project.lbm.type': 'LBM-D2Q9-Validierungsprojekt',
        'project.lbm.title': 'D2Q9 LBM Channel Flow in C++',
        'project.lbm.text': 'Ein kompakter C++-Lattice-Boltzmann-Solver für 2D-Poiseuille-Kanalströmung mit D2Q9, BGK-Kollision, Bounce-Back-Wänden, periodischen Randbedingungen in Strömungsrichtung und CSV-Ausgabe.',
        'project.lbm.result': 'das numerische Geschwindigkeitsprofil wird direkt mit der analytischen parabolischen Poiseuille-Lösung verglichen und enthält eine Konvergenzhistorie.',
        'project.tsp.type': 'MPI High-Performance Computing',
        'project.tsp.title': 'Distributed TSP Solver',
        'project.tsp.text': 'Ein C99/MPI-Distributed-Memory-Solver für das Traveling-Salesman-Problem mit Parallel Tempering, Metropolis-Akzeptanz, Two-Opt-Routenupdates, vorberechneten Distanzen und Nachbar-Replica-Exchange.',
        'project.tsp.result': 'die Berlin52-Studie berichtete 20,7× Speedup auf 24 Kernen, ungefähr 86% parallele Effizienz, mit Scaling- und Laufzeit-Breakdown-Plots.',
        'project.jps.type': 'Fußgängerdynamik-Simulation',
        'project.jps.title': 'JuPedSim Evacuation Analysis',
        'project.jps.text': 'Ein JuPedSim-basierter Evakuierungsworkflow für ein Universitätsgebäude mit WKT-Geometrie, neun Ausgängen, konfigurierbaren Spawn-Bereichen, szenariospezifischer Ausgangszuweisung und SQLite-Trajektorienausgabe.',
        'project.jps.result': 'das Projekt vergleicht Szenario-Laufzeit und Evakuierungszeit und dokumentiert klar, dass es sich um eine Bildungsstudie handelt, nicht um ein zertifiziertes Sicherheitsmodell.',
        'project.why.label': 'Warum es wichtig ist:',
        'project.result.label': 'Aktuelles Ergebnis:',
        'project.link.case': 'Case Study lesen →',
        'project.link.repo': 'Repository ↗',
        'experience.label': 'Erfahrung',
        'experience.title': 'Engineering- und Forschungserfahrung',
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
        'skills.title': 'Tools und Methoden',
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
        'contact.text': 'Ich interessiere mich für CFD, numerische Simulation, Scientific Computing und Engineering-R&D-Rollen, bei denen klare Modellierung, Validierung und reproduzierbare Workflows wichtig sind.',
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
