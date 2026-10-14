import { ViewTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Tag from '@/components/ui/Tag';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/types';
import ProjectCover from './ProjectCover';

export const coverTransitionName = (id: string) => `project-cover-${id}`;
export const titleTransitionName = (id: string) => `project-title-${id}`;

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const [cover] = project.images;
  const tech = [...project.technologiesUsed, ...project.librariesAndTools];

  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        'group card-surface reveal flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus',
        featured && 'md:col-span-2 md:grid md:grid-cols-[1.4fr_1fr]',
      )}
    >
      <ViewTransition name={coverTransitionName(project.id)} share="morph">
        <div
          className={cn(
            'relative aspect-16/10 overflow-hidden border-b border-border',
            featured &&
              'md:aspect-auto md:h-full md:min-h-80 md:border-r md:border-b-0',
          )}
        >
          {cover ? (
            <Image
              src={cover}
              alt=""
              fill
              sizes={
                featured
                  ? '(min-width: 768px) 640px, 100vw'
                  : '(min-width: 768px) 560px, 100vw'
              }
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>
      </ViewTransition>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">{project.category}</p>
          <span className="grid size-9 place-items-center rounded-full border border-border text-muted transition group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>

        <ViewTransition name={titleTransitionName(project.id)} share="morph">
          <h3 className="w-fit text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </ViewTransition>

        <p className="text-pretty text-muted">{project.briefDescription}</p>

        {tech.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {tech.slice(0, 5).map((item) => (
              <li key={item}>
                <Tag className="text-xs">{item}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
