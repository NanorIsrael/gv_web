// Single source of truth for site copy and portfolio data.

export const profile = {
  name: 'Israel Nanor',
  role: 'Senior Full-Stack Engineer',
  brand: 'GV Tech',
  company: 'GraceValley Technologies',
  email: 'israelnanor88@gmail.com',
  photo: '/Israel_Image.png',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/israelnanor1z' },
    { label: 'GitHub', href: 'https://github.com/NanorIsrael' },
    { label: 'Facebook', href: 'https://web.facebook.com/israel.nanor.1/' },
  ],
} as const;

export type Project = {
  id: string;
  name: string;
  url: string;
  img: string;
  category: string;
  summary: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'rw',
    name: 'Ramsey/Washington Food Scraps Pickup',
    url: 'https://foodscrapspickup.com',
    img: 'rwhome',
    category: 'Public sector · E-commerce',
    summary:
      'County-wide e-commerce platform that lets residents of Ramsey & Washington County subscribe to the food scraps pickup program, order their free annual bag supply, and buy additional bags.',
    featured: true,
  },
  {
    id: 'bitsy',
    name: 'bitsy',
    url: 'https://bsy.sh',
    img: 'bsy-link',
    category: 'SaaS platform',
    summary:
      'All-in-one platform to create and manage short links, link-in-bio pages, digital notes and QR codes.',
    featured: true,
  },
  {
    id: 'pricedafom',
    name: 'pricedafom',
    url: 'https://www.pricedafom.com/',
    img: 'pricedafom',
    category: 'E-commerce marketplace',
    summary:
      'Multi-vendor commerce platform where businesses showcase products, manage inventory and take secure payments, while customers browse, search and buy effortlessly.',
    featured: true,
  },
  {
    id: 'photo-genius',
    name: 'Photo Genius',
    url: '',
    img: 'geminichatbot',
    category: 'AI · Gemini API',
    summary: 'Upload a photo and ask any question about it, powered by the Gemini API.',
  },
  {
    id: 'cimoviez',
    name: 'cimoviez',
    url: 'https://nanorisrael.github.io/movie_store/',
    img: 'cimoviez',
    category: 'Personal project',
    summary: 'A movie library with all the information you need about a film.',
  },
  {
    id: 'truhair',
    name: 'TruHair & Beauty',
    url: 'https://animated-sopapillas-60dde9.netlify.app/book-now',
    img: 'truhair',
    category: 'Booking',
    summary:
      'Booking application that lets a beautician serve customers online and offer additional services.',
  },
  {
    id: 'gvfoods',
    name: 'GV Foods',
    url: 'https://dreamy-hermann-e618fe.netlify.app',
    img: 'bistro',
    category: 'Food ordering',
    summary: 'Online food ordering experience for a restaurant brand.',
  },
  {
    id: 'tenzies',
    name: 'Tenzies',
    url: 'https://gifted-einstein-27d727.netlify.app',
    img: 'tenzies',
    category: 'Game',
    summary: 'A browser-based take on the classic Tenzies dice game.',
  },
];

export type Capability = {
  title: string;
  description: string;
  icon: 'layout' | 'server' | 'cloud' | 'cpu' | 'link';
};

export const capabilities: Capability[] = [
  {
    title: 'Frontend engineering',
    description:
      'Fast, accessible interfaces in React and TypeScript, designed for real users and built to scale with the product.',
    icon: 'layout',
  },
  {
    title: 'Backend & APIs',
    description:
      'REST and GraphQL services in Node.js and Python (Django, Flask) backed by PostgreSQL and MongoDB.',
    icon: 'server',
  },
  {
    title: 'DevOps & delivery',
    description:
      'Containerised services, CI/CD pipelines and cloud deployments that keep releases boring and reliable.',
    icon: 'cloud',
  },
  {
    title: 'Machine learning',
    description: 'Applied ML with Python, from data pipelines to model-backed product features.',
    icon: 'cpu',
  },
  {
    title: 'Web3',
    description: 'Smart-contract integrations and wallet-connected experiences.',
    icon: 'link',
  },
];

export const principles = [
  'User experience driven by intuitive design',
  'Performance and seamless functionality',
  'Modern technology for future-proof solutions',
];

export const stack = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Django',
  'Flask',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
];

export const testimonials = [
  {
    quote: 'Israel Nanor is truly exceptional and innovative.',
    name: 'Adam Eukuilkruit',
    role: 'Principal Software Engineer',
    company: 'Compoze Labs',
    img: '/images/testimonials/adam.jpeg',
  },
  {
    quote: "Israel's problem-solving skills are unmatched.",
    name: 'Timothy Foster',
    role: 'Senior Software Engineer',
    company: 'Compoze Labs',
    img: '/images/testimonials/timothy.jpeg',
  },
  {
    quote: 'I highly recommend Israel for any software development project.',
    name: 'Chris Borgen',
    role: 'Senior Software Engineer',
    company: 'Compoze Labs',
    img: '/images/testimonials/chris.jpeg',
  },
];
