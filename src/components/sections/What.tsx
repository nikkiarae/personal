'use client';

import React, { FC } from 'react';
import { SectionHeading } from '@/components/typography';

interface WhatProps {
  content: string;
}

const What: FC<WhatProps> = ({ content }) => {
  return (
    <div>
      <SectionHeading text={'What'} />
      <p>{content}</p>
    </div>
  );
};

export default What;
