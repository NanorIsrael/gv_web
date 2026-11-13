import type { Project } from '../data/content';
import { Icon } from './icons';

type Props = {
  project: Project;
  large?: boolean;
};

export default function ProjectCard({ project, large = false }: Props) {
  const { name, url, img, category, summary } = project;
  const hasLink = Boolean(url);

  const body = (
    <>
      <div className={`overflow-hidden border-b border-line bg-elevated ${large ? 'aspect-[16/10] md:aspect-[21/9]' : 'aspect-[16/10]'}`}>
        <img
          src={`/images/projects/${img}.webp`}
          alt={`Screenshot of ${name}`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{category}</p>
        <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-semibold text-fg">
          {name}
          {hasLink && (
            <Icon
              name="external"
              className="mt-1.5 text-xs shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
      </div>
    </>
  );

  const className =
    'card group flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-zinc-600';

  return hasLink ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className} aria-label={`${name} (opens in a new tab)`}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
