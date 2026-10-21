/**
 * Single source of truth for prototype copy.
 *
 * Everything here traces back to project-docs/swayam-audit/content-inventory.md
 * (the Phase 1 audit of the live site). Rules applied:
 *
 *   - Nothing is invented. No service, credential, statistic, award, rating or
 *     testimonial appears here that was not published on the existing site.
 *   - Claims the audit could not verify carry `verify: '...'` and are rendered
 *     with a visible annotation. They are never presented as established fact.
 *   - Four items from the old site are deliberately NOT carried over:
 *       1. "This program will 100% help you to tackle stress"  (efficacy guarantee)
 *       2. "address and cure these issues"                     (cure claim)
 *       3. The 2006-sourced statistics on blog2.html           (stale, uncited)
 *       4. "Suicidal tendencies are increasing because of a lack of proper
 *          knowledge about how life works"                     (unsafe framing)
 */

export type Verifiable = {
  text: string;
  verify?: string;
};

/* -- Practice ------------------------------------------------------------- */

export const practice = {
  name: 'Swayam Heartcare and Wellness',
  shortName: 'Swayam',
  addressLines: [
    '4th Floor, Dhouchak Complex',
    'opposite Choturam Polytechnic',
    'Model Town, Rohtak',
    'Haryana 124001',
  ],
  addressVerify: 'Confirm spelling of "Dhouchak" and that the address is current',
  phoneDisplay: '+91 95887 39904',
  phoneHref: 'tel:+919588739904',
  email: 'swayamheartcare@gmail.com',
  emailVerify: 'Client may prefer a domain address, e.g. contact@swayamheartcare.com',
  /**
   * Deliberately absent, because the existing site publishes none of it and the
   * brief forbids inventing any of it. Each is a designed gap, not an oversight.
   */
  missing: {
    hours: 'Opening hours are not published anywhere on the existing site',
    map: 'No map, pin or written directions exist on the existing site',
    whatsapp: 'Unconfirmed whether this number is on WhatsApp',
  },
};

/* -- Navigation ----------------------------------------------------------- */

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'For Organisations', href: '#organisations', provisional: true },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

/* -- Hero ----------------------------------------------------------------- */

export const hero = {
  eyebrow: 'Preventive cardiology · Rohtak',
  eyebrowVerify: 'Confirm how Dr. Sharma wishes the practice described',
  /**
   * The old headline ("Transform the way you think about your heart, its health
   * and your lifestyle") is 14 words and says nothing concrete. This is shorter
   * and states what the practice does — but the final wording is the client's
   * call (open-questions.md Q4), so it is marked for approval.
   */
  headline: 'Care for your heart,\nand the life around it.',
  headlineVerify: 'Headline wording to be approved by the client — Q4',
  lead:
    'Swayam combines cardiac expertise with stress management, meditation, diet and exercise, so you can understand your own body and look after it with confidence.',
  credentials: [
    { value: '20+', label: 'years in practice', verify: 'Figure dates from 2020 copy — confirm current' },
    { value: 'PG', label: 'Chest Medicine, Mumbai', verify: 'Confirm exact qualification — MD / DTCD / DNB' },
    { value: 'Fellowship', label: 'Cardiac Rehabilitation', verify: 'Confirm exact fellowship title and institution' },
    { value: 'Rohtak', label: 'Model Town clinic', verify: 'Confirm clinic address is current' },
  ],
};

/* -- Why Swayam ------------------------------------------------------------
   Source: the "Why Swayam?" paragraph on index.html, broken into three
   propositions. The original's "address and cure these issues" is rewritten as
   "work through" — a cure claim about psychological conditions must not ship.  */

export const why = {
  eyebrow: 'Why Swayam',
  heading: 'The name means “self”. That is the whole idea.',
  lead:
    'To stay healthy and active you need to understand yourself and your body. Swayam sets you on a path to do that — so you can prevent what is preventable, recover well from what is not, and keep going on your own.',
  points: [
    {
      n: '01',
      title: 'Understand your own body',
      body: 'Practical, scientific knowledge about how your heart, your diet and your stress actually interact — taught so you can apply it, not memorise it.',
    },
    {
      n: '02',
      title: 'Recover with a structured plan',
      body: 'People with a history of heart disease need specific changes to everyday life. We set those out clearly and stay with you while they become routine.',
    },
    {
      n: '03',
      title: 'Treat the mind alongside the heart',
      body: 'Psychological strain can weigh as heavily as a physical problem. Counselling sessions help you work through it rather than carry it.',
    },
  ],
};

/* -- Doctor ----------------------------------------------------------------
   Source: about.html "About the Founders". Credentials are split out of the
   original run-on paragraph so facts are scannable and philosophy stays prose. */

export const doctor = {
  name: 'Dr. Rajeev Sharma',
  role: 'Founder & Director',
  discipline: 'Chest Physician · Cardiac Rehabilitation',
  disciplineVerify:
    'Confirm the correct description — the site uses both "cardiac rehabilitation expert and a chest physician" and the "Heartcare" brand name',
  pullQuote:
    'His life is more useful if he can serve humanity — putting his knowledge and energy towards the betterment of as many people as possible.',
  pullQuoteNote: 'Paraphrased from the existing About page; to be approved or replaced with his own words',
  bio: [
    'Dr. Rajeev Sharma founded Swayam on a simple conviction: that most of what damages the heart is understood far too late, and that people given the right knowledge early will act on it themselves.',
    'As a practising physician he focuses on the wellbeing of the whole person — not only the condition that brought them through the door.',
  ],
  bioNote: 'Condensed from the published biography; wording subject to his approval',
  qualifications: [
    { text: 'D.Y. Patil Medical College and University', note: 'Confirm degree abbreviation — MBBS?' },
    { text: 'PG, Chest Medicine — Mumbai', note: 'Confirm exact qualification: MD / DTCD / DNB' },
    { text: 'Fellowship, Cardiac Rehabilitation — Apollo Hospital', note: 'Published as "Appollo"; confirm spelling and exact title' },
    { text: 'Certified Happiness & Life Coach', note: 'Published alongside "many other certifications" — name them or drop that phrase' },
  ],
  career: [
    { place: 'ESIS Hospital', where: 'Mumbai' },
    { place: 'SAAOL Heart Centre', where: 'New Delhi' },
    { place: 'GE (Genpact)', where: 'Gurgaon' },
    { place: 'RCH — Medical Officer', where: 'Rohtak' },
    { place: 'MDU Health Centre — Senior Consultant', where: 'Rohtak', current: true, note: 'Stated in 2020 copy — confirm still current' },
  ],
  experienceNote: 'Published as "about over 20 years" in 2020 — confirm the current figure',
};

/* -- Services --------------------------------------------------------------
   Source: program.html, all seven, descriptions condensed but not embellished.
   No treatment, capability or clinical detail has been added.                 */

export const services = [
  {
    n: '01',
    name: 'Preventive Cardiology & Cardiac Rehabilitation',
    body: 'Lowering the risk of heart disease, heart attack and stroke — and, for people who already have cardiovascular disease, a customised programme of exercise and education to recover function after a cardiac event or surgery.',
  },
  {
    n: '02',
    name: 'Stress Management',
    body: 'A set of techniques and strategies you can choose from, aimed at a balanced life with room for work, relationships and rest — and the resilience to meet pressure when it comes.',
  },
  {
    n: '03',
    name: 'Yoga and Exercise',
    body: 'Work on flexibility, muscle strength and tone, respiration, energy, metabolism, weight and circulatory health — built to fit into an ordinary week.',
  },
  {
    n: '04',
    name: 'Diet Modification',
    body: 'Practical guidance on cholesterol and triglycerides, and on how different foods affect you. With the right knowledge you can still eat what you enjoy, prepared differently.',
  },
  {
    n: '05',
    name: 'Meditation',
    body: 'Training in attention and concentration — reading situations more clearly, deciding better, and staying alert to what is going on around you.',
  },
  {
    n: '06',
    name: 'Counselling',
    body: 'One-to-one counselling and consultation covering mental, physical and spiritual health, with the time to work through things individually.',
  },
  {
    n: '07',
    name: 'Physiotherapy',
    body: 'Restoring movement and function in the affected area, supporting recovery and helping prevent further injury through physical methods.',
  },
];

export const servicesNote =
  'Format, session length, and who delivers each service are not published on the existing site — confirm before production (Q5)';

/* Source: program.html "You will benefit if-", rewritten for consistent grammar. */
export const benefitFrom = [
  'You live with high levels of stress',
  'You have high blood pressure',
  'You are diabetic',
  'You are dealing with anxiety or depression',
  'You have been diagnosed with heart disease',
  'Your work is demanding and sedentary',
];

/* -- Testimonials ----------------------------------------------------------
   Source: testimonials.html, verbatim. All eight exist; four are shown here.
   NONE of these may be published until written consent is confirmed (Q16) —
   the attributions name real people and real organisations.                  */

export const testimonials = {
  lead: {
    quote:
      'The sessions by Dr Rajeev Sharma were very enlightening and an eye opener. It was very beneficial in understanding and tackling everyday stresses. If it is followed in day to day practice it will be very helpful in reducing the risk for heart disease.',
    name: 'Dr. Aparna',
    detail: 'Professor, PGIMS, Rohtak',
  },
  rest: [
    {
      quote:
        'Our lives are so stressful. Even the food habits are not regular. Dr Rajeev gave us a great input where exactly to focus. Even with this busy schedule we can turn on to full achievements in all areas of life. Life changing experience.',
      name: 'Indian Medical Association',
      detail: 'Rohtak branch',
    },
    {
      quote:
        'Excellent program. Very much needed, approaches for a happy stressful lives which can be easily applied. Am already feeling the change.',
      name: 'Dr. Paramjeet Gill',
      detail: 'Associate Professor, PGIMS, Rohtak',
    },
    {
      quote:
        'This is a very useful program for teachers. It also focuses on avoiding and solving conflicts in office. Time management is made so easy. It should be done in all schools.',
      name: 'Indus Public School',
      detail: 'Rohtak',
    },
  ],
  total: 8,
  consentWarning:
    'Published on the existing site, reproduced here verbatim. Written consent from each named individual and organisation must be confirmed before these appear on a production site (Q16).',
};

/* -- Organisations ---------------------------------------------------------
   Source: the "What we do?" paragraph on about.html. Provisional in full:
   the audit inferred this is an active business line; the client has not yet
   confirmed it (Q1). No workshop format, duration, outcome or client
   relationship has been invented.                                            */

export const organisations = {
  eyebrow: 'For organisations',
  heading: 'Swayam also runs workshops for groups.',
  body:
    'The published description says Swayam conducts workshop training covering the non-invasive side of preventing heart disease and related conditions — hypertension, diabetes, obesity — alongside stress management, diet, exercise and meditation, in a form people can actually keep up afterwards.',
  audiences: ['Corporates', 'Hospitals', 'Schools', 'Housing societies'],
  followUp: 'Attendees can arrange consultation and counselling with Dr. Sharma after the programme.',
  provisionalNote:
    'This entire section is provisional. The audit found that 7 of the 8 published testimonials describe group sessions, which suggests workshops are a significant part of the practice — but the client has not yet confirmed the offering is still active (Q1). The section is built to be removed or adapted in one edit.',
};

/* -- Callback form ---------------------------------------------------------
   Matches the model the client's own FAQ describes: "We will call you back to
   book an appointment for you." The form is a DESIGN PROTOTYPE — it is inert,
   transmits nothing, and says so.                                            */

export const form = {
  heading: 'Request a call back',
  lead: 'Leave your number and we will call you to arrange a time. Tell us roughly what you need and we can put you with the right person.',
  reasons: [
    'A consultation',
    'Cardiac rehabilitation',
    'Stress & counselling',
    'Diet & nutrition',
    'A workshop for my organisation',
    'Something else',
  ],
  times: ['Morning', 'Afternoon', 'Evening'],
  prototypeNotice:
    'Design prototype — this form does not send anything. No details are stored or transmitted. Delivery will be wired up once the client confirms where enquiries should go.',
};
