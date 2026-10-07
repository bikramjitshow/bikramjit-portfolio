# Bikram | Frontend Developer Portfolio

A production-ready portfolio site reproducing the 9 supplied UI screens
(Home, About, Skills, Experience, Projects, Project Case Study, Services,
Contact, Resume), delivered two ways:

1. **`/` (project root)** — a Vue 3 application (Vue Router + Pinia + SCSS).
2. **`/html`** — standalone HTML/CSS/JS versions of every page, with no
   build step or framework required.

## 1. Vue application

### Stack
- Vue 3 (`<script setup>`)
- Vue Router 4 (one route per page, `/projects/:id` for case studies)
- Pinia (portfolio data store + contact form store)
- SCSS (design tokens in `src/assets/scss/_variables.scss`)
- Vite

### Folder structure (atomic / component-based)
```
src/
  assets/scss/       design tokens, mixins, base reset
  components/
    atoms/            Button, Badge, Logo, Input, IconBox, StatItem
    molecules/        SectionHeading, ProjectCard, ServiceCard, TimelineItem, ...
    organisms/         SiteHeader, HeroSection, AboutSection, SkillsGrid, ...
    templates/         DefaultLayout
  data/               JSON files (single source of truth for content)
  router/             Vue Router configuration
  stores/             Pinia stores (portfolio.js, contact.js)
  views/              One thin view per route, composes organisms
```

### Run it
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

### Data
All dynamic content (profile, skills, experience, projects, services,
contact info, resume, navigation) lives in `src/data/*.json`. Edit those
files to update the site's content without touching any component code.

## 2. Standalone HTML pages (`/html`)

Plain HTML + CSS + vanilla JS mirror of every page — useful for hosting
on a static file server with zero build tooling.

```
html/
  index.html            Home
  about.html
  skills.html
  experience.html
  projects.html
  project-detail.html   reads ?id= from the query string
  services.html
  contact.html
  resume.html
  css/style.css         shared stylesheet (same design tokens as the Vue app)
  js/data.js             shared content (mirrors src/data/*.json)
  js/main.js             shared header/nav rendering + mobile menu
  js/<page>.js           per-page render logic
```

Open `html/index.html` directly in a browser, or serve the `html/`
folder with any static file server. Every page is fully self-contained
(no bundler required).

## Notes
- Both builds share the same visual design system (colors, spacing,
  typography) so the Vue app and the standalone HTML pages stay in sync.
- The contact form and project filters are functional client-side (no
  backend is included, matching what's shown in the UI).
