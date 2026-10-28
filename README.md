# Ralph Gracie San Ramon

Source for https://ralph-gracie-san-ramon.vercel.app/.

Static site generated with Node.js ES modules. Includes the academy's copy,
photographs, responsive layouts, scroll animations, photo carousels, and the
WIIL chat and voice widget.

## Local development

Requires Node.js 20 or later. The build has no package dependencies.

```sh
git clone https://github.com/Sabamose/ralph-gracie-san-ramon.git
cd ralph-gracie-san-ramon
npm run build
npm run dev
```

The development server opens at http://localhost:4321. It serves the generated
`public/` directory; run the build again after editing source files. The `dev`
command uses `npx` to run the pinned `serve` package and may download it on the
first run.

## Editing

- `src/pages/`: page copy and layouts (11 pages plus a 404 page).
- `src/layout.mjs`: shared page shell, navigation, footer, booking buttons, and widget embed.
- `src/site.mjs`: business information, navigation, and original booking URLs.
- `src/images.json`: image dimensions and available responsive variants.
- `static/img/`: committed academy photos, logos, and other image assets.
- `static/css/site.css`: styles and responsive layouts.
- `static/js/site.js`: navigation, carousels, and scroll effects.
- `static/js/booking-widget.js`: booking-button integration with WIIL.
- `build.mjs`: generates `public/`, sitemap, and robots.txt.

`public/` is build output and is intentionally excluded from Git. Original
image files already in the asset set remain available. The coaches photograph
also has a full-resolution 1813-pixel variant. Two hero originals are limited
to 1024 pixels; higher-resolution versions would need new source photographs.

## WIIL widget

The shared layout loads `https://cdn.wiil.io/public/wiil-widget.js` on every page,
with configuration ID `DuTviGMDRbWzWY1hL5IK`, chat and voice enabled, and the
user-requested auto-open behavior. The configuration ID is a public embed
identifier, not a server credential. No server secrets are required to build.

Adult intro, kids intro, drop-in, and the prominent header intro link use
`data-wiil-open`. `booking-widget.js` initializes the widget and calls the
instance's `open()` method. Original URLs remain as a fallback if the widget
cannot load. Modified clicks retain normal browser link behavior. Clicking a
booking button opens the widget; it does not itself submit a message or create
a reservation.

## Vercel deployment

Use the existing Vercel project **ralph-gracie-san-ramon**.

- Framework preset: Other.
- Build command: `node build.mjs`.
- Output directory: `public`.
- `vercel.json` preserves clean URLs, redirects, and cache/security headers.

The live project was deployed directly. Creating this repository does not
automatically connect it to Vercel or enable deployments from Git pushes.
GitHub repository access also does not grant access to the Vercel project.

The canonical domain and sitemap currently use `https://www.ralphgraciesr.com`
from `src/site.mjs`; coordinate any production-domain cutover before changing it.

## Verification

```sh
npm run build
node --check static/js/site.js
node --check static/js/booking-widget.js
```

Before publishing changes, check desktop/mobile navigation, carousels, and
booking links. Close the auto-opened widget, then click each booking button to
confirm it reopens on the same page. Keep the academy's copy and original assets
intact when refining the design.
