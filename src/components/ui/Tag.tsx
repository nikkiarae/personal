import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  tone?: 'default' | 'accent';
  className?: string;
}

const Tag = ({ children, tone = 'default', className }: TagProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
        tone === 'accent'
          ? 'border-accent/30 bg-accent/10 text-accent'
          : 'border-border bg-default text-foreground/80',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
