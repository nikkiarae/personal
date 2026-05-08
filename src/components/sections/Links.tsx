'use client';

import React, { FC } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface LinksProps {
  live?: string | null;
  repo?: string | null;
}

const Links: FC<LinksProps> = ({ live, repo }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {live && (
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          href={live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      )}

      {repo && (
        <a
          className="inline-flex items-center gap-2 rounded-lg border border-slate-400 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowRight size={16} />
          GitHub Repo
        </a>
      )}
    </div>
  );
};

export default Links;
