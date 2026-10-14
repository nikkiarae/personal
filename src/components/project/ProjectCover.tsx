import { Sparkles } from 'lucide-react';
import type { Project } from '@/types/types';

/** Generated artwork for projects that don't have screenshots yet. */
const ProjectCover = ({ project }: { project: Project }) => {
  return (
    <div className="relative grid size-full place-items-center overflow-hidden bg-default">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(60% 80% at 20% 20%, color-mix(in oklch, var(--accent) 45%, transparent), transparent 70%), radial-gradient(50% 70% at 85% 80%, color-mix(in oklch, var(--accent-2) 45%, transparent), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(circle_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span className="grid size-14 place-items-center rounded-2xl border border-white/30 bg-white/20 text-foreground backdrop-blur">
          <Sparkles size={24} aria-hidden="true" />
        </span>
        <span className="eyebrow">{project.category}</span>
      </div>
    </div>
  );
};

export default ProjectCover;
