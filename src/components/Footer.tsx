import { Link } from 'react-router-dom';
import { profile } from '../data/content';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-content flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} {profile.company}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li><Link className="hover:text-fg" to="/projects">Projects</Link></li>
            <li><Link className="hover:text-fg" to="/about">About</Link></li>
            <li><a className="hover:text-fg" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
        </nav>
        <SocialLinks className="-ml-3 sm:ml-0" />
      </div>
    </footer>
  );
}
