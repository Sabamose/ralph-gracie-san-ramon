import { site } from '../site.mjs';
import { hero } from '../layout.mjs';

// Transcribed from the schedule flyer on the Wix site (wix-export/images/a6419c_e1751762...png).
// Each row: time, kids (shaded) flag, and one entry per day Mon–Sat.
// An entry is '' (no class), a string, [name, ages], or { split: [a, b] } for two classes at once.
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const beginners = { split: ["Adult Beginner's Jiu Jitsu", 'Adult Advanced Jiu Jitsu'] };
const rows = [
  { time: '7:00 AM', cells: ['Adult Jiu Jitsu', '', 'Adult Jiu Jitsu', '', 'Adult Jiu Jitsu', ''] },
  { time: '11:00 AM', cells: ['', '', '', '', '', 'Adult Jiu Jitsu'] },
  { time: '12:00 PM', cells: ['No Gi', '', 'Adult Jiu Jitsu', '', 'No Gi', ''] },
  {
    time: '4:30 PM',
    kids: true,
    cells: [
      ['Kids Jiu Jitsu', '3-6 year olds'],
      ['Kids MMA', '3-6 year olds'],
      ['Kids Jiu Jitsu', '3-6 year olds'],
      ['Muay Thai', '3-6 year olds'],
      ['Kids Jiu Jitsu', '3-6 year olds'],
      '',
    ],
  },
  {
    time: '5:00 PM',
    kids: true,
    cells: [
      ['Kids Jiu Jitsu', '7-10 year olds'],
      ['Kids MMA', '7-10 year olds'],
      ['Kids Jiu Jitsu', '7-10 year olds'],
      ['Muay Thai', '7-16 year olds'],
      ['Kids Jiu Jitsu', '7-10 year olds'],
      '',
    ],
  },
  {
    time: '5:45 PM',
    kids: true,
    cells: [
      ['Teen Jiu Jitsu', '11-16 year olds'],
      ['Teen MMA', '11-16 year olds'],
      ['Teen Jiu Jitsu', '11-16 year olds'],
      ['Jiu Jitsu', '7-16 year olds'],
      ['Teen Jiu Jitsu', '11-16 year olds'],
      '',
    ],
  },
  { time: '6:30 PM', cells: ['Adult Jiu Jitsu', beginners, 'No Gi', beginners, 'Open Mat', ''] },
  { time: '7:30 PM', cells: ['', 'Muay Thai', '', 'Muay Thai', '', ''] },
];

const cellHtml = (c) => {
  if (!c) return '';
  if (typeof c === 'string') return c;
  if (Array.isArray(c)) return `<strong>${c[0]}</strong><small>${c[1]}</small>`;
  return `<span class="split">${c.split.map((s) => `<span>${s}</span>`).join('')}</span>`;
};

const table = `<table class="sched-table">
  <caption class="visually-hidden">Weekly class schedule</caption>
  <thead><tr><th scope="col"><span class="visually-hidden">Time</span></th>${days.map((d) => `<th scope="col">${d}</th>`).join('')}</tr></thead>
  <tbody>
    ${rows
      .map(
        (r) =>
          `<tr${r.kids ? ' class="kids"' : ''}><th scope="row">${r.time.replace(/ (AM|PM)/, '<small> $1</small>')}</th>${r.cells
            .map((c) => `<td>${cellHtml(c)}</td>`)
            .join('')}</tr>`,
      )
      .join('\n    ')}
  </tbody>
</table>`;

// Same data, grouped by day, for phones.
const byDay = `<div class="sched-days">
  ${days
    .map((d, i) => {
      const items = rows.flatMap((r) => {
        const c = r.cells[i];
        if (!c) return [];
        const names = typeof c === 'string' ? [c] : Array.isArray(c) ? [`${c[0]} <small>(${c[1]})</small>`] : c.split;
        return names.map((n) => `<li${r.kids ? ' class="kids"' : ''}><span>${r.time}</span><div class="sched-day__class">${n}</div></li>`);
      });
      return `<section class="sched-day"><h3>${d}</h3><ul>${items.join('')}</ul></section>`;
    })
    .join('\n  ')}
</div>`;

export default {
  path: '/schedule',
  title: 'Schedule',
  description:
    'Weekly class schedule for Ralph Gracie San Ramon: adult Jiu Jitsu, No Gi, Muay Thai, kids and teen Jiu Jitsu and MMA, and open mat.',
  body: `
${hero({ image: 'class-bjj', alt: 'Black belt drilling with a student', cls: 'hero--schedule', position: '50% 30%', content: '<h1 class="page-heading">Schedule</h1>' })}
<section class="sched">
  <div class="sched-card">
    <header class="sched-card__head">
      <img src="/img/badge-256.webp" alt="Ralph Gracie Team San Ramon, CA badge" width="256" height="259" class="sched-card__badge">
      <div class="sched-card__brand">
        <p class="sched-card__name">Ralph Gracie</p>
        <p class="sched-card__sub">Brazilian Jiu Jitsu and Mixed Martial Arts</p>
      </div>
      <address class="sched-card__addr">
        <strong>Professor Marcio Moreira</strong><br>
        2205 San Ramon Valley Blvd.<br>STE C San Ramon, CA 94583
      </address>
    </header>
    <p class="sched-card__intro">Mixed Martial Arts is a beautiful art, that is accessible to anyone, whether you want to learn self-defense, start a new hobby or further your martial arts training. From its strategy and technique lessons to its physical benefit, the more you train, the more you realize that it is more than a martial art - It is a lifestyle. Our program is based on exercises of self-defense, to develop self-confidence, coordination, focus, balance and fitness to help you create a healthy lifestyle.</p>
    <div class="sched-card__body">
      <aside class="sched-card__side">
        <p class="sched-card__call">Call to schedule a free trial class <a href="${site.phoneHref}">925-989-5686</a></p>
        <div class="sched-card__box">
          <p class="sched-card__family">Ask us about our family discounts!</p>
          <ul><li>Brazilian Jiu Jitsu</li><li>Muay Thai</li><li>MMA</li><li>Adults</li><li>Children</li><li>Women</li></ul>
        </div>
      </aside>
      <div class="sched-card__table">${table}${byDay}</div>
    </div>
    <p class="sched-card__print"><a href="/img/schedule-printable-1978.webp" target="_blank" rel="noopener">View the printable schedule</a></p>
  </div>
</section>
<section class="band band--gray band--slim">
  <p class="band__note">Check back often as our schedule grows along with our academy!</p>
</section>
`,
};
