'use client';

import React, { FC } from 'react';

interface SectionHeadingProps {
  text: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ text }) => {
  return (
    <div className="mb-2">
      <h2 className="text-3xl font-semibold">
        {text}
        <span style={{ color: '#6A0DAD' }}>.</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
