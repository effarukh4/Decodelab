# Project 1 — Responsive Frontend Interface

A responsive, accessible, mobile-first landing page built with semantic HTML5, CSS3 (Grid + Flexbox), and vanilla JavaScript. No frameworks, no build step — open `index.html` and go.

## Stack

- **HTML5** — semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — custom properties, CSS Grid for page layout, Flexbox for components, `clamp()` for fluid type
- **Vanilla JavaScript** — mobile navigation toggle and basic UI state, no dependencies

## Getting Started

No build tools required.

```bash
# Option 1 — just open it
open index.html

# Option 2 — serve it locally (recommended for consistent asset paths)
npx serve .
# or
python3 -m http.server 8000
```

## Project Structure

```text
project-1-responsive-frontend/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   ├── variables.css     # design tokens (color, type, spacing, radius)
│   ├── style.css         # base styles, components, sections
│   └── responsive.css    # mobile-first breakpoints (768px / 1024px)
│
├── js/
│   └── script.js         # mobile nav + basic interactions
│
└── assets/
    ├── images/
    │   ├── hero/
    │   ├── features/
    │   └── logo/
    └── icons/
```

## Design System

| Token              | Value                          |
| ------------------ | ------------------------------- |
| Primary            | `#a47764` — Mocha Mousse        |
| Secondary          | `#c5e7f0` — Ethereal Blue       |
| Background         | `#f2f0ea` — Moonlit Grey        |
| Heading font       | Montserrat                      |
| Body font          | Open Sans                       |
| Breakpoints        | 768px (tablet), 1024px (desktop)|
| Layout strategy    | CSS Grid for page layout, Flexbox for components |

All tokens live in `css/variables.css` — change them there and the whole page updates.

## Responsive Strategy

Built mobile-first: base styles target small screens, then `min-width` media queries in `responsive.css` progressively enhance the layout at 768px and 1024px.

```
Mobile (default) → Tablet (768px+) → Desktop (1024px+)
```

## Accessibility

- Semantic HTML5 landmarks throughout
- Skip-to-content link
- Visible keyboard focus states (`:focus-visible`)
- `aria-expanded` / `aria-controls` on the mobile menu button
- `prefers-reduced-motion` respected
- Descriptive `alt` text on meaningful images; decorative images use `alt=""`

## Testing Checklist

- [ ] 360px mobile
- [ ] 768px tablet
- [ ] 1024px+ desktop
- [ ] Keyboard-only navigation
- [ ] Lighthouse: performance / accessibility / LCP / CLS

## Notes

Images in `assets/images/` are lightweight placeholders — swap them for real assets before shipping. This project is intentionally frontend-only; no React, Node.js, backend, or API is included unless a separate requirement calls for it.
