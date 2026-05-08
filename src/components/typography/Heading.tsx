'use client';

import { ReactNode } from 'react';

interface HeadingProps {
  text: string;
  subtext?: string;
  cta?: ReactNode;
  cto?: ReactNode;
}

const Heading = ({ text, subtext, cta, cto }: HeadingProps) => {
  const actionContent = cta ?? cto;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 items-center justify-between mt-2 space-y-3">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl mb-0">
          {text}
          <span className="text-accent">.</span>
        </h1>
        {actionContent && actionContent}
      </div>

      {subtext && <span className="text-lg text-muted">{subtext}</span>}
    </div>
  );
};

export default Heading;
