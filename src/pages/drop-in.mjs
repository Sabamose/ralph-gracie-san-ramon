import { booking } from '../site.mjs';
import { img, emblems, ext } from '../layout.mjs';

export default {
  path: '/drop-in',
  title: 'Drop In',
  description:
    'Visiting San Ramon or training nearby? Drop in for a class at Ralph Gracie San Ramon. Book your drop in session online.',
  body: `
<section class="feature-image">${img('class-bjj', { alt: 'Black belt drilling with a student in a blue gi', eager: true })}</section>
<section class="statement">
  <h1>In town for a short period, or train nearby and just want to check us out?<br>Come and drop in any time!</h1>
</section>
<section class="band band--gray band--emblems band--inset band--compact">
  ${emblems('black')}
  <div class="band__inner">
    <h2 class="band__title">Visit Us Today</h2>
    ${ext(booking.dropIn, 'Book a Drop In Class')}
  </div>
</section>
<section class="prose prose--center">
  <p>Our drop in classes are intended for those who already train but might be visiting from out of town, might have a friend who trains with us and wants to join them for a class, might be looking for a new academy, or might simply just want to check us out and have some different rolling partners for a day! Whatever your reason is for dropping in, we are happy to have you and are looking forward to meeting you.</p>
  <p>You can purchase your drop in session at the link above, or if you are planning on dropping in more often, <a href="/contact">contact us</a> for our 12 class punch card option, which is valid for 3 months.</p>
</section>
`,
};
