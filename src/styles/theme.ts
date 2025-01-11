import { PaletteOptions } from '@mui/material/styles';
import OpenSansVF from '@assets/fonts/OpenSans-VariableFont.ttf';
import RobotoFlexVF from '@assets/fonts/RobotoFlex-VariableFont.ttf';
import { purple } from '@mui/material/colors';

export const baseThemeOptions = {
  typography: {
    fontFamily: ['Open Sans', 'Roboto Flex', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Roboto Flex',
      fontSize: '6rem',
      lineHeight: 1,
      letterSpacing: 4,
      fontVariationSettings: "'wght' 600, 'wdth' 90",
    },
    h2: {
      fontFamily: 'Roboto Flex',
      fontSize: '2.5rem',
      lineHeight: 1.3,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    h3: {
      fontFamily: 'Roboto Flex',
      fontSize: '2rem',
      lineHeight: 1.4,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    h4: {
      fontFamily: 'Open Sans',
      fontSize: '1.75rem',
      lineHeight: 1.5,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    h5: {
      fontFamily: 'Open Sans',
      fontSize: '1.5rem',
      lineHeight: 1.6,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    h6: {
      fontFamily: 'Open Sans',
      fontSize: '1.25rem',
      lineHeight: 1.7,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    body1: {
      fontFamily: 'Open Sans',
      fontSize: '1.2rem',
      lineHeight: 1.8,
      fontVariationSettings: "'wght' 600, 'wdth' 70",
    },
    body2: {
      fontFamily: 'Open Sans',
      fontSize: '0.875rem',
      lineHeight: 1.9,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    button: {
      fontFamily: 'Roboto Flex',
      fontSize: '0.875rem',
      lineHeight: 1.75,
      textTransform: 'uppercase',
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    caption: {
      fontFamily: 'Open Sans',
      fontSize: '0.75rem',
      lineHeight: 1.66,
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
    overline: {
      fontFamily: 'Roboto Flex',
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'uppercase',
      fontVariationSettings: "'wght' 700, 'wdth' 70",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Open Sans';
          font-display: swap;
          src: url(${OpenSansVF}) format('truetype');
        }
        @font-face {
          font-family: 'Roboto Flex';
          font-display: swap;
          src: url(${RobotoFlexVF}) format('truetype');
        }
      `,
    },
  },
};

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: purple[700], // Default purple shade
  },
  secondary: {
    main: purple[400], // Light purple for secondary
  },
};

export const darkPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: purple[700], // Default purple shade
  },
  secondary: {
    main: purple[400], // Light purple for secondary
  },
};

export const theme = {
  dark: darkPalette,
  light: lightPalette,
};
