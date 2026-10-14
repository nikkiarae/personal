'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants/navigation';
import { profile } from '@/lib/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';
import type { ResumeFile } from '@/types/types';
import ThemeToggle from './ThemeToggle';

const SPY_IDS = ['top', ...NAV_ITEMS.map((item) => item.id)];

interface HeaderProps {
  resume: ResumeFile;
}

const Header = ({ resume }: HeaderProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const activeId = useActiveSection(isHome ? SPY_IDS : []);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="header-surface border-b border-transparent">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href={isHome ? '#top' : '/'}
            className="group flex items-center gap-2.5 rounded-full font-semibold tracking-tight"
          >
            <Image
              src={profile.avatar}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full object-cover object-top ring-2 ring-accent/40 transition group-hover:ring-accent"
              priority
            />
            {profile.name}
          </Link>

          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-border bg-surface/70 p-1 backdrop-blur">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <li key={item.id}>
                    <Link
                      href={sectionHref(item.id)}
                      aria-current={isActive ? 'location' : undefined}
                      className={cn(
                        'block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300',
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={resume.href}
              download={resume.fileName}
              className="button button--primary button--sm hidden gap-1.5 rounded-full sm:inline-flex"
            >
              <Download size={14} aria-hidden="true" />
              {resume.label}
            </a>
            <button
              type="button"
              popoverTarget="mobile-nav"
              aria-label="Open menu"
              className="button button--tertiary button--sm button--icon-only rounded-full md:hidden"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={mobileNavRef}
        popover="auto"
        className="card-surface fixed inset-x-4 top-18 bottom-auto m-0 w-auto p-2 transition-[opacity,translate] transition-discrete duration-200 starting:-translate-y-2 starting:opacity-0 md:hidden"
      >
        <nav aria-label="Sections">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={sectionHref(item.id)}
                  onClick={() => mobileNavRef.current?.hidePopover()}
                  className={cn(
                    'block rounded-2xl px-4 py-3 text-lg font-medium',
                    activeId === item.id
                      ? 'bg-accent/10 text-accent'
                      : 'hover:bg-default',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={resume.href}
            download={resume.fileName}
            className="button button--primary button--md button--full-width mt-2 gap-2"
          >
            <Download size={16} aria-hidden="true" />
            Download {resume.label}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
