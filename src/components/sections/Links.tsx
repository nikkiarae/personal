'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@heroui/react';

interface LinksProps {
  live?: string | null;
  repo?: string | null;
}

const Links = ({ live, repo }: LinksProps) => {
  const openInNewTab = (href?: string | null) => {
    if (!href) {
      return;
    }

    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-wrap gap-2">
      {live && (
        <Button
          onPress={() => openInNewTab(live)}
          variant="primary"
          className="inline-flex items-center gap-2"
        >
          <ExternalLink size={16} />
          Live Demo
        </Button>
      )}

      {repo && (
        <Button
          onPress={() => openInNewTab(repo)}
          variant="outline"
          className="inline-flex items-center gap-2"
        >
          <ArrowRight size={16} />
          GitHub Repo
        </Button>
      )}
    </div>
  );
};

export default Links;
