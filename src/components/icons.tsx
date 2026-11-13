import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faBars,
  faCheck,
  faCloud,
  faLayerGroup,
  faLink,
  faMicrochip,
  faServer,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const icons = {
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  external: faArrowUpRightFromSquare,
  menu: faBars,
  close: faXmark,
  check: faCheck,
  layout: faLayerGroup,
  server: faServer,
  cloud: faCloud,
  cpu: faMicrochip,
  link: faLink,
  linkedin: faLinkedinIn,
  github: faGithub,
  facebook: faFacebookF,
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;

/** Decorative icon: always hidden from assistive tech; label the parent control instead. */
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <FontAwesomeIcon icon={icons[name]} className={className} aria-hidden="true" fixedWidth />;
}
