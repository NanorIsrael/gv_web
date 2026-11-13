import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui';
import { Icon } from '../components/icons';
import { useContact } from '../components/ContactProvider';
import { profile, stack } from '../data/content';

export default function About() {
  const openContact = useContact();

  return (
    <section aria-labelledby="about-title" className="pb-24 pt-28 sm:pt-36">
      <div className="container-content">
        <Link to="/" className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted hover:text-fg">
          <Icon name="arrowLeft" className="text-xs" /> Back home
        </Link>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:max-w-none lg:self-start">
            <div className="card overflow-hidden p-2">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={960}
                height={1280}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">About</p>
            <h1 id="about-title" className="mt-3 text-4xl font-semibold sm:text-5xl">
              Coding is my craft. Teaching is my passion.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                A long time ago, I was searching for a subscription hack to enjoy a service for free. Desperate, I
                looked for a manual that might help, and stumbled on something much better: programming.
              </p>
              <p>
                Since then I&apos;ve worked across websites, game development, artificial intelligence and more. It
                turns out coding is a lot like magic.
              </p>
              <p>
                Today I work as a contract software engineer, focused on full-stack web development with Python,
                JavaScript/TypeScript and React. I care about clean architecture, fast and accessible interfaces,
                and shipping software teams can rely on.
              </p>
            </div>

            <h2 className="mt-12 text-sm font-medium uppercase tracking-wider text-muted">Tools I use daily</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li key={tech} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-fg">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-3">
              <button type="button" onClick={openContact} className="btn-primary">
                Work with me
              </button>
              <Link to="/projects" className="btn-ghost">
                See projects
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
