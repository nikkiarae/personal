'use client';

import {
  FC,
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Theme,
  PaletteMode,
  createTheme,
  responsiveFontSizes,
  PaletteOptions,
} from '@mui/material';
import { baseThemeOptions } from '../styles/theme';

const THEME_MODE_STORAGE_KEY = 'portfolio-theme-mode';

interface ThemeContextProps {
  mode: PaletteMode;
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  palette: {
    dark: PaletteOptions;
    light: PaletteOptions;
  };
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, palette }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const createThemeWithMode = useCallback(
    (mode: PaletteMode): Theme => {
      return createTheme({
        palette: {
          ...(mode === 'dark' ? palette.dark : palette.light),
          mode,
        },
        ...baseThemeOptions.components,
        ...baseThemeOptions.typography,
      });
    },
    [palette], // Ensure the function updates when the palette changes
  );

  // Use `useMemo` to optimize theme creation
  const theme = useMemo(() => {
    return responsiveFontSizes(createThemeWithMode(mode));
  }, [mode, createThemeWithMode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, newMode);
    setMode(newMode);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const storedMode = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);

    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode);
      return;
    }

    setMode(matchMedia.matches ? 'dark' : 'light');

    const handleChange = (e: MediaQueryListEvent) => {
      const newMode = e.matches ? 'dark' : 'light';
      setMode(newMode);
    };

    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
