import { hero, startTraining, photoGrid } from '../layout.mjs';

const adultAll = 'unlimited classes at both Ralph Gracie San Ramon and Ralph Gracie Pleasanton including BJJ, No Gi, Muay Thai and Conditioning';
const kidsCore = 'unlimited classes at both Ralph Gracie San Ramon and Ralph Gracie Pleasanton including BJJ, MMA and Muay Thai';
const equipment = 'unlimited access to workout equipment';
const age = 'starts at 3 years old';
const cancel = 'can be cancelled at any time with 30 days notice';

const plans = [
  { name: 'Adult Unlimited 12', sub: '12 month membership', items: [adultAll, equipment, '12 month contract'] },
  { name: 'Adult Unlimited 12 +', sub: '12 month membership that can be cancelled at any time with 30 day notice', items: [adultAll, equipment, cancel] },
  { name: 'Kids Unlimited 12', sub: '12 month membership', items: [age, kidsCore, '12 month contract'] },
  { name: 'Kids Unlimited 12 +', sub: '12 month membership that can be cancelled at any time', items: [age, kidsCore, cancel] },
  { name: 'Kids Unlimited 6', sub: '6 month membership', items: [age, adultAll, equipment, '6 month contract'] },
  { name: 'Kids Unlimited 3', sub: '3 month membership', items: [age, adultAll, equipment, '3 month contract'] },
];

const card = (p) => `<article class="plan">
  <header class="plan__head"><h3>${p.name}</h3><p>${p.sub}</p></header>
  <ul>${p.items.map((i) => `<li>${/contract$/.test(i) ? i.toUpperCase() : i}</li>`).join('')}</ul>
</article>`;

export default {
  path: '/memberships',
  title: 'Memberships',
  description: 'Ralph Gracie San Ramon Brazilian Jiu Jitsu membership options for adults and kids, plus family discounts.',
  body: `
${hero({ image: 'memberships-hero', alt: 'Two students rolling in gis', cls: 'hero--full hero--top', position: '50% 45%', content: '<h1 class="page-heading page-heading--tracked">Memberships</h1>' })}
<div class="rule"></div>
${startTraining()}
<section class="plans">
  <div class="plans__intro">
    <p>We have multiple different membership options to choose from below, please <a href="/contact">contact us</a> if you have any additional questions.</p>
    <div class="discount"><p class="discount__title">Family Discount!</p><p>First member regular price, each member thereafter will receive 10% off of their membership</p></div>
  </div>
  <div class="plans__grid">
    ${plans.map(card).join('\n    ')}
  </div>
</section>
${photoGrid(['memberships-01', 'memberships-02', 'memberships-03', 'memberships-04', 'memberships-05', 'memberships-06'])}
`,
};
