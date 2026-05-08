'use client';

import React, { FC } from 'react';
import { SectionHeading } from '@/components/typography';
import { ArrowRight } from 'lucide-react';

interface LearningOutcomesProps {
  content: string[];
}

const LearningOutcomes: FC<LearningOutcomesProps> = ({ content }) => {
  return (
    <div>
      <SectionHeading text={'Learning Outcomes'} />
      <ul className="space-y-2">
        {content.map((outcome: string, idx: React.Key) => (
          <li key={idx} className="flex items-start gap-2">
            <ArrowRight className="mt-1 shrink-0" size={18} />
            <span className="text-lg">{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningOutcomes;
