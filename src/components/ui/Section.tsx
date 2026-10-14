import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section = ({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        'mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28',
        className,
      )}
    >
      <header className="reveal mb-10 max-w-3xl md:mb-14">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="text-muted">{index}</span>
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2
          id={`${id}-heading`}
          className="text-4xl font-semibold tracking-tight text-balance md:text-5xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-pretty text-muted">{description}</p>
        )}
      </header>
      {children}
    </section>
  );
};

export default Section;
