import { site } from '../site.mjs';
import { startTraining, photoGrid } from '../layout.mjs';
import { brandHero } from './home.mjs';

export default {
  path: '/intro',
  title: 'Free Intro Class',
  description:
    'Try a complimentary intro class at Ralph Gracie San Ramon. Brazilian Jiu Jitsu, No Gi and Muay Thai for adults and kids from 3 years old.',
  body: `
${brandHero('intro-hero', 'Two Ralph Gracie students drilling on the mat', '50% 40%')}
<div class="rule"></div>
${startTraining({
  lead: `<p class="band__lead">Here at Ralph Gracie San Ramon, we offer Brazilian Jiu Jitsu, No Gi, and Muay Thai classes. We have classes for adults and for children, starting at 3 years old. We would love to invite you to come in and try a complimentary intro class, so that you can get to know our team and see first hand what it is that we offer. If you have any additional questions, please feel free to reach out via call or text at <a href="${site.phoneHref}">${site.phone}</a>.</p>`,
})}
${photoGrid(['intro-01', 'gallery-03', 'intro-03', 'gallery-02', 'event-womens-self-defense', 'gallery-06'])}
`,
};
