import { Link } from 'react-router-dom';
import ProjectCard from '../components/Project';
import { Reveal } from '../components/ui';
import { Icon } from '../components/icons';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section aria-labelledby="projects-title" className="pb-24 pt-28 sm:pt-36">
      <div className="container-content">
        <Link to="/" className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted hover:text-fg">
          <Icon name="arrowLeft" className="text-xs" /> Back home
        </Link>
        <Reveal className="mt-6 max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h1 id="projects-title" className="mt-3 text-4xl font-semibold sm:text-5xl">
            Work &amp; experiments
          </h1>
          <p className="mt-4 text-muted">
            Client platforms, products and side projects, from county-wide public services to AI experiments.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
