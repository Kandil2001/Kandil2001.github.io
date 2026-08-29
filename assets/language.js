(() => {
  "use strict";

  const STORAGE_KEY = "portfolio-language";
  const SUPPORTED_LANGUAGES = ["en", "de", "fr"];
  const NEXT_LANGUAGE = { en: "de", de: "fr", fr: "en" };

  const translations = {
    en: {},
    de: {
      pageTitle: "Ahmed Kandil | Computational Engineer · CFD · HPC",
      pageDescription: "Portfolio von Ahmed Kandil: CFD, numerische Methoden, wissenschaftliche Software, HPC, Simulationsvalidierung und Forschungserfahrung.",
      skip: "Zum Inhalt springen", "nav.projects": "Projekte", "nav.experience": "Erfahrung", "nav.education": "Ausbildung", "nav.skills": "Kompetenzen", "nav.cv": "Lebenslauf", "nav.contact": "Kontakt",
      "hero.eyebrow": "Doktorand-Bewerber · Computational Engineering · CFD · HPC",
      "hero.headline": "Ich entwickle und validiere rechnergestützte Workflows, die physikalische Modellierung, numerische Methoden, wissenschaftliche Software und Hochleistungsrechnen verbinden.",
      "hero.text": "Ich studiere Computer Simulation in Science im Master an der Bergischen Universität Wuppertal und plane meinen Abschluss im Januar 2027. Meine aktuelle Arbeit bei Fraunhofer FFB und an der Universität Wuppertal umfasst Feuchtetransport, CFD-Methodik, computer-vision-gestützte Validierung und reproduzierbares Postprocessing.",
      "actions.projects": "Projekte ansehen", "actions.downloadCv": "Lebenslauf herunterladen", "actions.viewCv": "Lebenslauf ansehen",
      "summary.title": "Auf einen Blick", "summary.researchLabel": "Aktuelle Forschung", "summary.focusLabel": "Schwerpunkt", "summary.focus": "CFD · numerische Methoden · Validierung · HPC", "summary.programmingLabel": "Programmierung", "summary.parallelLabel": "Paralleles Rechnen", "summary.languagesLabel": "Sprachen", "summary.languages": "Englisch C1 · Deutsch B2 · Arabisch Muttersprache",
      "proof.physicsTitle": "Physik und Numerik", "proof.physicsText": "Grundgleichungen, Diskretisierung, Randbedingungen und Solverlogik.", "proof.softwareTitle": "Wissenschaftliche Software", "proof.softwareText": "Reproduzierbarer Code, strukturierte Ausgaben, Automatisierung und versionierte Workflows.", "proof.validationTitle": "Validierungsorientierung", "proof.validationText": "Analytische Prüfungen, Benchmarkdaten, Experimente, Datenqualitätsprüfungen und Grenzen.", "proof.hpcTitle": "HPC-Workflows", "proof.hpcText": "Serielle Baselines, MPI, OpenMP, CUDA-Prototypen, SLURM-Studien und Leistungsvergleiche.",
      "projects.eyebrow": "Ausgewählte Arbeiten im Scientific Computing", "projects.title": "Projekte", "projects.intro": "Die Projekte zeigen numerische Methode, Implementierungsentscheidungen, Validierungslogik, erzeugte Ergebnisse und aktuelle Grenzen.",
      "projects.feature.label": "In Arbeit · Hauptprojekt des Portfolios · CFD/HPC-Benchmark", "projects.feature.text": "Ein sprachübergreifender Benchmark für die zweidimensionale inkompressible Deckelströmung mit C++, C, MATLAB/Octave, Python, serieller Ausführung, OpenMP, MPI und einem CUDA-Prototyp.", "projects.feature.workflowLabel": "Forschungsworkflow:", "projects.feature.workflow": "SIMPLE-artige Druckkorrektur, strukturierte Parameterstudien zu Netzgröße und Reynolds-Zahl, SLURM-Ausführung, Vergleich von Laufzeit und Konvergenz sowie Mittellinienvergleich mit dem Benchmark von Ghia et al.", "projects.caseStudy": "Fallstudie lesen", "projects.repository": "GitHub-Repository",
      "projects.rust.label": "Abgeschlossen · v1.0.0 · Rust · FVM", "projects.rust.text": "Abhängigkeitsfreier zweidimensionaler Solver für stationäre Wärmeleitung mit zellzentrierter Finite-Volumen-Methode und Gauss-Seidel-Iteration.", "projects.rust.proof": "80 × 80 Kontrollvolumen · Konvergenzüberwachung · CSV/SVG-Ausgabe · CI",
      "projects.lbm.label": "Abgeschlossen · C++ · LBM", "projects.lbm.text": "D2Q9-BGK-Solver für Kanalströmung mit Volumenkraft, Bounce-Back-Wänden und periodischer Behandlung in Strömungsrichtung.", "projects.lbm.proof": "Verifikation des Geschwindigkeitsprofils mit analytischer Lösung · GitHub Actions",
      "projects.tsp.label": "Abgeschlossen · korrigierter wiederholter Benchmark · C · MPI", "projects.tsp.text": "Parallel Tempering mit verteiltem Speicher, TSPLIB-kompatiblen EUC_2D-Tourgewichten und wiederholter Strong-Scaling-Messung mit festen Seeds.", "projects.tsp.proof": "30 Läufe · Berlin52-Optimum 7542 in jedem Lauf · Median 10,83× bei 24 MPI-Prozessen",
      "projects.jps.label": "Abgeschlossen · Python · Fußgängerdynamik", "projects.jps.text": "Workflow für Fußgängerströme und Evakuierung mit Gebäudegeometrie, Ausgangszuweisung, Trajektorien und Szenarienvergleich.", "projects.jps.proof": "WKT-Geometrie · SQLite-Trajektorien · Postprocessing",
      "projects.cpp.label": "Solver-Entwicklungsstudie · C++17 · CFD", "projects.cpp.text": "Finite-Differenzen-Solver mit Druckkorrektur, strukturierten Netzen, Konvergenzdiagnostik und Mittellinienvergleich mit Benchmarkdaten.",
      "projects.matlab.label": "Abgeschlossen · MATLAB · CFD", "projects.matlab.text": "MATLAB-Referenzimplementierung mit schleifenbasierten und vektorisierten Prädiktoren, automatisierten Parameterstudien und dokumentierten Konvergenzgrenzen.", "projects.matlab.proof": "72 konfigurierte Fälle · 44 innerhalb der gewählten Ghia-Grenzen",
      "experience.eyebrow": "Forschungs- und Berufserfahrung", "experience.title": "Engineering, Forschung und Validierung", "dates.present2026": "06/2026 - heute", "dates.presentJan2026": "01/2026 - heute", "experience.ffb.title": "Wissenschaftliche Hilfskraft – Simulation", "experience.ffb.text": "Entwicklung der CFD-Methodik für Air-Curtain-Abdichtung von Mini-Environments mit niedriger Luftfeuchtigkeit, einschließlich Strömung, Wärme- und Wasserdampftransport, Baseline-Definition, Randbedingungen, Sensitivitätsfällen und messdatenbasierter Validierung.", "experience.uni.title": "Wissenschaftliche Hilfskraft – Simulationsvalidierung", "experience.uni.org": "Bergische Universität Wuppertal", "experience.uni.text": "Validierung von Fußgängerdynamiksimulationen mit experimentellen Videodaten, Aufbau reproduzierbarer Python/OpenCV-Pipelines für Zählung und Datenqualitätsprüfung sowie Ableitung quantitativer Durchflusskennwerte für 30 s und 60 s.", "experience.vorwerk.title": "Werkstudent – CFD Engineer", "experience.vorwerk.text": "Entwicklung stationärer und transienter STAR-CCM+-Modelle für turbulente Innenströmungen, Wärme- und Stofftransport, Partikeltransport und Phasenwechsel; Automatisierung von Berichten und Diagrammen mit Java-Makros.", "experience.grind.title": "CFD Engineer", "experience.grind.text": "Durchführung dreidimensionaler ANSYS-Fluent-Studien für industrielle Luftströmung, HLK und Thermomanagement, einschließlich Geometrie, Vernetzung, Physiksetup, Verfeinerungsstudien und Kundenberichten.",
      "education.eyebrow": "Ausbildung und Qualifikationen", "education.title": "Akademischer Hintergrund", "education.msc.date": "2023 - heute · Abschluss erwartet 01/2027", "education.msc.text": "72 ECTS abgeschlossen; Masterarbeit in Bearbeitung: Numerische Optimierung der Air-Curtain-Abdichtung für feuchtekontrollierte Mini-Environments in der Batteriezellproduktion.", "education.msc.courses": "Relevante Studienbereiche: Hochleistungsrechnen, parallele Algorithmen, numerische Methoden, Computational Fluid Mechanics, OpenFOAM-Modellierung, Datenanalyse, mathematisches maschinelles Lernen und Bayesian Learning.", "education.bsc.title": "Bachelorabschluss in Mechatronik", "education.bsc.org": "Mansoura University · Ägypten", "education.bsc.grade": "CGPA 3,21/4,00; Gesamtnote B, Very Good (85,11 %); Bachelorarbeit A+.", "education.bsc.thesis": "Bachelorarbeit: Entwicklung eines effizienten mikroberippten Kühlsystems für das Thermomanagement von Mikroprozessoren.", "education.cswe.text": "Fortgeschrittene SOLIDWORKS-Zertifizierung als Ergänzung zu meinem Hintergrund in Konstruktion, CAD, Simulationsvorbereitung, Fertigungsgerechtigkeit und technischer Kommunikation.", "education.cswe.link": "Verifizierte Qualifikation ansehen",
      "skills.eyebrow": "Technische Kompetenzen", "skills.title": "Werkzeuge und Methoden", "skills.programming.title": "Programmierung", "skills.parallel.title": "Paralleles Rechnen und GPU", "skills.parallel.text": "MPI, OpenMP, CUDA, SLURM, Linux und HPC-Workflows", "skills.software.title": "Simulationssoftware", "skills.workflow.title": "Workflow für wissenschaftliche Software", "skills.workflow.text": "Git/GitHub, Cargo, Make, Linux-Kommandozeile, Skripting, reproduzierbare Ausgaben und GitHub Actions", "skills.data.title": "Datenanalyse und Computer Vision", "skills.data.text": "NumPy, pandas, OpenCV, automatisiertes Postprocessing, Datenqualitätsprüfungen und quantitative Vergleiche", "skills.numerics.title": "Numerische Methoden", "skills.numerics.text": "Finite-Volumen-Methoden, finite Differenzen, Druckkorrektur, Lattice-Boltzmann-Methoden, Konvergenzanalyse, Netzverfeinerung und Validierung", "skills.heat": "Wärmeübertragung", "skills.mass": "Stofftransport", "skills.humidity": "Feuchtetransport", "skills.validation": "Validierung",
      "contact.eyebrow": "Kontakt", "contact.title": "Forschungs- und Engineering-Möglichkeiten", "contact.text": "Offen für Promotions- und F&E-Möglichkeiten in CFD, numerischen Methoden, Scientific Computing, Simulationsvalidierung und HPC.", "contact.email": "E-Mail", footer: "© 2026 Ahmed Kandil · Erstellt mit GitHub Pages",
      "cv.eyebrow": "Aktueller Lebenslauf", "cv.intro": "Masterstudent und Promotionsbewerber mit Schwerpunkt auf numerischen Methoden, CFD-Solverentwicklung, Simulationsvalidierung und Hochleistungsrechnen. Der aktuelle zweiseitige Lebenslauf enthält Forschungs- und Berufserfahrung, Ausbildung, technische Kompetenzen, ausgewählte Scientific-Computing-Projekte und Referenzen.", "cv.download": "Ahmed_Kandil_CV.pdf herunterladen", "cv.open": "PDF in neuem Tab öffnen", "cv.back": "Zurück zum Portfolio", "cv.details": "Lebenslaufdetails", "cv.focusLabel": "Fachlicher Schwerpunkt", "cv.focus": "Computational Engineering · CFD · HPC", "cv.positionsLabel": "Aktuelle Positionen", "cv.graduationLabel": "Abschluss", "cv.graduation": "M.Sc. erwartet im Januar 2027", "cv.locationLabel": "Standort", "cv.previewEyebrow": "PDF-Vorschau", "cv.full": "Vollständiger Lebenslauf", "cv.previewText": "Die Download-Schaltfläche speichert genau die hier angezeigte PDF als Ahmed_Kandil_CV.pdf.", "cv.footer": "© 2026 Ahmed Kandil · Lebenslauf"
    },
    fr: {
      pageTitle: "Ahmed Kandil | Ingénierie numérique · CFD · HPC",
      pageDescription: "Portfolio d’Ahmed Kandil : CFD, méthodes numériques, logiciels scientifiques, calcul haute performance, validation de simulations et expérience en recherche.",
      skip: "Aller au contenu", "nav.projects": "Projets", "nav.experience": "Expérience", "nav.education": "Formation", "nav.skills": "Compétences", "nav.cv": "CV", "nav.contact": "Contact",
      "hero.eyebrow": "Candidat au doctorat · Ingénierie numérique · CFD · HPC",
      "hero.headline": "Je développe et valide des workflows de calcul qui relient la modélisation physique, les méthodes numériques, les logiciels scientifiques et le calcul haute performance.",
      "hero.text": "Étudiant en M.Sc. Computer Simulation in Science à l’Université de Wuppertal, avec un diplôme prévu en janvier 2027. Mes travaux actuels chez Fraunhofer FFB et à l’Université de Wuppertal portent sur le transport de l’humidité, la méthodologie CFD, la validation assistée par vision par ordinateur et le post-traitement reproductible.",
      "actions.projects": "Voir les projets", "actions.downloadCv": "Télécharger le CV", "actions.viewCv": "Voir le CV",
      "summary.title": "En bref", "summary.researchLabel": "Recherche actuelle", "summary.focusLabel": "Domaines", "summary.focus": "CFD · méthodes numériques · validation · HPC", "summary.programmingLabel": "Programmation", "summary.parallelLabel": "Calcul parallèle", "summary.languagesLabel": "Langues", "summary.languages": "Anglais C1 · Allemand B2 · Arabe langue maternelle",
      "proof.physicsTitle": "Physique et méthodes numériques", "proof.physicsText": "Équations gouvernantes, discrétisation, conditions aux limites et logique des solveurs.", "proof.softwareTitle": "Logiciels scientifiques", "proof.softwareText": "Code reproductible, sorties structurées, automatisation et workflows versionnés.", "proof.validationTitle": "Approche de validation", "proof.validationText": "Vérifications analytiques, données de référence, expériences, contrôles de qualité des données et limites.", "proof.hpcTitle": "Workflows HPC", "proof.hpcText": "Références sérielles, MPI, OpenMP, prototypes CUDA, études SLURM et comparaison des performances.",
      "projects.eyebrow": "Sélection de travaux en calcul scientifique", "projects.title": "Projets", "projects.intro": "Les projets présentent la méthode numérique, les choix d’implémentation, la logique de validation, les résultats générés et les limites actuelles.",
      "projects.feature.label": "En cours · Projet principal du portfolio · Benchmark CFD/HPC", "projects.feature.text": "Un benchmark multi-langages de la cavité entraînée bidimensionnelle incompressible utilisant C++, C, MATLAB/Octave, Python, l’exécution sérielle, OpenMP, MPI et un prototype CUDA.", "projects.feature.workflowLabel": "Workflow de recherche :", "projects.feature.workflow": "Correction de pression de type SIMPLE, études paramétriques structurées sur la taille du maillage et le nombre de Reynolds, exécution SLURM, comparaison des temps de calcul et de la convergence, et comparaison des profils centraux avec le benchmark de Ghia et al.", "projects.caseStudy": "Lire l’étude de cas", "projects.repository": "Dépôt GitHub",
      "projects.rust.label": "Terminé · v1.0.0 · Rust · FVM", "projects.rust.text": "Solveur bidimensionnel sans dépendances pour la conduction thermique stationnaire, basé sur une formulation volumes finis centrée sur les cellules et une itération de Gauss-Seidel.", "projects.rust.proof": "80 × 80 volumes de contrôle · suivi de convergence · sorties CSV/SVG · CI",
      "projects.lbm.label": "Terminé · C++ · LBM", "projects.lbm.text": "Solveur D2Q9 BGK pour écoulement en canal, avec force volumique, parois bounce-back et traitement périodique dans la direction de l’écoulement.", "projects.lbm.proof": "Vérification analytique du profil de vitesse · GitHub Actions",
      "projects.tsp.label": "Terminé · benchmark répété corrigé · C · MPI", "projects.tsp.text": "Parallel tempering à mémoire distribuée avec poids EUC_2D compatibles TSPLIB et mesures répétées de strong scaling avec graines fixes.", "projects.tsp.proof": "30 exécutions · optimum Berlin52 de 7542 à chaque exécution · médiane 10,83× avec 24 processus MPI",
      "projects.jps.label": "Terminé · Python · Dynamique piétonne", "projects.jps.text": "Workflow d’écoulement piéton et d’évacuation avec géométrie du bâtiment, affectation des sorties, trajectoires et comparaison de scénarios.", "projects.jps.proof": "Géométrie WKT · trajectoires SQLite · post-traitement",
      "projects.cpp.label": "Étude de développement de solveur · C++17 · CFD", "projects.cpp.text": "Solveur par différences finies avec correction de pression, maillages structurés, diagnostics de convergence et comparaison des profils centraux avec des données de référence.",
      "projects.matlab.label": "Terminé · MATLAB · CFD", "projects.matlab.text": "Implémentation MATLAB de référence avec prédicteurs en boucles et vectorisés, études paramétriques automatisées et limites de convergence documentées.", "projects.matlab.proof": "72 cas configurés · 44 dans les limites Ghia sélectionnées",
      "experience.eyebrow": "Expérience en recherche et professionnelle", "experience.title": "Ingénierie, recherche et validation", "dates.present2026": "06/2026 - aujourd’hui", "dates.presentJan2026": "01/2026 - aujourd’hui", "experience.ffb.title": "Assistant de recherche – Simulation", "experience.ffb.text": "Développement d’une méthodologie CFD pour l’étanchéité par rideau d’air de mini-environnements à faible humidité, incluant l’écoulement, les transferts de chaleur et de vapeur d’eau, la définition du cas de référence, les conditions aux limites, les études de sensibilité et un workflow de validation basé sur des mesures.", "experience.uni.title": "Assistant de recherche – Validation de simulations", "experience.uni.org": "Université de Wuppertal", "experience.uni.text": "Validation de simulations de dynamique piétonne à partir de données vidéo expérimentales, développement de pipelines Python/OpenCV pour le comptage et le contrôle de qualité des données, et calcul de métriques quantitatives de débit sur 30 s et 60 s.", "experience.vorwerk.title": "Étudiant salarié – CFD", "experience.vorwerk.text": "Développement de modèles STAR-CCM+ stationnaires et transitoires pour les écoulements internes turbulents, les transferts de chaleur et de masse, le transport de particules et les changements de phase ; automatisation des rapports et graphiques avec des macros Java.", "experience.grind.title": "Ingénieur CFD", "experience.grind.text": "Réalisation d’études ANSYS Fluent tridimensionnelles pour des projets industriels d’écoulement d’air, de CVC et de gestion thermique, incluant géométrie, maillage, configuration physique, études de raffinement et rapports destinés aux clients.",
      "education.eyebrow": "Formation et certifications", "education.title": "Parcours académique", "education.msc.date": "2023 - aujourd’hui · diplôme prévu 01/2027", "education.msc.text": "72 ECTS validés ; mémoire de master en cours : Numerical Optimization of Air-Curtain Sealing for Humidity-Controlled Mini-Environments in Battery Cell Production.", "education.msc.courses": "Domaines d’étude pertinents : calcul haute performance, algorithmes parallèles, méthodes numériques, mécanique des fluides numérique, modélisation OpenFOAM, analyse de données, apprentissage automatique mathématique et apprentissage bayésien.", "education.bsc.title": "Licence en ingénierie mécatronique", "education.bsc.org": "Université de Mansoura · Égypte", "education.bsc.grade": "CGPA 3,21/4,00 ; note globale B, Very Good (85,11 %) ; mémoire de licence A+.", "education.bsc.thesis": "Mémoire : conception d’un système de refroidissement efficace à micro-ailettes pour la gestion thermique des microprocesseurs.", "education.cswe.text": "Certification avancée SOLIDWORKS complétant une expérience plus large en conception, CAO, préparation de simulations, aptitude à la fabrication et communication technique.", "education.cswe.link": "Voir la certification vérifiée",
      "skills.eyebrow": "Expertise technique", "skills.title": "Outils et méthodes", "skills.programming.title": "Programmation", "skills.parallel.title": "Calcul parallèle et GPU", "skills.parallel.text": "MPI, OpenMP, CUDA, SLURM, Linux et workflows HPC", "skills.software.title": "Logiciels de simulation", "skills.workflow.title": "Workflow de logiciel scientifique", "skills.workflow.text": "Git/GitHub, Cargo, Make, ligne de commande Linux, scripts, sorties reproductibles et GitHub Actions", "skills.data.title": "Données et vision par ordinateur", "skills.data.text": "NumPy, pandas, OpenCV, post-traitement automatisé, contrôles de qualité des données et comparaison quantitative", "skills.numerics.title": "Méthodes numériques", "skills.numerics.text": "Méthodes des volumes finis, différences finies, correction de pression, méthodes de Boltzmann sur réseau, analyse de convergence, raffinement de maillage et validation", "skills.heat": "Transfert thermique", "skills.mass": "Transfert de masse", "skills.humidity": "Transport de l’humidité", "skills.validation": "Validation",
      "contact.eyebrow": "Contact", "contact.title": "Opportunités de recherche et de R&D", "contact.text": "Ouvert aux opportunités de doctorat et de R&D impliquant la CFD, les méthodes numériques, le calcul scientifique, la validation de simulations et le HPC.", "contact.email": "E-mail", footer: "© 2026 Ahmed Kandil · Réalisé avec GitHub Pages",
      "cv.eyebrow": "Curriculum vitae actuel", "cv.intro": "Étudiant en master et candidat au doctorat travaillant sur les méthodes numériques, le développement de solveurs CFD, la validation de simulations et le calcul haute performance. Le CV actuel de deux pages présente l’expérience en recherche et professionnelle, la formation, l’expertise technique, une sélection de projets de calcul scientifique et les références.", "cv.download": "Télécharger Ahmed_Kandil_CV.pdf", "cv.open": "Ouvrir le PDF dans un nouvel onglet", "cv.back": "Retour au portfolio", "cv.details": "Détails du CV", "cv.focusLabel": "Domaine professionnel", "cv.focus": "Ingénierie numérique · CFD · HPC", "cv.positionsLabel": "Postes actuels", "cv.graduationLabel": "Diplôme", "cv.graduation": "M.Sc. prévu en janvier 2027", "cv.locationLabel": "Lieu", "cv.previewEyebrow": "Aperçu PDF", "cv.full": "CV complet", "cv.previewText": "Le bouton de téléchargement enregistre exactement le PDF affiché ici sous le nom Ahmed_Kandil_CV.pdf.", "cv.footer": "© 2026 Ahmed Kandil · Curriculum Vitae"
    }
  };

  const description = document.querySelector('meta[name="description"]');
  translations.en.pageTitle = document.title;
  translations.en.pageDescription = description ? description.content : "";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations.en[key] === undefined) translations.en[key] = element.textContent;
  });

  function requestedLanguage() {
    const parameter = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED_LANGUAGES.includes(parameter)) return parameter;
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : "en";
  }

  function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });

    const isCvPage = document.body.querySelector(".cv-page");
    if (!isCvPage) {
      document.title = dictionary.pageTitle || translations.en.pageTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.content = dictionary.pageDescription || translations.en.pageDescription;
    }

    const nextLanguage = NEXT_LANGUAGE[language] || "en";
    const labels = {
      en: { text: "DE", aria: "Website auf Deutsch anzeigen" },
      de: { text: "FR", aria: "Afficher le site en français" },
      fr: { text: "EN", aria: "Show website in English" }
    };
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = labels[language].text;
      button.setAttribute("aria-label", labels[language].aria);
      button.setAttribute("title", `${language.toUpperCase()} → ${nextLanguage.toUpperCase()}`);
    });

    localStorage.setItem(STORAGE_KEY, language);
  }

  const initialLanguage = requestedLanguage();
  applyLanguage(initialLanguage);

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentLanguage = SUPPORTED_LANGUAGES.includes(document.documentElement.lang) ? document.documentElement.lang : "en";
      const nextLanguage = NEXT_LANGUAGE[currentLanguage];
      applyLanguage(nextLanguage);

      const url = new URL(window.location.href);
      if (nextLanguage === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", nextLanguage);
      window.history.replaceState({}, "", url);
    });
  });
})();
