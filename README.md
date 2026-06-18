# Ahmed Kandil Portfolio Website

Personal portfolio website for CFD, thermal-fluid simulation, scientific computing, solver validation, and HPC projects.

Website: https://kandil2001.github.io

## Main message

This site positions Ahmed as a CFD-focused engineer who can:

- understand and explain the physics behind a simulation problem,
- build small CFD solvers from first principles,
- validate results instead of only showing attractive plots,
- compare MATLAB, Python, C, C++, MPI, OpenMP, and CUDA-style workflows,
- communicate assumptions, limitations, and next steps clearly.

## Languages

The homepage supports English and German.

- English is the default language.
- The `DE` / `EN` button in the navigation switches the homepage language.
- The selected language is saved in the browser using `localStorage`.
- German can also be opened directly with:

```text
https://kandil2001.github.io/?lang=de
```

## Main files

- `index.html` — homepage and recruiter-facing portfolio summary
- `style.css` — full responsive styling, project-page styling, and language-button styling
- `script.js` — mobile navigation, English/German language toggle, analytics, optional carousel logic, and visit counter
- `projects/` — individual project case studies
- `sitemap.xml` — pages exposed to search engines
- `robots.txt` — crawler access and sitemap reference

## Current homepage structure

1. Hero section with Ahmed's CFD/scientific-computing positioning.
2. Proof points showing CFD, validation, HPC, and reproducibility.
3. Current research direction around low-humidity mini-environments and air-curtain sealing.
4. Selected projects with case-study and repository links.
5. Engineering and research experience.
6. Skills, education, and contact section.

## Recommended GitHub Pages setup

Publish from the `main` branch and repository root.

## CV

The CV button is currently not shown because no CV PDF is stored in the website repository yet. To add it later, upload your PDF as:

```text
assets/Ahmed_Kandil_CV.pdf
```

Then add a button linking to that path in `index.html`.

## Contact

Public contact email used on the website:

```text
a.akandil@outlook.com
```

## Notes

The website is intentionally simple: static HTML, CSS, and JavaScript only. This keeps it fast, easy to maintain, and reliable on GitHub Pages.
