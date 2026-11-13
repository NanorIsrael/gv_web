import { profile } from '../data/content';
import { Icon, type IconName } from './icons';

const iconFor: Record<string, IconName> = {
  LinkedIn: 'linkedin',
  GitHub: 'github',
  Facebook: 'facebook',
};

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {profile.socials.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-elevated hover:text-fg"
          >
            <Icon name={iconFor[label]} className="text-base" />
          </a>
        </li>
      ))}
    </ul>
  );
}
