# harvey-cash.github.io

Harvey Cash's personal website, hosted on GitHub Pages at [harvey.cash](https://harvey.cash).

## Overview

The landing page (`index.html`) is a professional portfolio covering Harvey's engineering background, projects, skills, employment history, services, and contact details. Sub-pages serve a variety of miscellaneous personal purposes.

## Structure

```
index.html          # Portfolio landing page
fermi/              # A guide to looking after Fermi (a pet)
separation/         # Brave Paws landing page, app, and streamer
kimchi/             # Harvey's kimchi recipe
ominous-refuge/     # Ominous Refuge sub-page
images/             # Shared image assets
favicon.ico         # Site favicon
CNAME               # Custom domain (harvey.cash)
```

## Tech Stack

- **HTML5** — Plain `.html` files; no build step or bundler
- **Tailwind CSS** — Loaded via CDN (`https://cdn.tailwindcss.com`)
- **Google Fonts** — Inter font family
- **Vanilla JS** — Used inline where needed; no frameworks

## Local Preview

Open any `.html` file directly in a browser, or use a simple static server:

```bash
python3 -m http.server
```

## Deployment

GitHub Pages automatically deploys changes merged to the default branch. The custom domain is configured via the `CNAME` file.
