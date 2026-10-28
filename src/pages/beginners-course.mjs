import { img } from '../layout.mjs';

export default {
  path: '/beginners-course',
  title: "Beginner's Course",
  description: 'Join our 5 week adult Brazilian Jiu Jitsu beginners course at Ralph Gracie San Ramon.',
  body: `
<section class="split-intro">
  <div class="split-intro__media">${img('gallery-06', { alt: 'Professor tying a belt for a student', eager: true, sizes: '(max-width: 760px) 92vw, 560px' })}</div>
  <div class="split-intro__title">
    <img src="/img/emblem-440.webp" alt="" width="440" height="412" class="split-intro__emblem" aria-hidden="true">
    <h1>5 Week Adult Beginner's Course</h1>
  </div>
</section>
<section class="prose prose--black">
  <h2>Beginner's Course</h2>
  <p>Our 5 week adult beginner's course is a 5 week program where you can attend our 2 adult beginner's classes per week. This is a great way for people who have never trained before, to try out our classes, without a long-term commitment, while getting to know others who are also just starting their Jiu Jitsu journey.</p>
  <p><a class="btn btn--sm" href="/contact">Contact Us to Enroll</a></p>
</section>
<section class="wide-photo">${img('beginners-group', { alt: 'Ralph Gracie San Ramon students and coaches', sizes: '(max-width: 760px) 92vw, 1300px' })}</section>
`,
};
