import { booking } from '../site.mjs';
import { ext } from '../layout.mjs';

export default {
  path: '/404',
  file: '404.html',
  title: 'Page Not Found',
  description: 'This page could not be found.',
  bodyClass: 'bg-black',
  body: `
<section class="statement statement--black not-found">
  <h1 class="page-heading page-heading--md">Page Not Found</h1>
  <p>The page you were looking for has moved. Try one of these instead:</p>
  <div class="btn-row">
    <a class="btn btn--sm" href="/">Home</a>
    <a class="btn btn--sm" href="/schedule">Schedule</a>
    ${ext(booking.adultIntro, 'Book an Intro', 'btn btn--sm')}
  </div>
</section>
`,
};
