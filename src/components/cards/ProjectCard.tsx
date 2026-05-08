'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Info } from 'lucide-react';
import { Project } from '@/types/types';
import CardWrapper from './CardWrapper';
import { PROJECTS } from '@/lib/constants/navigation';
import { useTheme } from '@/hooks/useTheme';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const previewImage = project.images[0];
  const { theme } = useTheme();

  return (
    <CardWrapper>
      {previewImage ? (
        <div
          className="relative h-[230px] overflow-hidden rounded-t-[16px] border-b-[5px] sm:h-[300px]"
          style={{ borderBottomColor: theme.palette.primary.main }}
        >
          <Image
            src={previewImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          className="flex h-[230px] items-center justify-center border-b-[5px] px-2 text-center sm:h-[300px]"
          style={{
            borderBottomColor: theme.palette.primary.main,
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <p
            className="text-sm"
            style={{ color: theme.palette.text.secondary }}
          >
            Preview coming soon
          </p>
        </div>
      )}

      <div className="flex h-full flex-col justify-between p-2">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <div className="flex flex-wrap gap-1">
            {project.technologiesUsed?.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border px-2 py-1 text-xs font-medium"
                style={{
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <p
            className="text-sm"
            style={{ color: theme.palette.text.secondary }}
          >
            {project.briefDescription}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {project.liveLink && (
              <a
                className="rounded-md p-2 transition-colors hover:bg-slate-100"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
              </a>
            )}

            {project.repositoryLink && (
              <a
                className="rounded-md p-2 transition-colors hover:bg-slate-100"
                href={project.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRight size={18} />
              </a>
            )}
          </div>

          <Link
            href={`/${PROJECTS.toLowerCase()}/${project.id}`}
            className="rounded-md p-2 transition-colors hover:bg-slate-100"
          >
            <Info size={18} />
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
