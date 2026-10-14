'use client';

import type { MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const applyTheme = (nextTheme: 'light' | 'dark') => {
    flushSync(() => setTheme(nextTheme));
    // next-themes applies the class in an effect; set it eagerly so the
    // view transition snapshots the new theme.
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.style.colorScheme = nextTheme;
  };

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      applyTheme(nextTheme);
      return;
    }

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() =>
      applyTheme(nextTheme),
    );

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className="button button--tertiary button--sm button--icon-only rounded-full"
    >
      <Moon size={16} className="dark:hidden" aria-hidden="true" />
      <Sun size={16} className="hidden dark:block" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
