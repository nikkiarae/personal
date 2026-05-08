'use client';

import React, { FC } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface SubHeadingProps {
  text: string;
}

const SubHeading: FC<SubHeadingProps> = ({ text }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row">
      <div
        className="my-1 mr-2 w-1.5"
        style={{ backgroundColor: theme.palette.primary.main }}
      />
      <h3 className="text-2xl font-semibold">{text}</h3>
    </div>
  );
};

export default SubHeading;
