// Business facts shared by every page. Edit here, then run `npm run build`.

export const site = {
  name: 'Ralph Gracie San Ramon',
  url: 'https://www.ralphgraciesr.com',
  phone: '(925) 989-5686',
  phoneHref: 'tel:+19259895686',
  email: 'ralphgraciesanramon@gmail.com',
  address: {
    street: '2205 San Ramon Valley Blvd. Suite C',
    city: 'San Ramon',
    region: 'CA',
    zip: '94583',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ralph+Gracie+San+Ramon%2C+2205+San+Ramon+Valley+Blvd+Suite+C%2C+San+Ramon%2C+CA+94583',
  instagram: 'https://www.instagram.com/ralphgraciesanramon/',
};

// PushPress plans (booking + checkout live on PushPress, not on this site)
export const booking = {
  adultIntro: 'https://ralphgraciesanramon.pushpress.com/landing/plans/plan_10c67218140247',
  kidsIntro: 'https://ralphgraciesanramon.pushpress.com/landing/plans/plan_242ed741558340',
  dropIn: 'https://ralphgraciesanramon.pushpress.com/landing/plans/plan_6407293cf15d4d',
};

// PushPress Grow contact form ("Contact Us | USA v7.0")
export const contactFormId = 'pdyj9ogNJkSmbjDbIcVx';

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Our Team', href: '/team' },
  { label: 'Classes', href: '/classes' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Intro Class', href: '/intro' },
  { label: 'Drop In', href: '/drop-in' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Events', href: '/events' },
];
