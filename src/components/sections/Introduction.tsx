'use client';

import { SectionHeading } from '@/components/typography';

const Introduction = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <SectionHeading text={'Introduction'} />
      <span className="text-xl">
        AI-Enabled Full Stack Engineer with 8+ years delivering measurable
        business outcomes through reliable, production-grade software.
        Experienced leading modernisation initiatives that reduce delivery risk,
        improve developer productivity, and accelerate time-to-market by moving
        legacy platforms to modern TypeScript architectures. Focused on shipping
        high-impact features, embedding AI capabilities that drive operational
        efficiency, and enforcing engineering standards that protect quality,
        security, and long-term maintainability.
      </span>
    </div>
  );
};

export default Introduction;
