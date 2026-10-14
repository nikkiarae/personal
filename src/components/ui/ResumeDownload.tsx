import { Download } from 'lucide-react';
import type { ResumeFile } from '@/types/types';
import { cn } from '@/lib/utils';

interface ResumeDownloadProps {
  resume: ResumeFile;
  /** When set, a quiet link to the other region's document is shown too. */
  alternate?: ResumeFile;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * A plain download link styled with HeroUI's button classes, so it works
 * without JavaScript and can render on the server.
 */
const ResumeDownload = ({
  resume,
  alternate,
  size = 'md',
  className,
}: ResumeDownloadProps) => {
  return (
    <div className={cn('flex flex-col items-start gap-2', className)}>
      <a
        href={resume.href}
        download={resume.fileName}
        className={`button button--primary button--${size} gap-2`}
      >
        <Download size={size === 'sm' ? 14 : 16} aria-hidden="true" />
        Download {resume.label}
      </a>
      {alternate && (
        <a
          href={alternate.href}
          download={alternate.fileName}
          className="text-xs text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          Need the {alternate.label === 'CV' ? 'UK CV' : 'US resume'} instead?
        </a>
      )}
    </div>
  );
};

export default ResumeDownload;
