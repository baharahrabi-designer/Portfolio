# Portfolio Website Plan
**Inspired by:** goodness-perspective-786131.framer.app

---

## 1. Color Palette

| Role              | Name             | Hex       | Usage                                      |
|-------------------|------------------|-----------|--------------------------------------------|
| Background        | Obsidian         | `#0D0D0D` | Page background, section fills             |
| Surface           | Dark Card        | `#141414` | Cards, nav bar, panels                     |
| Surface Raised    | Elevated Card    | `#1C1C1C` | Hover states, FAQ items, project cards     |
| Border            | Subtle           | `#2A2A2A` | Dividers, card borders                     |
| Text Primary      | Cream            | `#F0EBE1` | Headlines, body copy                       |
| Text Secondary    | Warm Gray        | `#9C9488` | Subheadings, metadata, labels              |
| Text Muted        | Dim              | `#5A5550` | Placeholder text, dates                    |
| Accent            | Warm Amber       | `#C8A96E` | CTAs, highlights, underlines, icons        |
| Accent Hover      | Light Amber      | `#D9BC88` | Button hover, link hover                   |
| Accent Subtle     | Amber Tint       | `#C8A96E1A` | Card hover overlays (10% opacity)         |

---

## 2. Typography

### Font Stack
- **Display / Hero:** `"Playfair Display", Georgia, serif`
  — Used for the main name headline and hero statement
- **Headings:** `"Inter", system-ui, sans-serif` (weight 600–700)
  — Section titles, card headings, nav items
- **Body:** `"Inter", system-ui, sans-serif` (weight 400)
  — All body text, descriptions, FAQ answers
- **Accent / Label:** `"Inter", system-ui, sans-serif` (weight 500, uppercase, letter-spacing: 0.12em)
  — Section labels ("SERVICES", "ABOUT", "PROJECTS"), tags

### Type Scale
| Token       | Size      | Weight | Line Height | Usage                  |
|-------------|-----------|--------|-------------|------------------------|
| `--t-hero`  | clamp(56px, 8vw, 96px) | 700 | 1.05 | Name / hero headline |
| `--t-h1`    | clamp(36px, 5vw, 60px) | 600 | 1.1  | Section titles         |
| `--t-h2`    | clamp(24px, 3vw, 36px) | 600 | 1.2  | Card titles            |
| `--t-h3`    | 20px      | 600    | 1.3         | Sub-section headings   |
| `--t-body`  | 16px      | 400    | 1.7         | Body paragraphs        |
| `--t-small` | 14px      | 400    | 1.6         | Captions, meta         |
| `--t-label` | 12px      | 500    | 1.4         | Uppercase labels       |

---

## 3. Page Sections

### 3.1 Navigation (Sticky)
- Fixed top bar, blurred backdrop (`backdrop-filter: blur(12px)`)
- Logo / name on the left (monogram or full name)
- Nav links on the right: About · Services · Projects · FAQ · Contact
- Hamburger menu for mobile
- Thin amber underline on active/hover links

### 3.2 Hero
- Full viewport height (`100svh`)
- Left-aligned layout (60% text, 40% visual)
- Content: Label tag ("UX/UI DESIGNER & DEVELOPER"), large display name, one-line tagline, two CTAs (primary filled, secondary outlined)
- Right side: abstract geometric/gradient shape or subtle animated canvas element
- Scroll indicator arrow at bottom center

### 3.3 Services
- 2-column grid of service cards
- Each card: icon (SVG line icon), service title, short description, subtle "→" link
- Cards have dark surface background with hover lift effect (translateY + border amber glow)
- Services: UI/UX Design · Brand Identity · Web Development · Design Systems

### 3.4 About
- 2-column: left = text (bio, philosophy), right = image or abstract visual
- Stats row below: Years Experience · Projects Completed · Happy Clients · Awards
- Stats use large amber number + small label underneath

### 3.5 Projects (Featured)
- Section label + title + "View All →" link
- 2-column masonry-style grid
- Each card: full-bleed project image/gradient, project title, category tag, brief description
- Hover reveals an overlay with a "View Case Study" button
- At least 4 featured projects

### 3.6 FAQ
- Full-width accordion list
- Each item: question in cream, expands to reveal answer in warm gray
- Smooth `max-height` CSS transition for open/close
- Amber "+" / "×" indicator on the right
- 6–8 questions covering process, pricing, timeline, tools, collaboration

### 3.7 Contact
- Dark card centered or full-width
- Headline ("Let's Work Together"), short invite text
- Email link (large, styled)
- Optional: social icons row (GitHub, LinkedIn, Dribbble, Twitter)
- Simple inline contact form: Name · Email · Message · Send button

### 3.8 Footer
- Thin top border, single row
- Left: copyright + name
- Center: nav links (condensed)
- Right: "Back to top" link with arrow

---

## 4. File Structure

```
portfolio/
├── index.html
├── css/
│   ├── reset.css          # Modern CSS reset (box-sizing, margin, etc.)
│   ├── variables.css      # All CSS custom properties (colors, type, spacing)
│   ├── base.css           # Typography, global element styles
│   ├── layout.css         # Grid helpers, container, section spacing
│   ├── components.css     # Buttons, cards, tags, badges, nav
│   └── sections/
│       ├── hero.css
│       ├── services.css
│       ├── about.css
│       ├── projects.css
│       ├── faq.css
│       └── contact.css
├── js/
│   ├── main.js            # Entry point — initializes all modules
│   ├── nav.js             # Sticky nav, hamburger, active link tracking
│   ├── faq.js             # Accordion open/close logic
│   ├── scroll.js          # Scroll-triggered reveal animations (IntersectionObserver)
│   └── cursor.js          # Optional: custom cursor dot effect
├── assets/
│   ├── images/
│   │   ├── hero-visual.png (or .svg)
│   │   ├── about-photo.jpg
│   │   └── projects/
│   │       ├── project-1.jpg
│   │       ├── project-2.jpg
│   │       ├── project-3.jpg
│   │       └── project-4.jpg
│   └── icons/
│       └── (SVG icons for services)
└── fonts/
    └── (optional local font files if self-hosting)
```

---

## 5. Tech Stack

**HTML · CSS · Vanilla JavaScript — no frameworks, no build tools.**

| Layer          | Choice                         | Rationale                                              |
|----------------|--------------------------------|--------------------------------------------------------|
| Markup         | Semantic HTML5                 | `<section>`, `<nav>`, `<article>`, `<details>` where appropriate |
| Styling        | CSS Custom Properties + Grid/Flexbox | Variables for theming, modern layout primitives   |
| Scripting      | Vanilla ES6+ (modules)         | IntersectionObserver for reveals, no jQuery            |
| Animations     | CSS transitions + `@keyframes` | GPU-composited `transform` and `opacity` only          |
| Fonts          | Google Fonts CDN               | Playfair Display 700 + Inter 400/500/600/700           |
| Icons          | Inline SVG or Lucide SVG files | No icon font overhead                                  |
| Dev server     | `npx serve .` or VS Code Live Server | Zero-config static serving                      |
| No build step  | Plain `<link>` and `<script type="module">` | Deploy as-is to any static host             |

### Key Interaction Patterns (Vanilla JS)
- **Scroll reveal:** `IntersectionObserver` adds `.visible` class → CSS transitions handle the animation (fade up, scale in)
- **FAQ accordion:** Toggle `aria-expanded` + `max-height` CSS transition
- **Sticky nav:** `scroll` listener adds `.scrolled` class for compact/blur state
- **Mobile menu:** Toggle `.open` class on nav, CSS handles slide-in panel
- **Smooth scroll:** `scroll-behavior: smooth` in CSS + JS fallback for anchor links
- **Cursor effect (optional):** Small amber dot that follows mouse with slight lag using `lerp`

---

## Design Principles to Follow

1. **Spacing rhythm:** Use an 8px base unit. Section padding: `clamp(80px, 10vw, 140px)` top/bottom.
2. **Motion:** Subtle and purposeful — reveal animations use `opacity: 0 → 1` + `translateY(24px → 0)`, 0.6s ease-out, staggered by 0.1s per child.
3. **Contrast:** All text meets WCAG AA on the dark backgrounds.
4. **Hover states:** Every interactive element has a visible hover (color shift, lift, or underline) — no bare state changes.
5. **Mobile-first:** Base styles target mobile; `@media (min-width: 768px)` and `@media (min-width: 1200px)` enhance upward.
