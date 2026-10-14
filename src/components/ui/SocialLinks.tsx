import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { socialLinks } from '@/lib/data/profile';
import type { SocialLink } from '@/types/types';
import { cn } from '@/lib/utils';

const ICONS: Record<SocialLink['name'], IconType> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
};

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {socialLinks.map(({ name, href }) => {
        const Icon = ICONS[name];

        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="grid size-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <Icon size={16} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
