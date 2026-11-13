import { stack } from '../data/content';

/**
 * Infinite tech-stack ticker. Pure CSS animation (no per-frame React renders);
 * pauses on hover and stops under prefers-reduced-motion.
 */
export default function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee-mask group relative overflow-hidden" aria-label="Technology stack">
      <ul className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:animate-none">
        {items.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            aria-hidden={i >= stack.length}
            className={`whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted ${
              i >= stack.length ? 'motion-reduce:hidden' : ''
            }`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
