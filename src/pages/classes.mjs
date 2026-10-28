import { hero, img } from '../layout.mjs';

export const classes = [
  {
    title: 'Brazilian Jiu Jitsu',
    image: 'class-bjj',
    alt: 'Two students drilling Brazilian Jiu Jitsu in gis',
    text: `Brazilian Jiu Jitsu is a predominantly ground-based martial art, using the principles of leverage, angles, pressure and timing, as well as knowledge of the human anatomy, in order to achieve a submission of one's opponent. Unlike other martial arts that focus on strikes and/or kicks, jiu jitsu focuses on close-contact "grappling" holds and techniques, and the application of chokes and joint-manipulations.`,
  },
  {
    title: 'No Gi Jiu Jitsu',
    image: 'class-no-gi',
    alt: 'No Gi Jiu Jitsu sparring on the mats',
    text: `In No Gi Jiu-Jitsu, you don't wear the traditional uniform. Instead, you wear shorts and a t-shirt or rash guard. In the No Gi form of BJJ, you can't grab your opponent's clothing to increase leverage. In No Gi, there are more wrestling-based grips such as collar ties, wrist grabs and joint controls. Not surprisingly, it is harder to control an opponent without the Gi as they can slip or power out of many controls, especially when slippery from sweat. As a result of having less ability to control your opponent with grips, No Gi Jiu-Jitsu is a faster-paced form of grappling.`,
  },
  {
    title: 'Muay Thai',
    image: 'class-muay-thai',
    alt: 'Ralph Gracie San Ramon Muay Thai group',
    text: `Other than variations of punches as seen in western boxing (e.g. jabs, crosses, hooks, uppercuts), kicks, elbows and knee strikes are used in Muay Thai. Clinching, sweeps and throws are also used strategically in modern Muay Thai to make it an all-rounded combat art. Due to the 8-point contact, the sport has proven to be one of the most effective stand-up striking arts and is practised by many mixed martial artists.`,
  },
  {
    title: "Kids' Classes",
    image: 'class-kids',
    ratio: '501 / 650',
    alt: 'Kids training Jiu Jitsu with a coach',
    text: `Here at Ralph Gracie San Ramon, we are proud to offer Brazilian Jiu Jitsu classes for all kids ages 3-16. Our 3-6 year olds get to have a fun experience learning their fundamentals throughout all classes, while they are also still learning how to listen, follow instructions, be respectful to others, and build confidence. These are lessons that follow through to our 7-10 year old classes, where they will be gaining a more in depth knowledge of the arts, and learn how to be able to stand up for themselves and others in a respectful manner. At this age, some students decide that they might want to participate in Jiu Jitsu competitions. We are always excited to give those who are interested in competing, an extra push to help get them ready and fully prepared. However, we also understand that not every child is interested in competing, and may not respond to that same type of "push". Therefore each student will get the same amount of attention, whether they are competitors or not, and will be helped to succeed in the way that makes them strive as an individual.`,
  },
  {
    title: 'Strength and Conditioning',
    image: 'class-strength',
    ratio: '501 / 459',
    alt: 'Strength and conditioning training',
    text: `Our strength and conditioning classes are made up of multiple different exercises that target all parts of the body to help you both in your Jiu Jitsu and Muay Thai training as well as your daily life. We use free weights, kettle bells and body weight as well as circuit training exercises and stretches. These exercises will help you build the strength you need, help you prevent injuries and even help tone and shape your body in the meantime.`,
  },
];

const row = (c, i) => `<article id="class-${i + 1}" class="class-row${i % 2 ? ' class-row--flip' : ''}"${c.ratio ? ` style="--ratio: ${c.ratio}"` : ''}>
  <div class="class-row__media">${img(c.image, { alt: c.alt, sizes: '(max-width: 760px) 92vw, 480px' })}</div>
  <div class="class-row__text">
    <p class="class-row__num">${String(i + 1).padStart(2, '0')}</p>
    <h2>${c.title}</h2>
    <p>${c.text}</p>
  </div>
</article>`;

export default {
  path: '/classes',
  title: 'Classes',
  description:
    'Brazilian Jiu Jitsu, No Gi, Muay Thai, kids classes and Strength & Conditioning at Ralph Gracie San Ramon.',
  body: `
${hero({ image: 'classes-hero', alt: 'Students training Jiu Jitsu at Ralph Gracie San Ramon', cls: 'hero--tall hero--bottom-left', position: '50% 40%', content: '<h1 class="page-heading">Our Classes</h1>' })}
<div class="rule"></div>
<section class="classes">
  <img class="laurel laurel--left" src="/img/emblem-440.webp" alt="" width="440" height="412" loading="lazy" aria-hidden="true">
  <img class="laurel laurel--right" src="/img/emblem-440.webp" alt="" width="440" height="412" loading="lazy" aria-hidden="true">
  ${classes.map(row).join('\n  ')}
  <p class="classes__note">New to Jiu Jitsu? Try our <a href="/beginners-course">5 week adult beginner's course</a>.</p>
  <div class="classes__group">${img('classes-kids-group', { alt: 'Ralph Gracie San Ramon kids class with their coaches', sizes: '(max-width: 760px) 92vw, 760px' })}</div>
</section>
`,
};
