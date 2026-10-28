import { hero, img } from '../layout.mjs';

const events = [
  { title: 'Ralph Gracie Seminar', image: 'memberships-01', alt: 'Group photo from a Ralph Gracie seminar' },
  { title: "Women's Self Defense Seminar", image: 'event-womens-self-defense', alt: "Women's self defense seminar" },
  { title: "Kids' Summer Camp", image: 'event-kids-summer-camp', alt: 'Kids training at summer camp' },
];

export default {
  path: '/events',
  title: 'Events',
  description: 'Ralph Gracie San Ramon, CA upcoming special events: seminars, women’s self defense and kids summer camp.',
  body: `
${hero({ image: 'events-hero', alt: 'Two students in blue gis training', cls: 'hero--tall hero--top-left', position: '50% 50%', content: '<h1 class="page-heading">Upcoming<br>Events</h1>' })}
<section class="statement statement--black">
  <h2>Check back here often for any future events!</h2>
</section>
<section class="events">
  ${events
    .map(
      (e) => `<article class="event">
    ${img(e.image, { alt: e.alt, sizes: '(max-width: 760px) 92vw, 400px' })}
    <h3>${e.title}</h3>
  </article>`,
    )
    .join('\n  ')}
</section>
`,
};
