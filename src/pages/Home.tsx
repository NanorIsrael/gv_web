import { Link } from 'react-router-dom';
import Hero from '../components/hero';
import ProjectCard from '../components/Project';
import TechMarquee from '../components/SwiftIcons';
import { Reveal, SectionHeading } from '../components/ui';
import { Icon } from '../components/icons';
import { useContact } from '../components/ContactProvider';
import ExperienceTimeline from '../components/Experience';
import { capabilities, education, experience, principles, profile, projects, testimonials } from '../data/content';

export default function Home() {
  const openContact = useContact();
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <section aria-label="Technology stack" className="border-y border-line bg-surface/50 py-6">
        <div className="container-content">
          <TechMarquee />
        </div>
      </section>

      {/* Selected work: bento layout */}
      <section id="work" aria-labelledby="work-title" className="scroll-mt-20 py-24">
        <div className="container-content">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="work-title"
              eyebrow="Selected work"
              title="Products built for real-world scale"
              description="A few platforms I've engineered end to end, from data model to deployed interface."
            />
            <Link to="/projects" className="btn-ghost shrink-0 self-start sm:self-auto">
              All projects <Icon name="arrowRight" className="text-xs" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.06} className={i === 0 ? 'md:col-span-2' : ''}>
                <ProjectCard project={project} large={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 border-t border-line py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="experience-title"
              eyebrow="Experience"
              title="Where I've shipped"
              description="Roles where I've owned product work across frontend, backend and integrations."
            />
            <Reveal delay={0.1} className="mt-10">
              <h3 className="eyebrow">Education</h3>
              <ul className="mt-4 space-y-3">
                {education.map((e) => (
                  <li key={e.title} className="card p-5">
                    <p className="font-display font-semibold text-fg">{e.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {e.school} · {e.period}
                    </p>
                    {e.note && <p className="mt-1 text-sm text-muted">{e.note}</p>}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" aria-labelledby="expertise-title" className="scroll-mt-20 border-t border-line py-24">
        <div className="container-content">
          <SectionHeading
            id="expertise-title"
            eyebrow="Expertise"
            title="Full-stack, from interface to infrastructure"
            description="I own features across the whole stack, so teams get one engineer who can take an idea all the way to production."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              return (
                <Reveal key={c.title} delay={i * 0.05}>
                  <div className="card h-full p-6 transition-colors duration-200 hover:border-zinc-600">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon name={c.icon} className="text-base" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={capabilities.length * 0.05}>
              <div className="card h-full bg-gradient-to-br from-accent/15 to-transparent p-6">
                <h3 className="text-lg font-semibold">How I work</h3>
                <ul className="mt-4 space-y-3">
                  {principles.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted">
                      <Icon name="check" className="mt-1 shrink-0 text-xs text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" aria-labelledby="testimonials-title" className="scroll-mt-20 border-t border-line py-24">
        <div className="container-content">
          <SectionHeading
            id="testimonials-title"
            eyebrow="Testimonials"
            title="Trusted by senior engineers"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="card flex h-full flex-col p-6">
                  <blockquote className="flex-1 font-display text-lg leading-snug text-fg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <img src={t.img} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                    <div className="text-sm">
                      <p className="font-medium text-fg">{t.name}</p>
                      <p className="text-muted">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 pb-24">
        <div className="container-content">
          <Reveal>
            <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
              <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title" className="mx-auto mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
                Have a product that needs to ship?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                I&apos;m open to contract and full-time engagements. Tell me what you&apos;re building and I&apos;ll get
                back to you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button type="button" onClick={openContact} className="btn-primary">
                  Start a conversation
                </button>
                <a href={`mailto:${profile.email}`} className="btn-ghost">
                  {profile.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
