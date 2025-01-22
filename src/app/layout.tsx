// LIBRARIES
import { ReactNode } from 'react';
import type { Metadata } from "next";

// COMPONENTS
import { Header, Main, Footer, Wrapper } from '@/components/layout';

// STYLES
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Nikki Rae Portfolio",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
         </Wrapper>
      </body>
    </html>
  );
}
