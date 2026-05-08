'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/types';
import { Card, Chip } from '@heroui/react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const previewImage = project.images[0];
  const projectHref = `/projects/${project.id}`;

  return (
    <Link
      href={projectHref}
      aria-label={`Open project: ${project.title}`}
      className="group block h-full rounded-2xl focus:outline-none"
    >
      <Card
        className="h-full rounded-2xl border p-0 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-active:translate-y-0 group-active:scale-[0.99] group-focus-visible:ring-2 group-focus-visible:ring-accent/60 group-focus-visible:ring-offset-2"
      >
        <Card.Header className="p-0">
          {previewImage ? (
            <div className="relative h-57.5 overflow-hidden rounded-t-2xl border-b-[5px] sm:h-75">
              <Image
                src={previewImage}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <div className="flex h-57.5 items-center justify-center border-b-[5px] px-2 text-center sm:h-75">
              <p className="text-sm">Preview coming soon</p>
            </div>
          )}
        </Card.Header>
        <Card.Content className="px-3 pb-4">
          <div className="flex h-full flex-col justify-between p-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="text-sm">{project.briefDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologiesUsed?.map((tech) => (
                  <Chip
                    key={`${project.id}-${tech}`}
                    variant="secondary"
                    color="accent"
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default ProjectCard;
