import { site, contactFormId } from '../site.mjs';
import { hero, emblems, instagramLink, addressLines } from '../layout.mjs';

export default {
  path: '/contact',
  title: 'Contact Us',
  description:
    'Questions about classes, memberships or getting started with Jiu Jitsu? Contact Ralph Gracie San Ramon to schedule a free trial.',
  body: `
${hero({ image: 'class-bjj', alt: 'Black belt drilling with a student', cls: 'hero--short', position: '50% 28%', content: '<h1 class="page-heading page-heading--md">Contact Us Today</h1>' })}
<section class="statement statement--body">
  <p>Have questions about classes, memberships, or getting started with Jiu Jitsu? We’re here to help! Whether you're brand new to the sport, looking for a place for your child to train, or an experienced grappler, our team is happy to guide you.</p>
  <p>Reach out to schedule a free trial, learn more about our programs, or see what makes our academy unique. We’re proud to offer a supportive, high-level environment for students of all ages. Let’s start your Jiu Jitsu journey!</p>
</section>
<section class="band band--gray band--emblems band--inset band--contact">
  ${emblems('black')}
  <div class="contact-grid">
    <div class="contact-form">
      <!-- PushPress Grow form "Contact Us | USA v7.0". Fixed height on purpose: their form_embed.js auto-resize loops inline. -->
      <iframe src="https://api.grow.pushpress.com/widget/form/${contactFormId}" id="inline-${contactFormId}" title="Contact Us form"></iframe>
    </div>
    <div class="contact-info">
      <h2>Ralph Gracie San Ramon</h2>
      <p><a href="${site.mapsUrl}" target="_blank" rel="noopener">${addressLines}</a></p>
      <p class="spaced spaced--sm">Phone</p>
      <p><a href="${site.phoneHref}">${site.phone}</a> <span class="muted">(call or text)</span></p>
      <p class="spaced spaced--sm">Email</p>
      <p><a href="mailto:${site.email}">${site.email}</a></p>
      ${instagramLink()}
      <iframe class="contact-map" title="Map to Ralph Gracie San Ramon" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=2205+San+Ramon+Valley+Blvd+Suite+C,+San+Ramon,+CA+94583&amp;output=embed"></iframe>
    </div>
  </div>
</section>
`,
};
