'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={['light', 'dark']}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
