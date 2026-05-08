'use client';

import { ReactNode, useState } from 'react';
import {
  Menu as MenuIcon,
  Moon as DarkMode,
  Sun as LightMode,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants/navigation';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Button } from '@heroui/react';

interface NavbarItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavbarProps {
  brand: ReactNode;
  items: NavbarItem[];
  rightContent?: ReactNode | (() => ReactNode);
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  position?: 'static' | 'sticky' | 'fixed';
}

const maxWidthClasses: Record<NonNullable<NavbarProps['maxWidth']>, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  '2xl': 'max-w-[1536px]',
  full: 'max-w-full',
};

const Navbar = ({
  brand,
  items,
  rightContent,
  className,
  maxWidth = '2xl',
  position = 'fixed',
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderRightSlot = () => {
    return typeof rightContent === 'function' ? rightContent() : rightContent;
  };

  return (
    <nav
      className={cn(
        'z-40 w-full border-b backdrop-blur-lg',
        position === 'sticky' && 'sticky top-0',
        position === 'fixed' && 'fixed top-0',
        className,
      )}
    >
      <header
        className={cn(
          'mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8',
          maxWidth !== 'full' && maxWidthClasses[maxWidth],
        )}
      >
        <div className="flex items-center gap-4">
          <button
            className="rounded-md p-2 text-(--nav-fg) transition-colors hover:bg-(--nav-hover-bg) md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className="sr-only">Menu</span>
            {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
          {brand}
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-(--nav-hover-bg)',
                  item.isActive && 'font-semibold',
                )}
                style={{
                  color: item.isActive ? 'var(--nav-active)' : 'var(--nav-fg)',
                }}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {rightContent && (
          <div className="hidden items-center gap-4 md:flex">
            {renderRightSlot()}
          </div>
        )}
      </header>

      {isMenuOpen && (
        <div className="border-t border-(--nav-divider) md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-(--nav-hover-bg)',
                    item.isActive && 'font-semibold',
                  )}
                  style={{
                    color: item.isActive
                      ? 'var(--nav-active)'
                      : 'var(--nav-fg)',
                  }}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {rightContent && (
              <li className="mt-2 flex flex-col gap-2 border-t border-(--nav-divider) pt-4">
                {renderRightSlot()}
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

const Header = () => {
  const { toggleTheme } = useTheme();
  const pathname = usePathname();

  const items = NAV_ITEMS.map((label) => {
    const href = `/${label.toLowerCase()}`;
    const isActive =
      pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

    return {
      label,
      href,
      isActive,
    };
  });

  const switchLabel = 'Toggle theme';

  return (
    <Navbar
      brand={
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <Image
            src="/assets/images/profile.jpeg"
            alt="Nikki Rae"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover object-top"
            priority
          />
          Nikki Rae
        </Link>
      }
      items={items}
      rightContent={() => (
        <Button
          isIconOnly
          onPress={toggleTheme}
          aria-label="toggle theme"
          className="inline-flex items-center gap-2"
          variant="tertiary"
        >
          <DarkMode size={16} className="text-primary dark:hidden" />
          <LightMode size={16} className="hidden text-primary dark:inline" />
          <span className="md:hidden">{switchLabel}</span>
        </Button>
      )}
      maxWidth="full"
      position="fixed"
    />
  );
};

export default Header;
