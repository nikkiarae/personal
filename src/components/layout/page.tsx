'use client';

import { PropsWithChildren } from 'react';

const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-6 mb-8 mt-2 md:mb-14 md:mt-4">
      {children}
    </div>
  );
};

export default Page;
