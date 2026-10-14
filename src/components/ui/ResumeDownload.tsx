import { Download } from 'lucide-react';
import type { ResumeFile } from '@/types/types';
import { cn } from '@/lib/utils';

interface ResumeDownloadProps {
  resume: ResumeFile;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * A plain download link styled with HeroUI's button classes, so it works
 * without JavaScript and can render on the server.
 */
const ResumeDownload = ({
  resume,
  size = 'md',
  className,
}: ResumeDownloadProps) => {
  return (
    <a
      href={resume.href}
      download={resume.fileName}
      className={cn(`button button--primary button--${size} gap-2`, className)}
    >
      <Download size={size === 'sm' ? 14 : 16} aria-hidden="true" />
      Download {resume.label}
    </a>
  );
};

export default ResumeDownload;
