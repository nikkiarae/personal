// LIBRARIES
import { ReactNode } from 'react';
import type { Metadata } from 'next';

// COMPONENTS
import { Header, Main, Footer, Wrapper } from '@/components/layout';
import Providers from './providers';

// STYLES
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Nikki Rae Portfolio',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
