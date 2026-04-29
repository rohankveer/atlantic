:root {
  color-scheme: light dark;

  --bg: #f7f6f3;
  --bg-soft: #eeebe4;
  --surface: #ffffff;
  --text: #111418;
  --text-soft: #555c66;
  --line: #dedad3;
  --primary: #1a3a5c;
  --primary-strong: #0f2540;
  --accent: #b8922a;
  --accent-strong: #9a7820;
  --shadow: 0 8px 28px rgba(15, 20, 30, 0.10);
}

[data-theme="dark"] {
  --bg: #0c1018;
  --bg-soft: #131c28;
  --surface: #192435;
  --text: #f0ede8;
  --text-soft: #8e9bab;
  --line: #1e2d3e;
  --primary: #88b4e8;
  --primary-strong: #aacaf2;
  --accent: #d4aa5a;
  --accent-strong: #e0c07a;
  --shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Segoe UI Variable", "Trebuchet MS", sans-serif;
  line-height: 1.6;
  color: var(--text);
  background:
    radial-gradient(ellipse at 85% 0%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 38%),
    radial-gradient(ellipse at 12% 0%, color-mix(in srgb, var(--primary) 7%, transparent), transparent 32%),
    var(--bg);
}

h1,
h2,
h3 {
  font-family: "Cambria", "Times New Roman", serif;
  line-height: 1.2;
  margin-top: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1080px, 92vw);
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: color-mix(in srgb, var(--bg) 86%, transparent);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.brand-logo-area {
  width: 2.2rem;
  height: 2.2rem;
  flex: 0 0 auto;
}

.brand-logo-area svg {
  width: 100%;
  height: 100%;
  display: block;
}

.logo-bg {
  fill: color-mix(in srgb, var(--primary) 18%, #ffffff);
}

.logo-line {
  fill: none;
  stroke: var(--primary);
  stroke-width: 3;
  stroke-linecap: round;
}

.brand-text {
  display: grid;
  line-height: 1.1;
}

.brand-text small {
  color: var(--text-soft);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.main-nav a {
  color: var(--text-soft);
}

.main-nav a:hover {
  color: var(--text);
}

.theme-toggle {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
}

.hero {
  padding: 4.4rem 0 2.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 1.2rem;
  align-items: center;
}

.eyebrow {
  color: var(--primary);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.hero h1 {
  max-width: 18ch;
  font-size: clamp(2rem, 5vw, 3.4rem);
}

.hero p {
  max-width: 68ch;
  color: var(--text-soft);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.section-image {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid var(--line);
  border-radius: 0.9rem;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.section-image-sm {
  margin-bottom: 1rem;
  max-height: 320px;
  object-fit: cover;
}

.btn {
  display: inline-block;
  padding: 0.72rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid transparent;
  font-weight: 600;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  letter-spacing: 0.02em;
}

.btn-primary:hover {
  background: var(--accent-strong);
}

.btn-secondary {
  background: var(--surface);
  border-color: var(--line);
}

.section {
  padding: 1.2rem 0 2.2rem;
}

.section h2 {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
}

.section-lead {
  color: var(--text-soft);
}

.grid {
  display: grid;
  gap: 1rem;
}

.cards-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 0.9rem;
  padding: 1rem;
  box-shadow: var(--shadow);
}

.card h3 {
  margin-bottom: 0.5rem;
}

.card p {
  margin: 0;
  color: var(--text-soft);
}

.product-thumb {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  border: 1px solid var(--line);
  border-radius: 0.65rem;
  margin-bottom: 0.75rem;
  background: var(--bg-soft);
}

#products .card {
  padding: 0.55rem;
}

#products .product-thumb {
  height: auto;
  aspect-ratio: 4 / 3;
  margin-bottom: 0;
  border-radius: 0.7rem;
  cursor: zoom-in;
  transition: transform 0.2s, box-shadow 0.2s;
}

#products .product-thumb:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 28px rgba(15, 20, 30, 0.18);
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 12, 18, 0.92);
  backdrop-filter: blur(6px);
  padding: 1rem;
  animation: lb-fade-in 0.22s ease;
}

.lightbox[hidden] {
  display: none;
}

@keyframes lb-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.lightbox-figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: min(900px, 92vw);
}

.lightbox-figure img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 0.75rem;
  display: block;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
  animation: lb-zoom-in 0.22s ease;
}

@keyframes lb-zoom-in {
  from { transform: scale(0.93); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

.lightbox-figure figcaption {
  color: rgba(240, 237, 232, 0.82);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: fixed;
  background: rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s;
  font-size: 1.3rem;
  line-height: 1;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(184, 146, 42, 0.45);
}

.lightbox-close {
  top: 1.1rem;
  right: 1.2rem;
  width: 2.4rem;
  height: 2.4rem;
}

.lightbox-prev {
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.8rem;
  height: 2.8rem;
  font-size: 1.8rem;
}

.lightbox-next {
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.8rem;
  height: 2.8rem;
  font-size: 1.8rem;
}

.simple-list {
  margin: 0;
  padding-left: 1.1rem;
}

.simple-list li {
  margin-bottom: 0.25rem;
}

.customers-band {
  background:
    radial-gradient(ellipse at 100% 50%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 46%),
    linear-gradient(135deg, #0f2540 0%, #1a3a5c 100%);
  padding: 2.8rem 0 3rem;
  margin: 2rem 0 0;
}

[data-theme="dark"] .customers-band {
  background:
    radial-gradient(ellipse at 100% 50%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 44%),
    linear-gradient(135deg, #070c14 0%, #0f1e30 100%);
}

.customers-band h2,
.customers-band .eyebrow {
  color: #ffffff;
}

.customers-lead {
  color: rgba(255, 255, 255, 0.75) !important;
  margin-bottom: 1.8rem;
}

.logo-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.logo-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 200px;
  flex: 0 0 auto;
}

.logo-item img {
  width: 100%;
  height: 88px;
  object-fit: contain;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.4rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s;
}

.logo-item img:hover {
  transform: translateY(-3px);
}

.logo-item figcaption {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
}

.testimonials-band {
  margin: 0;
  padding: 2.9rem 0 3rem;
  background:
    radial-gradient(ellipse at 8% 100%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 40%),
    radial-gradient(ellipse at 92% 0%, color-mix(in srgb, var(--primary) 10%, transparent), transparent 38%),
    linear-gradient(160deg, #e8e3d9 0%, #f2ede4 100%);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

[data-theme="dark"] .testimonials-band {
  background:
    radial-gradient(ellipse at 8% 100%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 40%),
    radial-gradient(ellipse at 92% 0%, color-mix(in srgb, var(--primary) 12%, transparent), transparent 38%),
    linear-gradient(160deg, #131c28 0%, #1a2535 100%);
}

.testimonials-grid {
  margin-top: 1rem;
}

.testimonials-lead {
  max-width: 62ch;
}

.testimonial-card {
  position: relative;
  border-top: 3px solid var(--accent);
  background: var(--surface);
}

.testimonial-card p:first-child {
  margin: 0;
  color: var(--text);
  font-style: italic;
}

.testimonial-card p:first-child::before {
  content: "\201C";
  color: var(--accent);
  font-size: 1.4rem;
  font-weight: 700;
  margin-right: 0.2rem;
  vertical-align: top;
}

.testimonial-author {
  margin-top: 0.85rem !important;
  color: var(--text-soft) !important;
  font-size: 0.9rem;
  font-weight: 600;
}

.contact {
  margin-top: 2.5rem;
  padding-top: 1.6rem;
  border-top: 2px solid var(--line);
}

.contact .card {
  background: var(--surface);
  border-top: 2px solid var(--accent);
}

.contact-meta {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.9rem;
  border: 1px solid var(--line);
  background: var(--surface);
}

.contact-meta p {
  margin: 0.25rem 0;
}

.site-footer {
  border-top: 1px solid var(--line);
  margin-top: 2rem;
  padding: 1rem 0 1.5rem;
  color: var(--text-soft);
}

.whatsapp-fab {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 60;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  padding: 0.65rem 0.9rem;
  border: 1px solid color-mix(in srgb, #22c55e 55%, var(--line));
  background: color-mix(in srgb, #22c55e 88%, #ffffff);
  color: #06351a;
  box-shadow: var(--shadow);
  font-weight: 700;
}

[data-theme="dark"] .whatsapp-fab {
  color: #e9fff3;
  background: color-mix(in srgb, #22c55e 45%, #0f1720);
}

.whatsapp-fab:hover {
  transform: translateY(-1px);
}

@media (max-width: 920px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .cards-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

}


.menu-toggle {
  display: none;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  font-size: 1.15rem;
  line-height: 1;
}

@media (max-width: 700px) {
  .menu-toggle {
    display: inline-flex;
  }

  .theme-label {
    display: none;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--bg);
    border-bottom: 2px solid var(--line);
    box-shadow: var(--shadow);
    padding: 0.4rem 0;
    z-index: 49;
  }

  .main-nav a {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--line);
    font-size: 1rem;
  }

  .main-nav a:last-child {
    border-bottom: none;
  }

  .site-header.nav-open .main-nav {
    display: flex;
  }

  .cards-3 {
    grid-template-columns: 1fr;
  }

  .logo-item {
    width: calc(50% - 0.5rem);
  }

  .hero {
    padding-top: 3rem;
  }

  .whatsapp-fab {
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 0.58rem 0.78rem;
    font-size: 0.9rem;
  }
}

/* ── Skip navigation link ── */
.skip-link {
  position: absolute;
  top: -999px;
  left: 1rem;
  z-index: 9999;
  padding: 0.6rem 1rem;
  background: var(--primary);
  color: #ffffff;
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

/* ── Focus styles ── */
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
  border-radius: 3px;
}

/* ── Image loading: fade-in on load ── */
@keyframes img-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

img[data-lazy] {
  opacity: 0;
  transition: opacity 0.35s ease;
  background: linear-gradient(
    90deg,
    var(--bg-soft) 25%,
    var(--line) 50%,
    var(--bg-soft) 75%
  );
  background-size: 200% 100%;
  animation: img-shimmer 1.4s linear infinite;
}

img[data-lazy].loaded {
  opacity: 1;
  animation: none;
  background: none;
}

/* ── Deferred rendering for off-screen sections ── */
#about,
#products,
#customers,
#testimonials,
#contact {
  content-visibility: auto;
  contain-intrinsic-size: auto 480px;
}

/* ── Product image keyboard focus ring ── */
.product-thumb:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}
