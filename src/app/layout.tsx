import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Header, Footer } from '@/components/layout';
import { getVisitorRegion } from '@/lib/server/visitor-region';
import { profile } from '@/lib/data/profile';
import Providers from './providers';

import '@/styles/globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nikkirae.com'),
  title: {
    default: `${profile.name} · ${profile.headline}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} · ${profile.headline}`,
    description: profile.tagline,
    images: [profile.avatar],
    type: 'profile',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf9fb' },
    { media: '(prefers-color-scheme: dark)', color: '#100d12' },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { resume } = await getVisitorRegion();

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <div
            className="scroll-progress fixed inset-x-0 top-0 z-60 h-0.5"
            aria-hidden="true"
          />
          <div
            className="page-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-240"
            aria-hidden="true"
          />
          <Header resume={resume} />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
