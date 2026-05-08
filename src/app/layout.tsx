// LIBRARIES
import { ReactNode } from 'react';
import type { Metadata } from 'next';

// COMPONENTS
import { Header, Main, Footer, Wrapper } from '@/components/layout';
import { getVisitorRegion } from '@/hooks/useVisitorRegion';
import Providers from './providers';

// STYLES
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Nikki Rae Portfolio',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isUkVisitor } = await getVisitorRegion();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Wrapper>
            <Header isUkVisitor={isUkVisitor} />
            <Main>{children}</Main>
            <Footer />
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
