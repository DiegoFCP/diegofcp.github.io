# Design System: Diego Cortés Pinilla — Portafolio
**Creative North Star:** Asfalto + cobre — profesional, cálido y técnico. Oscuro como el asfalto, con acento cobre humano y teal de datos/ERP. Nada de índigo/cian genérico tipo SaaS.

## 1. Visual Theme & Atmosphere
Quiet industrial night. Dense but breathable. High credibility, low flash. Soft copper and teal glows in the background (blurred orbs), a faint grid, sticky translucent nav. Inspired by production software and process work—not startup purple gradients. Mood: grounded, precise, approachable.

## 2. Color Palette & Roles
- **Asphalt Black** (`#0c0b0a`) — page background, theme-color, monogram fill.
- **Warm Charcoal** (`#121110`) — secondary surfaces, contact block, open mobile nav.
- **Card Umber** (`#171614`) — cards and fact tiles at rest.
- **Card Lift** (`#1e1c1a`) — card hover surface.
- **Paper Ink** (`#f3efe9`) — primary text; high contrast on asphalt.
- **Warm Stone** (`#b8b0a6`) — secondary body text.
- **Dust Mute** (`#8a837a`) — metadata, dates, notes (avoid for small text on colored halos).
- **Forge Copper** (`#d4894c`) — primary accent: links, org names, CTA glow, brand gradient start.
- **Signal Teal** (`#2a9b8f`) — kickers, focus rings, icon accents, brand gradient end.
- **Production Green** (`#3dba8a`) — badge “En producción”.
- **Concept Amber** (`#e0a84a`) — badge “Prueba de concepto”.
- **Personal Lilac** (`#8b7ec8`) — badge “Herramienta personal” (restrained, not neon purple).
- **Brand Gradient** — `linear-gradient(135deg, #d4894c 0%, #c9a35c 45%, #2a9b8f 100%)` for name highlight and monogram border.
- **Hairline** — `rgba(255,255,255,.08)` / `.14` for borders.

Background atmosphere orbs: copper `#c47a3a` and teal `#1f7a72`, heavily blurred, low opacity.

## 3. Typography Rules
- **Sans:** Inter (400 body, 600 UI emphasis, 700 section titles, 800 hero name). Tight letter-spacing on headings (`-.045em` on h1, `-.035em` on h2).
- **Mono:** JetBrains Mono (500) for kickers, badges, tags, dates, code card.
- Hero name large and bold; “Cortés Pinilla” uses the brand gradient as clipped text.
- Body ~16px / 1.65. Avoid tiny mute-colored text on orange halos (WCAG).

## 4. Component Stylings
- **Buttons:** 12px radius. Primary = solid white on asphalt text; hover warm paper `#f5ebe0` with soft copper shadow. Secondary = translucent fill + hairline border.
- **Cards:** 16px radius, hairline border, lift 3px on hover; optional spotlight radial that follows the cursor (copper tint).
- **Badges:** Pill-shaped mono labels with status colors above.
- **Nav:** Sticky, frosted asphalt glass (`backdrop-filter`), height 64px; brand monogram “DC” with gradient ring.
- **Code card:** Decorative editor chrome with warm syntax colors (copper keywords, teal strings); no horizontal page overflow; smaller type under 360px.
- **Timeline:** Vertical copper→teal line; current role with copper node; past roles muted.
- **Eyebrow location chip:** Paper ink text on opaque asphalt tint for contrast (`rgba(12,11,10,.72)`).

## 5. Layout Principles
- Max content width **1120px**, horizontal padding 24px (20px on small screens).
- Hero: two columns (~1.35 / 0.85) — copy left, code card right; collapse to one column ≤980px.
- Projects: 6-column CSS grid; featured span 6; half span 3; full span 6 for odd last card.
- Skills & education: 3 columns → 2 → 1 by breakpoint.
- Section padding ~88px (64px mobile). One job per section; no metric spam; no stock photo hero.
- Respect `prefers-reduced-motion`: no reveal animations, instant visibility.
- Language: Spanish (Chile). Discrete professional tone—never “open to work”.

## 6. Content Guardrails (must respect when generating)
- Single-page portfolio: Nav, Hero, Sobre mí, Proyectos, Experiencia, Habilidades, Educación, Contacto, Footer.
- Projects show real status badges only.
- Contact: LinkedIn, GitHub DiegoFCP, `diegocortes.pinilla@gmail.com` only—no phone, no corporate email.
- No invented metrics, no cloud logos not in use, no Intranet screenshots or public demo links.
