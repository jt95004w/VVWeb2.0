# Vivid Vision Collective (VV) — Jekyll Portal

Early-2000s corporate-portal inspired static site built for GitHub Pages.

## Local development
1. Install Ruby + Bundler.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open `http://127.0.0.1:4000`.

## Deploy on GitHub Pages
1. Push this repository to GitHub.
2. In **Settings → Pages**, set source to **Deploy from a branch** and choose your default branch root.
3. If deploying under a project subpath, set `_config.yml` `baseurl` to `/<repo-name>`.

## Content editing guide
- Navigation, bulletins, KPIs, events, roles, updates:
  - Edit YAML files in `_data/`.
- Artist detail pages:
  - Add/edit markdown files in `_artists/`.
- Artist fallback directory source:
  - `_data/artists.yml`.
- Styling:
  - `assets/css/site.css`.
- Interaction (filters/toggles):
  - `assets/js/site.js`.
- Placeholder visual assets:
  - `assets/img/placeholders/`, `assets/textures/`, `assets/overlays/`.
