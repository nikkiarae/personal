'use client';

import React, { FC } from 'react';
import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants/navigation';
import { useTheme } from '@/hooks/useTheme';

interface SocialLink {
  name: string;
  href: string;
  Icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    Icon: FaFacebookF,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    Icon: FaTwitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    Icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    Icon: FaLinkedinIn,
  },
];

const Footer: FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className="mt-auto w-full border-t"
      style={{
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="rounded-md p-2 transition-colors"
              style={{
                color: theme.palette.text.secondary,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  theme.palette.action.hover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="transition-colors hover:opacity-80"
              style={{ color: theme.palette.text.primary }}
            >
              {item}
            </Link>
          ))}
        </nav>

        <p className="text-sm" style={{ color: theme.palette.text.secondary }}>
          &copy; {new Date().getFullYear()} Nikki Rae. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
