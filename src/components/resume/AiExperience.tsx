import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { SiClaude, SiOpenai } from 'react-icons/si';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import { aiUseCases } from '@/lib/data/ai';
import type { AiUseCase } from '@/types/types';

const LOGOS: Record<AiUseCase['tool'], IconType> = {
  'AWS Bedrock': FaAws,
  Claude: SiClaude,
  ChatGPT: SiOpenai,
};

const AiExperience = () => {
  return (
    <Section
      id="ai"
      index="03"
      eyebrow="AI"
      title="AI where it earns its place."
      description="Different tools for different jobs: in the product, across the team, and in my own workflow."
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {aiUseCases.map((useCase, index) => {
          const Logo = LOGOS[useCase.tool];

          return (
            <li
              key={useCase.tool}
              className="card-surface reveal relative flex flex-col overflow-hidden p-6 md:p-7"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent to-accent-2"
                style={{ opacity: 1 - index * 0.3 }}
                aria-hidden="true"
              />
              <p className="eyebrow mb-6">{useCase.scope}</p>

              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-default">
                  <Logo size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {useCase.tool}
                  </h3>
                  <p className="text-sm text-muted">{useCase.context}</p>
                </div>
              </div>

              <p className="mb-6 text-pretty text-foreground/85">
                {useCase.summary}
              </p>

              <ul className="mt-auto flex flex-wrap gap-2">
                {useCase.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Tag className="text-xs">{highlight}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

export default AiExperience;
