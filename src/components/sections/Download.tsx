'use client';

import { Button } from '@heroui/react';
import { DownloadIcon } from 'lucide-react';
import { useMemo } from 'react';

interface ResumeButtonProps {
  isUkVisitor: boolean;
}

const ResumeButton = ({ isUkVisitor }: ResumeButtonProps) => {
  const resumeConfig = useMemo(
    () =>
      isUkVisitor
        ? {
            href: '/assets/CV_Nikki_Rae_2026.pdf',
            download: 'Nikki_Rae_UK_CV_2026.pdf',
            label: 'Download CV',
          }
        : {
            href: '/assets/Resume_Nikki_Rae_2026.pdf',
            download: 'Nikki_Rae_US_Resume_2026.pdf',
            label: 'Download Resume',
          },
    [isUkVisitor],
  );

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeConfig.href;
    downloadLink.download = resumeConfig.download;
    downloadLink.rel = 'noopener';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Button className="w-full" onPress={handleDownload} variant="primary">
      <div className="flex flex-row items-center gap-2 font-bold">
        <DownloadIcon size={18} />
        {resumeConfig.label}
      </div>
    </Button>
  );
};

export default ResumeButton;
