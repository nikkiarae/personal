'use client';

import { useMemo } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
export type PaletteMode = 'light' | 'dark';

export interface AppPalette {
  mode: PaletteMode;
  background: {
    default: string;
    paper: string;
  };
  primary: {
    main: string;
  };
  secondary: {
    main: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  divider: string;
  grey: {
    [key: number]: string;
  };
  action: {
    hover: string;
    selected: string;
  };
}

interface AppTheme {
  palette: AppPalette;
}

interface ThemeContextProps {
  mode: PaletteMode;
  toggleTheme: () => void;
  theme: AppTheme;
  palette: AppPalette;
  currentTheme: PaletteMode;
  setTheme: (nextTheme: PaletteMode | 'system') => void;
}

const normalizeThemeName = (themeName: string | undefined): PaletteMode => {
  return themeName === 'dark' ? 'dark' : 'light';
};

const buildPalette = (mode: PaletteMode): AppPalette => {
  return {
    mode,
    background: {
      default: 'var(--color-background)',
      paper: 'var(--color-background-secondary)',
    },
    primary: {
      main: 'var(--color-accent)',
    },
    secondary: {
      main: 'var(--color-accent)',
    },
    text: {
      primary: 'var(--foreground)',
      secondary: 'var(--muted)',
    },
    divider: 'var(--separator)',
    grey: {
      100: 'var(--color-default)',
      200: 'var(--color-background-secondary)',
      300: 'var(--color-background-tertiary)',
    },
    action: {
      hover: 'var(--color-default-hover)',
      selected: 'var(--color-accent-soft)',
    },
  };
};

export const useTheme = (): ThemeContextProps => {
  const {
    theme: selectedTheme,
    resolvedTheme,
    setTheme: setNextTheme,
  } = useNextTheme();

  const currentTheme = useMemo(
    () => normalizeThemeName(resolvedTheme ?? selectedTheme),
    [resolvedTheme, selectedTheme],
  );

  const palette = useMemo(() => buildPalette(currentTheme), [currentTheme]);
  const mode = currentTheme;

  const toggleTheme = () => {
    setNextTheme(mode === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (nextThemeName: PaletteMode | 'system') => {
    setNextTheme(nextThemeName);
  };

  return {
    mode,
    toggleTheme,
    theme: {
      palette,
    },
    palette,
    currentTheme,
    setTheme,
  };
};
