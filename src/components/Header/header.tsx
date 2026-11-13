import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../../data/content';
import { Icon } from '../icons';
import { useContact } from '../ContactProvider';

const navItems = [
  { label: 'Work', to: '/#work' },
  { label: 'Expertise', to: '/#expertise' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const openContact = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  const linkClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:text-fg ${active ? 'text-fg' : 'text-muted'}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-canvas/80 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 rounded-lg" aria-label={`${profile.brand} home`}>
          <img src="/images/logos/GvLogo.jpeg" alt="" width={32} height={32} className="h-8 w-8 rounded-md object-cover" />
          <span className="font-display text-sm font-semibold tracking-tight">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => linkClass(!item.to.includes('#') && isActive)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={openContact} className="btn-primary hidden h-10 min-h-0 px-4 md:inline-flex">
            Get in touch
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-fg hover:bg-elevated md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-lg" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <ul className="container-content flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="flex min-h-[44px] items-center rounded-lg px-2 text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openContact();
                }}
                className="btn-primary w-full"
              >
                Get in touch
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
