'use client';

import React, { FC } from 'react';
import { Heading, SubHeading } from '@/components/typography';

interface PageHeaderProps {
  heading: string;
  subHeading?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ heading, subHeading }) => {
  return (
    <div className="mb-4 space-y-2">
      <Heading text={heading} />
      {subHeading && <SubHeading text={subHeading} />}
    </div>
  );
};

export default PageHeader;
