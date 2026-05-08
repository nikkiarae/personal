'use client';

import { FC, ReactNode } from 'react';
interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="flex-1">
      <div className="h-16" aria-hidden="true" />
      <div className="mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default Main;
