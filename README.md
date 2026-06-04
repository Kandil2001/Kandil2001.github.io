# Ahmed Kandil Portfolio Website

Ready-to-upload personal portfolio website for GitHub Pages.

## Publish the website

1. Create or open the public GitHub repository named exactly:

```text
kandil.github.io
```

2. Upload all files and folders from this package to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings > Pages** in the repository.
5. Select **Deploy from a branch**, choose `main` and `/root`, then save.

The website will be available at:

```text
https://kandil.github.io
```

## Before publishing

Add your CV here using the exact filename:

```text
assets/documents/Ahmed_Kandil_CV.pdf
```

The package includes two polished vector project covers. Replace them later only if you prefer real result images, while keeping the same filenames:

```text
assets/images/lid-cavity.svg
assets/images/pedestrian-simulation.svg
```

The GitHub profile and LinkedIn links are already configured. The lid-driven-cavity project button currently links to:

```text
https://github.com/kandil/LidCavity_MATLAB
```

Change that link in `projects/lid-cavity.html` only if your repository has a different name.

## Main files

- `index.html`: homepage
- `style.css`: design and responsive layout
- `script.js`: mobile menu
- `projects/`: individual project pages
