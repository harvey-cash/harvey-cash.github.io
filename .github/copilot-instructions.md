# Copilot Instructions

## Repository Overview

This is Harvey Cash's personal website, hosted on GitHub Pages at [harvey-cash.github.io](https://harvey-cash.github.io). It is a static site built with plain HTML and [Tailwind CSS](https://tailwindcss.com/) (loaded via CDN), using Google Fonts (Inter).

## Project Structure

- `index.html` — Main portfolio/landing page (dark theme, sky-blue accent colour `#38bdf8`)
- `fermi/` — A guide page about looking after Fermi (a pet)
- `kimchi/` — A sub-page about kimchi
- `ominous-refuge/` — Another sub-page
- `images/` — All image assets used across the site
- `favicon.ico` — Site favicon
- `CNAME` — Custom domain configuration

## Tech Stack

- **HTML5** — All pages are plain `.html` files; no build step or bundler is used
- **Tailwind CSS** — Loaded via CDN (`https://cdn.tailwindcss.com`); no local Tailwind config file
- **Google Fonts** — Inter font family, loaded via `fonts.googleapis.com`
- **No JavaScript frameworks** — Vanilla JS only where needed
- **No package manager** — There is no `package.json`, `Gemfile`, or similar

## Coding Conventions

- Use Tailwind utility classes for layout and styling wherever possible
- For colours not covered by Tailwind defaults, use the custom CSS classes already defined in each page's `<style>` block (e.g. `accent-colour`, `accent-bg`, `card-bg`)
- The main site uses a **dark theme** (`bg-gray-900` / `#111827` background, `text-gray-300` body text, `#38bdf8` sky-blue accent)
- Sub-pages may have their own colour schemes — match the existing style of the page being edited
- Keep all pages self-contained (styles in `<style>` tags, no external CSS files)
- Images go in the `images/` directory

## Testing & Deployment

- There is no automated test suite or build pipeline
- Changes are deployed automatically by GitHub Pages when merged to the default branch
- To preview locally, open the HTML files directly in a browser or use a simple static file server (e.g. `python3 -m http.server`)
