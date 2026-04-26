'use client';

import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import ThemeProvider from '@/hooks/useTheme';
import { theme } from '@/styles/theme';
import ThemeRegistry from './ThemeRegistry';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeRegistry>
      <ThemeProvider palette={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.default',
            color: 'text.primary',
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeRegistry>
  );
};

export default Wrapper;
