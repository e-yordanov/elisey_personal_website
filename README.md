# Elisey Yordanov — Personal Portfolio Website

A modern, animated personal portfolio website for Elisey Yordanov — Data Engineer & Software Developer.  
Built as a static site deployable to **GitHub Pages** with a custom domain via **Cloudflare**.

---

## Live Site

| URL                   | Notes                          |
|-----------------------|-------------------------------|
| `https://e-yordanov.github.io/elisey_personal_website/index.html` | GitHub Pages default URL |

---

## Features

| Feature | Details |
|---|---|
| **Bilingual** | English (default) + Bulgarian — toggle in navbar |
| **Dark / Light theme** | Persisted in `localStorage`; defaults to system preference |
| **Animated hero** | Canvas-based particle system with mouse interaction |
| **Typed text** | Cycling animated role titles in the hero |
| **Scroll animations** | AOS (Animate on Scroll) library |
| **Career Timeline** | Alternating vertical timeline with current-role indicator |
| **Projects grid** | 6 featured projects with gradient icons and tech tags |
| **Certifications lightbox** | Click any certificate image to expand it in a modal |
| **CV page** | Separate printable/viewable resume (`cv.html`) |
| **Counter animation** | Stats in the hero count up when scrolled into view |
| **Back to Top button** | Appears after scrolling 400 px |
| **Fully responsive** | Optimised for desktop, tablet, and mobile |
| **No backend required** | 100% static HTML/CSS/JS — GitHub Pages compatible |

---

## Project Structure

```
elisey_personal_website/
├── index.html          ← Main portfolio page
├── cv.html             ← CV / résumé page (printable)
├── styles.css          ← Global styles (variables, layout, all sections)
├── script.js           ← Main JavaScript (theme, language, particles, animations)
├── translations.js     ← All text content in English & Bulgarian
├── images/
│   ├── me.png                                          ← Profile photo
│   ├── professional-data-engineer-certification.png
│   ├── professional-machine-learning-engineer-certificatio.png
│   ├── professional-cloud-developer-certification.png
│   ├── build-and-deploy-a-generative-ai-solution-using-a-r.png
│   └── develop-advanced-enterprise-search-and-conversation.1.png
├── Profile.pdf         ← LinkedIn export (reference only, not served)
├── for_me.txt          ← Personal brief (reference only, not served)
└── README.md           ← This file
```

---

## Technology Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 (semantic) |
| **Styling** | CSS3 — custom properties, grid, flexbox, animations |
| **Logic** | Vanilla JavaScript ES6+ (no frameworks) |
| **Fonts** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (headings), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code/tags) |
| **Icons** | [Font Awesome 6](https://fontawesome.com/) (CDN) |
| **Animations** | [AOS v2.3.4](https://michalsnik.github.io/aos/) (CDN) + custom canvas particle system |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |
| **DNS / CDN** | [Cloudflare](https://www.cloudflare.com/) |

> **No build tools, no npm, no frameworks.** Open `index.html` directly in a browser to develop.

---

## Architecture

### Content Management

All text content (both languages) lives in `translations.js` as a plain JavaScript object.  
The `LanguageManager` class in `script.js` reads from it and renders each section dynamically using `innerHTML`.  
Static navigation items use `data-i18n` attributes for simple replacements.

```
translations.js
    └── translations.en / translations.bg
            ├── nav
            ├── hero
            ├── about
            ├── skills.categories[]
            ├── timeline.items[]
            ├── projects.items[]
            ├── certs.items[]
            └── contact
```

### Theme System

- Stored in `localStorage` under key `ey-theme`
- Applied via `data-theme="dark|light"` on `<html>`
- All colours are CSS custom properties, redefined for `[data-theme="dark"]`
- Defaults to system preference on first visit (`prefers-color-scheme`)

### Particle System

Custom canvas-based particle animation in `script.js` (`ParticleSystem` class):
- 70 particles with random velocity, size, colour (violet/purple palette)
- Particles connect with faint lines when closer than 130 px
- Mouse repulsion: particles are pushed away from the cursor
- Opacity pulses using a sine wave per particle
- Particles wrap around canvas edges

### CV Page

`cv.html` is a standalone page with all content inline (no JS rendering from `translations.js`).  
A small inline script handles language switching for the CV-specific strings.  
Print styles (`@media print`) hide the navbar and topbar for clean PDF export.

---

## Local Development

No server required — simply open the file:

```bash
# Option 1: Direct file open
start index.html    # Windows
open  index.html    # macOS

# Option 2: Simple HTTP server (recommended to avoid CORS on local files)
python -m http.server 8000
# then visit http://localhost:8000
```

Or use the VS Code / Cursor **Live Server** extension.

---

## Deployment to GitHub Pages

### 1. Push to GitHub

```bash
git init                          # if not already a repo
git remote add origin https://github.com/<username>/<repo>.git
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to **Settings → Pages** in your repository.
2. Source: **Deploy from a branch**.
3. Branch: `main` / `root`.
4. Save — GitHub will deploy to `https://<username>.github.io/<repo>/`.

For a root-level personal site (repo named `<username>.github.io`):
- The site deploys to `https://<username>.github.io/` directly.

### 3. Custom Domain via Cloudflare

#### a) Add CNAME file

```bash
echo "yourdomain.com" > CNAME
git add CNAME && git commit -m "Add CNAME for custom domain" && git push
```

#### b) Cloudflare DNS Records

In **Cloudflare → DNS**, add these records:

| Type | Name | Content | Proxy |
|---|---|---|---|
| `A` | `@` | `185.199.108.153` | ☁️ Proxied |
| `A` | `@` | `185.199.109.153` | ☁️ Proxied |
| `A` | `@` | `185.199.110.153` | ☁️ Proxied |
| `A` | `@` | `185.199.111.153` | ☁️ Proxied |
| `CNAME` | `www` | `<username>.github.io` | ☁️ Proxied |

#### c) GitHub Pages custom domain

In **Settings → Pages → Custom domain**, enter `yourdomain.com` and enable **Enforce HTTPS**.

#### d) Cloudflare SSL/TLS

Set **SSL/TLS → Overview** to **Full (strict)** to avoid redirect loops.

---

## Updating Content

### Adding / changing text

Edit `translations.js` — both `en` and `bg` sections.  
The website re-renders all sections on every language switch and page load.

### Adding a project

In `translations.js` under `projects.items`, add a new object:

```js
{
    title:       "Project Name",
    description: "Short description...",
    tags:        ["Tag1", "Tag2"],
    icon:        "fas fa-icon-name",   // Font Awesome icon class
    gradient:    "grad-purple"         // one of: grad-purple, grad-indigo, grad-pink, grad-cyan, grad-amber, grad-green
}
```

Add the equivalent entry to the `bg` section as well.

### Adding a certification

In `translations.js` under `certs.items` (same for both `en` and `bg`):

```js
{ name: "Certification Name", image: "images/your-cert-image.png" }
```

Place the image in the `/images/` directory.

### Changing the profile photo

Replace `images/me.png` with your new photo (keep the same filename, or update references in `index.html` and `cv.html`).

---

## Colour Palette

| Variable | Value | Usage |
|---|---|---|
| `--clr-primary` | `#8b5cf6` | Violet — main accent |
| `--clr-primary-dark` | `#7c3aed` | Hover states, gradients |
| `--clr-primary-light` | `#a78bfa` | Subtle accents |
| `--clr-indigo` | `#6366f1` | Secondary accent |
| `--clr-pink` | `#ec4899` | Highlight accent |
| `--clr-cyan` | `#06b6d4` | Info / secondary |
| `--clr-amber` | `#f59e0b` | Awards, warnings |
| `--clr-green` | `#10b981` | Current role badge |

---

## Browser Support

Tested and working in:
- Chrome 100+ ✅
- Firefox 100+ ✅
- Edge 100+ ✅
- Safari 15+ ✅
- Mobile Chrome / Safari ✅

---

## Author

**Elisey Yordanov**  
Data Engineer & Software Developer  
Ruse, Bulgaria

- Email: [elisei.elisei4@gmail.com](mailto:elisei.elisei4@gmail.com)
- Phone: [0888 575 501](tel:+359888575501)
- LinkedIn: [linkedin.com/in/elisey-yordanov-19625a1a0](https://www.linkedin.com/in/elisey-yordanov-19625a1a0)
- GitHub: [github.com/e-yordanov](https://github.com/e-yordanov)

---

## License

All rights reserved © Elisey Yordanov.
