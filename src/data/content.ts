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

export type Experience = {
  role: string;
  company: string;
  location: string;
  /** Display strings, e.g. 'Jul 2025' / 'Present'. */
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
};

// Most recent first. Add earlier roles below in the same shape.
export const experience: Experience[] = [
  {
    role: 'Applications Developer',
    company: 'MojaPay Limited',
    location: 'Accra, Ghana · Hybrid',
    start: 'Jul 2025',
    end: 'Present',
    highlights: [
      'Design, develop and maintain web and mobile applications using React, Next.js, Node.js, Python and Java.',
      'Collaborate with UX/UI designers, backend developers and product managers to deliver seamless user experiences.',
      'Write clean, efficient, well-documented code across the full stack following industry best practices.',
      'Integrate applications with REST APIs, PostgreSQL/MongoDB databases and third-party services, including payment gateways.',
      'Run unit and integration testing, debug across React/Next.js frontends and Node.js/Python/Java backends, and take part in code reviews to keep systems reliable and performant.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
  },
  {
    role: 'Web Software Engineer',
    company: 'Kpentag Digital',
    location: 'Accra, Ghana · Remote',
    start: 'Sep 2024',
    end: 'Jun 2025',
    highlights: [
      'Designed and developed robust Django web applications with a Next.js frontend, focusing on scalable architecture and performance optimization.',
      'Built and documented Django REST APIs with comprehensive authentication, data validation and seamless third-party integrations.',
      'Implemented Django optimization techniques including database indexing, caching strategies and system performance improvements.',
      'Collaborated in an agile environment using Django best practices, code reviews and unit testing to ensure high-quality deliverables.',
    ],
    stack: ['Django', 'Django REST Framework', 'Next.js', 'Python'],
  },
  {
    role: 'Software Engineer',
    company: 'Compoze Labs LLC',
    location: 'Texas, USA · Remote',
    start: 'Mar 2022',
    end: 'Apr 2023',
    highlights: [
      'Designed and developed full-stack web applications using a React frontend and Node.js/Serverless backend services.',
      'Built RESTful APIs with Node.js/Serverless for seamless frontend-backend communication and third-party integrations.',
      'Developed and maintained a microservices architecture with comprehensive testing, monitoring and cloud deployment strategies.',
      'Collaborated in cross-functional agile teams for rapid application development and feature delivery.',
    ],
    stack: ['React', 'Node.js', 'Serverless', 'Microservices'],
  },
  {
    role: 'Software Engineer',
    company: 'Alster Technologies',
    location: 'Minnesota, USA · Remote',
    start: 'Feb 2021',
    end: 'Jul 2022',
    highlights: [
      'Developed full-stack solutions using a React frontend with Node.js REST API backend integration.',
      'Transformed user stories into functional features through close collaboration with technical leadership.',
      'Enhanced code quality through comprehensive code reviews and unit testing.',
      'Built RESTful APIs using Node.js/Express for seamless frontend-backend communication.',
    ],
    stack: ['React', 'Node.js', 'Express'],
  },
  {
    role: 'Software Engineer',
    company: 'Logiciel Ghana Ltd',
    location: 'Accra, Ghana',
    start: 'Apr 2020',
    end: 'Dec 2020',
    highlights: [
      'Developed and maintained web applications using React and Java, focusing on user experience and performance optimization.',
      'Implemented database design strategies using Java persistence (JPA/Hibernate) and PostgreSQL for efficient data management.',
      'Created responsive React frontend interfaces integrated with Java backend services and RESTful endpoints.',
      'Optimized application performance through code refactoring and database query optimization.',
    ],
    stack: ['React', 'Java', 'JPA/Hibernate', 'PostgreSQL'],
  },
];

export const education = [
  {
    title: 'B.Sc. Computer Engineering',
    school: 'University of Ghana',
    period: '2015 – 2019',
    note: 'Software Engineering Program',
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
