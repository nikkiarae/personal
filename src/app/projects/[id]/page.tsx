import { ViewTransition } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Gallery from '@/components/project/Gallery';
import ProjectCover from '@/components/project/ProjectCover';
import {
  coverTransitionName,
  titleTransitionName,
} from '@/components/project/ProjectCard';
import Tag from '@/components/ui/Tag';
import { fetchProject, fetchProjects } from '@/lib/api/projects';
import type { Params } from '@/types/types';

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const project = await fetchProject((await params).id);

  return project
    ? { title: project.title, description: project.briefDescription }
    : {};
};

/** Splits "Label: detail" outcomes so the label can be emphasised. */
const splitOutcome = (outcome: string) => {
  const separator = outcome.indexOf(': ');

  return separator > 0 && separator < 60
    ? {
        label: outcome.slice(0, separator),
        detail: outcome.slice(separator + 2),
      }
    : { label: null, detail: outcome };
};

const StackList = ({ heading, items }: { heading: string; items: string[] }) =>
  items.length > 0 && (
    <div>
      <h3 className="mb-3 text-sm font-medium text-muted">{heading}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );

const ProjectPage = async ({ params }: Params) => {
  const { id } = await params;
  const projects = await fetchProjects();
  const index = projects.findIndex((entry) => entry.id === id);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const hasStack =
    project.technologiesUsed.length +
      project.librariesAndTools.length +
      project.softSkills.length >
    0;

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <article className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
        <Link
          href="/#projects"
          className="rise mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>

        <header className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow rise mb-4">{project.category}</p>
            <ViewTransition
              name={titleTransitionName(project.id)}
              share="morph"
            >
              <h1 className="w-fit text-5xl font-semibold tracking-tight md:text-6xl">
                {project.title}
              </h1>
            </ViewTransition>
            <p className="rise mt-5 text-xl text-pretty text-muted">
              {project.briefDescription}
            </p>
          </div>

          {(project.liveLink || project.repositoryLink) && (
            <div className="rise flex flex-wrap gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary button--md gap-2"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Visit site
                </a>
              )}
              {project.repositoryLink && (
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--outline button--md gap-2"
                >
                  <FaGithub size={16} aria-hidden="true" />
                  Source
                </a>
              )}
            </div>
          )}
        </header>

        {project.images.length > 0 ? (
          <Gallery
            images={project.images}
            title={project.title}
            transitionName={coverTransitionName(project.id)}
          />
        ) : (
          <ViewTransition name={coverTransitionName(project.id)} share="morph">
            <div className="aspect-16/10 overflow-hidden rounded-3xl border border-border md:aspect-21/9">
              <ProjectCover project={project} />
            </div>
          </ViewTransition>
        )}

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_20rem] md:gap-16">
          <div className="flex flex-col gap-14">
            <section className="reveal">
              <h2 className="eyebrow mb-4">Overview</h2>
              <p className="text-lg leading-relaxed text-pretty md:text-xl md:leading-relaxed">
                {project.detailedDescription}
              </p>
            </section>

            {project.learningOutcomes.length > 0 && (
              <section className="reveal">
                <h2 className="eyebrow mb-6">What I learned</h2>
                <ol className="flex flex-col gap-4">
                  {project.learningOutcomes.map((outcome, outcomeIndex) => {
                    const { label, detail } = splitOutcome(outcome);

                    return (
                      <li key={outcome} className="card-surface flex gap-5 p-5">
                        <span className="font-mono text-sm text-accent">
                          {String(outcomeIndex + 1).padStart(2, '0')}
                        </span>
                        <p className="text-pretty">
                          {label && (
                            <span className="block font-semibold">{label}</span>
                          )}
                          <span className={label ? 'text-muted' : undefined}>
                            {detail}
                          </span>
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}
          </div>

          {hasStack && (
            <aside className="reveal md:sticky md:top-28 md:self-start">
              <div className="card-surface flex flex-col gap-6 p-6">
                <h2 className="eyebrow">Stack</h2>
                <StackList
                  heading="Technologies"
                  items={project.technologiesUsed}
                />
                <StackList
                  heading="Libraries & tools"
                  items={project.librariesAndTools}
                />
                <StackList heading="Soft skills" items={project.softSkills} />
              </div>
            </aside>
          )}
        </div>

        {projects.length > 1 && (
          <nav
            aria-label="More projects"
            className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
          >
            <Link
              href={`/projects/${previous.id}`}
              className="group card-surface flex flex-col gap-1 p-6 transition hover:border-accent/40"
            >
              <span className="flex items-center gap-2 text-sm text-muted">
                <ArrowLeft
                  size={14}
                  className="transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Previous
              </span>
              <span className="text-xl font-semibold">{previous.title}</span>
            </Link>
            <Link
              href={`/projects/${next.id}`}
              className="group card-surface flex flex-col items-end gap-1 p-6 text-right transition hover:border-accent/40"
            >
              <span className="flex items-center gap-2 text-sm text-muted">
                Next
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xl font-semibold">{next.title}</span>
            </Link>
          </nav>
        )}
      </article>
    </ViewTransition>
  );
};

export default ProjectPage;
