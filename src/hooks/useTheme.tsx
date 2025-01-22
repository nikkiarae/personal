"use client";

import {
    FC,
    ReactNode,
    useEffect,
    useState,
    createContext,
    useContext,
    useMemo,
    useCallback,
  } from "react";
  import {
    ThemeProvider as MuiThemeProvider,
    CssBaseline,
    Theme,
    PaletteMode,
    createTheme,
    responsiveFontSizes,
    PaletteOptions,
  } from "@mui/material";
  import { baseThemeOptions } from "../styles/theme";
  
  interface ThemeContextProps {
    mode: PaletteMode;
    toggleTheme: () => void;
    theme: Theme
  }
  
  const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
  
  export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useThemeMode must be used within a ThemeProvider");
    }
    return context;
  };
  
  interface ThemeProviderProps {
    children: ReactNode;
    palette: {
      dark: PaletteOptions
      light: PaletteOptions
    };
  }
  
  const ThemeProvider: FC<ThemeProviderProps> = ({ children, palette }) => {
    const [mode, setMode] = useState<PaletteMode>("light");
  
    
  const createThemeWithMode = useCallback(
    (mode: PaletteMode): Theme => {
      return createTheme({
        palette: {
          ...(mode === "dark" ? palette.dark : palette.light),
          mode,
        },
        ...baseThemeOptions.components,
        ...baseThemeOptions.typography,
      });
    },
    [palette] // Ensure the function updates when the palette changes
  );

  // Use `useMemo` to optimize theme creation
  const theme = useMemo(() => {
    return responsiveFontSizes(createThemeWithMode(mode));
  }, [mode, createThemeWithMode]);

  
    const toggleTheme = () => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
    };
  
    useEffect(() => {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
      setMode(matchMedia.matches ? "dark" : "light");
  
      const handleChange = (e: MediaQueryListEvent) => {
        const newMode = e.matches ? "dark" : "light";
        setMode(newMode);
      };
  
      matchMedia.addEventListener("change", handleChange);
      return () => matchMedia.removeEventListener("change", handleChange);
    }, []);
  
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
  