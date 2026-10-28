import { readFileSync } from 'node:fs';
import { site, nav, booking } from './site.mjs';

const images = JSON.parse(readFileSync(new URL('./images.json', import.meta.url)));

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Responsive <img> from the optimized set in static/img (see scripts/optimize_images.py).
export function img(name, { alt = '', sizes = '100vw', cls = '', eager = false, style = '' } = {}) {
  const meta = images[name];
  if (!meta) throw new Error(`Unknown image: ${name}`);
  const largest = meta.widths[meta.widths.length - 1];
  const srcset = meta.widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ');
  const h = Math.round((meta.h * largest) / meta.w);
  return `<img src="/img/${name}-${largest}.webp" srcset="${srcset}" sizes="${sizes}" width="${largest}" height="${h}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

// Decorative laurel emblem, mirrored on the right like the original bands.
export const emblems = (variant = 'black') =>
  `<img class="emblem emblem--left emblem--${variant}" src="/img/emblem-440.webp" alt="" width="440" height="412" loading="lazy" aria-hidden="true">` +
  `<img class="emblem emblem--right emblem--${variant}" src="/img/emblem-440.webp" alt="" width="440" height="412" loading="lazy" aria-hidden="true">`;

export function hero({ image, alt, content = '', cls = '', position = '50% 50%', slides = [] }) {
  const mainImage = img(image, { alt, eager: true, cls: `hero__bg${slides.length ? ' is-current' : ''}`, style: `object-position:${position}` });
  return `<section class="hero ${cls}">
  ${slides.length ? `<div class="hero-media">${mainImage}${slides.map(s => img(s.image, {alt:s.alt,cls:'hero__bg',style:`object-position:${s.position || '50% 50%'}`})).join('')}</div>` : mainImage}
  <div class="hero__content">${content}</div>
  ${slides.length ? `<div class="hero-carousel-controls" hidden><div class="hero-carousel-dots" role="group" aria-label="Choose academy photograph">${[alt,...slides.map(s=>s.alt)].map((a,i)=>`<button type="button" class="hero-dot${i===0?' is-active':''}" aria-label="Show photograph ${i+1}: ${esc(a)}" aria-pressed="${i===0}"></button>`).join('')}</div></div>` : ''}
</section>`;
}

export const ext = (href, label, cls = 'btn') =>
  `<a class="${cls}" href="${href}"${Object.values(booking).includes(href) ? ' data-wiil-open aria-haspopup="dialog"' : ''} target="_blank" rel="noopener">${label}</a>`;

// The gray "START TRAINING TODAY" band with the two intro buttons.
export function startTraining({ lead = '' } = {}) {
  return `<section class="band band--gray band--emblems training-band">
  ${emblems('black')}
  <div class="band__inner">
    ${lead}
    <h2 class="spaced spaced--xl">Start Training Today</h2>
    <div class="btn-row">
      ${ext(booking.adultIntro, 'Book an Adult Intro')}
      ${ext(booking.kidsIntro, 'Book a Kids Intro')}
    </div>
  </div>
</section>`;
}

export function photoGrid(names, { cols = 3, alt = 'Training at Ralph Gracie San Ramon' } = {}) {
  return `<section class="photo-grid photo-grid--${cols}">
  ${names.map((n) => img(n, { alt, sizes: `(max-width: 700px) 50vw, ${Math.round(100 / cols)}vw` })).join('\n  ')}
</section>`;
}

const instagramIcon = `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.4-.3.9-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.1.9.3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.4.3-.9.4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.1-.9-.3-2-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.2-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z"/></svg>`;

export const instagramLink = (cls = 'icon-link') =>
  `<a class="${cls}" href="${site.instagram}" target="_blank" rel="noopener" aria-label="Ralph Gracie San Ramon on Instagram">${instagramIcon}</a>`;

const { address: a } = site;
export const addressLines = `${a.street}<br>${a.city}, ${a.region} ${a.zip}`;

function header(path) {
  const links = nav
    .map((n) => `<li><a href="${n.href}"${n.href === path ? ' aria-current="page"' : ''}>${n.label}</a></li>`)
    .join('');
  return `<header class="site-header">
  <a class="skip-link" href="#main">Skip to main content</a>
  <nav class="site-nav" aria-label="Main">
    <a class="nav-brand" href="/" aria-label="Ralph Gracie San Ramon home"><img src="/img/badge-256.webp" alt="" width="256" height="259"><span>Ralph Gracie<small>San Ramon, CA</small></span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-list" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <ul id="nav-list">${links}</ul>
    <a class="nav-intro" href="/intro" data-wiil-open aria-haspopup="dialog">Intro Class <span aria-hidden="true">↗</span></a>
  </nav>
  <div class="reading-progress" aria-hidden="true"></div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <a class="footer-mark" href="/" aria-label="Ralph Gracie San Ramon home"><img src="/img/badge-256.webp" alt="" width="256" height="259"></a>
  <p class="site-footer__nap">
    <strong>${site.name}</strong>
    <a href="${site.mapsUrl}" target="_blank" rel="noopener">${a.street}, ${a.city}, ${a.region} ${a.zip}</a>
    <a href="${site.phoneHref}">${site.phone}</a>
    ${instagramLink('icon-link icon-link--small')}
  </p>
  <p><a href="/privacy-policy">Privacy Policy</a></p>
</footer>`;
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: site.name,
  url: site.url,
  image: `${site.url}/img/og-image.jpg`,
  logo: `${site.url}/img/badge-512.webp`,
  telephone: '+1-925-989-5686',
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: a.street,
    addressLocality: a.city,
    addressRegion: a.region,
    postalCode: a.zip,
    addressCountry: 'US',
  },
  sameAs: [site.instagram],
  description: 'Brazilian Jiu Jitsu, No Gi, Muay Thai, MMA and Strength & Conditioning classes for adults and kids in San Ramon, CA.',
};

export function page({ path, title, description, body, bodyClass = '', extraHead = '' }) {
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`;
  const canonical = `${site.url}${path === '/' ? '/' : path}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${path === '/404' ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#000000">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@300;400;500;600&family=Open+Sans:wdth,wght@75,300;75,700&family=Oswald:wght@200&display=swap">
<link rel="stylesheet" href="/css/site.css?v=20261028-widget1">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${extraHead}
</head>
<body class="${bodyClass} page-${path === '/' ? 'home' : path.slice(1)}">
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/js/site.js?v=20261028-widget1" defer></script>
<div
  id="wiil-widget"
  data-config-id="DuTviGMDRbWzWY1hL5IK"
  data-features="chat,voice"
  data-route-service="north-america"
  data-organization="Ralph Gracie San Ramon"
  data-primary-color="#ac2424"
  data-agent-subtitle="Academy Assistant"
  data-agent-avatar="https://cdn.wiil.io/public/bhrk7IPDOWhW5qw7jT4Q/avatar/DuTviGMDRbWzWY1hL5IK"
  data-size="full"
  data-auto-open="true"
  data-prompt-message="Hey! How Can I Help?"
  data-contact-header-text="Chat with Ralph Gracie San Ramon"
  data-contact-submit-label="Chat with Zoe"
></div>
<script src="https://cdn.wiil.io/public/wiil-widget.js" defer></script>
<script src="/js/booking-widget.js?v=20261028-widget1" defer></script>
</body>
</html>
`;
}
