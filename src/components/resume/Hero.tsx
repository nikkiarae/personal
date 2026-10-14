import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { profile } from '@/lib/data/profile';
import { SkillsData } from '@/lib/data/skills';
import ResumeDownload from '@/components/ui/ResumeDownload';
import SocialLinks from '@/components/ui/SocialLinks';
import type { Job, ResumeFile } from '@/types/types';

const stagger = (i: number) => ({ '--i': i }) as CSSProperties;

interface HeroProps {
  currentJob?: Job;
  resume: ResumeFile;
}

const Hero = ({ currentJob, resume }: HeroProps) => {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="hero-parallax mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          {currentJob && (
            <p
              className="rise mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1.5 pr-4 pl-3 text-sm backdrop-blur"
              style={stagger(0)}
            >
              <span className="relative flex size-2" aria-hidden="true">
                <span className="ping absolute inline-flex size-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              <span>
                {currentJob.title} at{' '}
                <span className="font-semibold">{currentJob.company}</span>
              </span>
            </p>
          )}

          <h1
            className="rise text-6xl leading-[0.9] font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            style={stagger(1)}
          >
            Hi, I&apos;m {profile.firstName}.
            <span className="text-gradient mt-3 block pb-2 text-5xl tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {profile.headline}
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-lg text-pretty text-muted md:text-xl"
            style={stagger(2)}
          >
            {profile.tagline}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-start gap-3"
            style={stagger(3)}
          >
            <ResumeDownload resume={resume} size="lg" />
            <a href="#contact" className="button button--outline button--lg">
              Get in touch
            </a>
          </div>

          <SocialLinks className="rise mt-8" />
        </div>

        <div
          className="rise relative mx-auto w-64 sm:w-72 md:w-80"
          style={stagger(2)}
        >
          <div
            className="absolute -inset-6 rounded-full bg-accent/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border border-border bg-surface p-2 shadow-2xl shadow-accent/10">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={640}
              height={800}
              sizes="(min-width: 768px) 320px, 288px"
              className="size-full rounded-[2rem] object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <dl
          className="rise grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3"
          style={stagger(4)}
        >
          {profile.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="bg-background/80 p-6 backdrop-blur"
            >
              <dt className="text-sm text-muted">{highlight.label}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>

        <div
          className="marquee-mask rise mt-10 overflow-hidden"
          style={stagger(5)}
        >
          <ul
            className="marquee-track flex w-max items-center gap-10"
            aria-label="Core stack"
          >
            {[...SkillsData, ...SkillsData].map((skill, index) => (
              <li
                key={`${skill.name}-${index}`}
                aria-hidden={index >= SkillsData.length}
                className="flex items-center gap-3 text-sm font-medium whitespace-nowrap text-muted"
              >
                <Image
                  src={skill.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-md object-contain"
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#about"
          className="mx-auto mt-14 flex w-fit flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
        >
          Scroll
          <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
