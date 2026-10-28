import { site } from '../site.mjs';
import { classes } from './classes.mjs';
import { hero, img, startTraining, photoGrid, instagramLink, addressLines } from '../layout.mjs';

export const brandHero = (image, alt, position, scrollTarget = '') =>
  hero({
    image,
    alt,
    position,
    cls: 'hero--full',
    slides: scrollTarget ? [
      {image:'classes-hero',alt:'Students training Jiu Jitsu at Ralph Gracie San Ramon',position:'50% 40%'},
      {image:'home-duo-1',alt:'Ralph Gracie San Ramon coaches after training',position:'50% 38%'},
    ] : [],
    content: `<h1 class="brand-title">
      <span class="brand-title__name"><span class="brand-line">Ralph</span> <span class="brand-line">Gracie</span></span>
      <span class="brand-title__city">San Ramon, CA</span>
    </h1>
    <p class="brand-title__tag">Training With World Champions</p>
    ${scrollTarget ? `<a class="hero-scroll" href="${scrollTarget}" aria-label="Explore the academy"><span aria-hidden="true">↓</span></a>` : ''}`,
  });

export default {
  path: '/',
  title: 'Ralph Gracie San Ramon | Brazilian Jiu Jitsu, Muay Thai & MMA in San Ramon, CA',
  description:
    'Ralph Gracie San Ramon offers Brazilian Jiu Jitsu, No Gi, MMA and Muay Thai for adults and children. Book a complimentary intro class today.',
  body: `
${brandHero('home-hero', 'Smiling Ralph Gracie San Ramon student in a blue gi', '55% 30%', '#academy')}
<div class="rule"></div>
${startTraining()}

<section class="image-text" id="academy">
  ${img('home-about', { alt: 'Students learning Jiu Jitsu at Ralph Gracie San Ramon', cls: 'image-text__bg' })}
  <div class="image-text__content" data-reveal>
    <p class="academy-statement">At Ralph Gracie San Ramon, we are dedicated to serving our community through teaching martial arts and life skills. We believe in cultivating strong, confident, focused and respectful individuals that empower themselves and others.</p>
    <p>Join us today for a complimentary 3 day trial class and experience our classes, culture, and what it is to be a part of our family. Our classes take place throughout an open schedule, so there is time for everyone.<br>
    <a href="/contact">Contact us</a> today to learn more!</p>
  </div>
</section>

<div class="rule"></div>
<section class="photo-duo">
  ${img('home-duo-1', { alt: 'Ralph Gracie San Ramon coaches after training', sizes: '(max-width: 700px) 100vw, 50vw' })}
  ${img('home-duo-2', { alt: 'Coach helping a student on the mat', sizes: '(max-width: 700px) 100vw, 50vw' })}
</section>
<div class="rule"></div>
<section class="programs" id="programs" aria-labelledby="programs-heading">
  <div class="program-stage">
  <div class="section-heading"><h2 id="programs-heading">Our Classes</h2><a href="/classes" class="text-link">Classes <span aria-hidden="true">↗</span></a></div>
  <div class="program-track" tabindex="0" role="region" aria-label="Classes; scroll horizontally to explore">
    ${classes.map((c, i) => `<a class="program-card" href="/classes#class-${i+1}">
      ${img(c.image, {alt: c.alt, sizes: '(max-width: 700px) 78vw, 390px'})}
      <div class="program-card__caption"><h3>${c.title}</h3><span aria-hidden="true">↗</span></div>
    </a>`).join('')}
  </div>
  <div class="program-controls" hidden><div class="program-progress" aria-hidden="true"><span></span></div><button type="button" class="program-prev" aria-label="Previous classes">←</button><button type="button" class="program-next" aria-label="Next classes">→</button></div>
  </div>
</section>
<section class="gallery-reel" aria-label="Training at Ralph Gracie San Ramon">
  <div class="gallery-heading"><p>Training With<br><span>World Champions</span></p><div class="gallery-controls" hidden><button type="button" class="gallery-prev" aria-label="Previous training photos">←</button><button type="button" class="gallery-next" aria-label="Next training photos">→</button></div></div>
  ${photoGrid(['gallery-01', 'gallery-02', 'gallery-03', 'gallery-04', 'gallery-05', 'gallery-06'])}
</section>

<section class="contact-block">
  ${img('contact-band', { alt: '', cls: 'contact-block__bg' })}
  <div class="contact-block__card">
    <p class="spaced spaced--lg">Ralph Gracie</p>
    <p class="spaced spaced--md">MMBJJ</p>
    ${instagramLink()}
    <h2 class="contact-block__name">Ralph Gracie San Ramon</h2>
    <p class="contact-block__address"><a href="${site.mapsUrl}" target="_blank" rel="noopener">${addressLines}</a></p>
    <p class="spaced spaced--sm">Phone</p>
    <p class="contact-block__phone"><a href="${site.phoneHref}">${site.phone}</a></p>
  </div>
</section>
`,
};
