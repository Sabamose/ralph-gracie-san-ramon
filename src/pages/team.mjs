import { img, emblems } from '../layout.mjs';

const team = [
  {
    rank: 'Professor',
    name: 'Marcio Moreira',
    image: 'team-marcio-moreira',
    bio: [
      `Professor Marcio Moreira was born and raised in Rio De Janeiro Brazil, where he started training in Jiu Jitsu at 8 years old. As a child, he trained under Professor Ricardo Delariva, later on he trained under Professor Alexandre "Soca" Freitas, from whom he received his blue belt. After that, he started training under Professor Paulo "Rabico" and Professor Roberto "Gordo" Correa where he earned his purple and brown belts, he then received his black belt at the age of 29 in 2012 from Professor David Vieira who was a black belt under Professor Carlinos Gracie and was teaching under Professor "Gordo" at that time. Professor Marcio has been a part of the Ralph Gracie team since 2017, and has owned and operated Ralph Gracie Pleasanton since 2019. Professor Marcio has had 3 professional fights and 4 amateur fights with a record of 7 wins and 0 losses. During his many years of training he has won multiple titles, some notable ones being:`,
    ],
    titles: [
      'National Team Champion 2006',
      'State Champion 2007',
      'State Champion 2008',
      '2nd place Nationals 2008',
      '3rd Place International Open Rio 2008',
      'State Champion 2009',
      'State Champion 2010',
      '3rd Place World No Gi 2016',
      'First Place Houston Open 2022',
    ],
    titleCols: 2,
  },
  {
    rank: 'Professor',
    name: 'Jake Bohland',
    image: 'team-jake-bohland',
    bio: [
      `Professor Jake Bohland has an extensive background in competitive wrestling. He first started wrestling at 10 years old, and continued throughout middle school, high school and junior college. He later went on to coach both middle school and high school wrestling, where he also gained experience in Specially Abled Education. He trained MMA for 7 years and has been a Brazilian Jiu Jitsu practitioner for 3 years now under Professor Marcio Moreira, in which he rapidly excelled and earned his brown belt due to his previous high level wrestling and MMA background. He has been coaching at Ralph Gracie Pleasanton for a year now, where he has been teaching Jiu Jitsu, No Gi and Muay Thai for both adults and children from ages 3-16. Coach Jake's passion for Jiu Jitsu is contagious for his students and shows in everything he does. During his many years of training in both Jiu Jitsu and wrestling, he has earned many titles, some notable ones are:`,
    ],
    titles: [
      '2013 CACC State Qualifier 5th Place',
      '2013 CACC State Championship competitor',
      "2015 Men's Open Greco-Roman State Championship 5th place",
      '2015 US Open (Greco Roman) competitor',
      '2019 IBJJF No Gi Worlds 2-0-1',
      '1-0 amateur MMA record',
    ],
    titleCols: 2,
  },
  {
    rank: 'Professor',
    name: 'Jorge Baraibar',
    image: 'team-jorge-baraibar',
    bio: [
      `Born and raised in Lima, Peru, Professor Jorge began his martial arts journey with Japanese karate as a child. After moving to the United States in the 1980s, he continued his training at Castro’s Kempo Karate. His passion for striking arts led him to Muay Thai, which he pursued for 15 years at Fairtex in San Francisco.`,
      `In 2005, Professor Jorge transitioned to Brazilian Jiu-Jitsu, training at various academies until earning his black belt in 2021 from Marcio Moreira and Ralph Gracie, through the Ralph Gracie Academy in Pleasanton. Since then, he has been actively involved in teaching, contributing to classes at both Ralph Gracie Pleasanton and San Ramon. He has also helped grow and build the Pleasanton and San Ramon academies.`,
      `Professor Jorge competed in a few small tournaments and proudly earned a gold medal in the 2012 American Tournament. He currently serves as a professor at the San Ramon location, continuing to share his experience and passion for the art.`,
    ],
  },
  {
    rank: 'Coach',
    name: 'Carlos Roa',
    image: 'team-carlos-roa',
    bio: [
      `Coach Carlos Roa was born and raised in Caracas, Venezuela, where he developed a passion for sports, excelling in swimming and baseball. Throughout his early years, he competed in local, national, and international tournaments, with baseball being his primary focus. In 2021, he decided to explore Brazilian Jiu-Jitsu and immediately developed a deep appreciation for the sport, its community, and the discipline it instills.`,
      `Since 2023, Coach Carlos has been a dedicated member of the Ralph Gracie team and is now a co-owner of the Ralph Gracie Pleasanton and Ralph Gracie San Ramon academies. Under the guidance of Professor Marcio, he was awarded his purple belt in October 2024.`,
      `Throughout his Jiu-Jitsu journey, Coach Carlos has achieved significant competitive success, earning multiple titles, including:`,
    ],
    titles: [
      '2nd Place – San Jose Spring International Open IBJJF Jiu-Jitsu Championship 2024 (Blue Belt GI)',
      '2nd Place – Austin Summer International Open IBJJF Jiu-Jitsu Championship 2024 (Blue Belt GI)',
      '2nd Place – Phoenix International Open IBJJF Jiu-Jitsu Championship 2024 (Blue Belt GI)',
      '2nd Place – Tampa International Open IBJJF Jiu-Jitsu Championship 2024 (Purple Belt GI)',
      '1st Place – Tampa International Open IBJJF Jiu-Jitsu Championship 2024 (Purple Belt NO GI)',
      '1st Place – San Jose International Open IBJJF Jiu-Jitsu Championship 2025 (Purple Belt NO GI)',
      '1st Place – San Jose International Open IBJJF Jiu-Jitsu Championship 2025 (Purple Belt GI)',
      '2nd Place – San Jose International Open IBJJF Jiu-Jitsu Championship 2025 (Purple Belt NO GI – Open Class)',
      '1st Place – Sacramento International Open IBJJF Jiu Jitsu Championship 2025 (Purple Belt GI)',
      '2nd Place – Sacramento International Open IBJJF Jiu Jitsu Championship 2025 (Purple Belt GI – Open Class)',
    ],
    titleCols: 1,
    after: `Coach Carlos remains committed to continuous improvement in the sport and strives to inspire others through his dedication to training, competition, and community building.`,
  },
  {
    rank: 'Coach',
    name: 'Kristian Go Williams',
    image: 'team-kristian-go-williams',
    bio: [
      `Coach Kristian has had almost a decade of experience in just fitness itself, and almost 5 years in coaching functional fitness. He’s had experience in competitive Olympic weightlifting, even going on to compete in youth nationals. He is also a certified L1 CrossFit Coach, and has been continuously coaching and working hard to make sure everyone who takes his class works hard and works out safely. Coach Kristian believes that if you work hard in your workouts, it’ll make your everyday life easier.`,
    ],
  },
  {
    rank: 'Coach',
    name: 'Christian Alvarado',
    image: 'team-christian-alvarado',
    small: true,
    bio: [
      `Coach Chris, an early adopter of martial arts, began his journey with Kenpo Karate, instilling discipline and technique. In high school, he expanded his skills by competing in wrestling and practicing judo, further deepening his understanding of grappling and body mechanics. However, it was at the age of 15 that he discovered his true passion—Brazilian Jiu Jitsu.`,
      `With nearly a decade of experience, he has honed his skills and joined the esteemed Ralph Gracie team over the past three years, under the guidance of Professor Marcio Moreira. His extensive knowledge of Jiu Jitsu stems from learning from some of the sport’s greatest minds, including renowned martial artist Dave Camarillo and former UFC fighter Marcel Fortuna.`,
      `With experience as both a practitioner and instructor, Coach Chris teaches classes for adults and children, fostering a strong foundation of skills, confidence, perseverance, and respect. Coach Chris’s unwavering passion for Jiu Jitsu is evident in his teaching style. He dedicates himself to the craft, his students, and the growth of the Jiu Jitsu community.`,
    ],
  },
];

const member = (m) => `<article class="coach${m.small ? ' coach--small' : ''}">
  ${img(m.image, { alt: `${m.rank} ${m.name}`, sizes: m.small ? '360px' : '(max-width: 760px) 92vw, 700px', cls: 'coach__photo' })}
  <h2 class="coach__name spaced spaced--md"><span>${m.rank}</span> ${m.name}</h2>
  <div class="coach__bio">
    ${m.bio.map((p) => `<p>${p}</p>`).join('\n    ')}
    ${m.titles ? `<ul class="titles titles--${m.titleCols}">${m.titles.map((t) => `<li>${t}</li>`).join('')}</ul>` : ''}
    ${m.after ? `<p>${m.after}</p>` : ''}
  </div>
</article>`;

export default {
  path: '/team',
  title: 'Our Team',
  description: 'Meet the Ralph Gracie San Ramon team of Professors and coaches.',
  bodyClass: 'bg-black',
  body: `
<section class="page-title page-title--emblems">
  ${emblems('gray')}
  <h1>Meet Our Team</h1>
</section>
<section class="team">
  ${team.map(member).join('\n  ')}
</section>
<div class="closing-band">${img('contact-band', { alt: '' })}</div>
`,
};
