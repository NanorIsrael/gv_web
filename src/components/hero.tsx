import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { profile } from '../data/content';
import { Icon } from './icons';
import { useContact } from './ContactProvider';
import SocialLinks from './SocialLinks';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const openContact = useContact();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-24 sm:pt-32">
      {/* subtle grid + glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-content grid items-center gap-12 pb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.role} · {profile.brand}
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.08] text-fg sm:text-5xl lg:text-[3.5rem]"
          >
            I build modern, dependable software{' '}
            <span className="text-muted">for teams that need it done right.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted">
            I&apos;m {profile.name.split(' ')[0]}, a full-stack engineer with 5+ years designing and shipping
            production web applications, from public-sector platforms to SaaS and e-commerce, across
            React, TypeScript, Node.js and Python.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/#work" className="btn-primary">
              View selected work <Icon name="arrowRight" className="text-xs" />
            </Link>
            <button type="button" onClick={openContact} className="btn-ghost">
              Start a project
            </button>
          </motion.div>
          <motion.div variants={item} className="mt-8 -ml-3">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[300px] lg:ml-auto lg:mr-0 lg:max-w-[360px]"
        >
          <div className="card overflow-hidden p-2">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={960}
              height={1280}
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>
          <div className="card absolute -bottom-5 -left-4 flex items-center gap-3 bg-elevated/90 px-4 py-3 backdrop-blur sm:-left-8">
            <span className="font-display text-2xl font-semibold text-fg">4+</span>
            <span className="text-xs leading-tight text-muted">
              years shipping
              <br />
              production software
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
