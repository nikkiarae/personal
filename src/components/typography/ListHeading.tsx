'use client';

import { twMerge } from 'tailwind-merge';

interface ListHeadingProps {
  text: string;
  className?: string;
}

const ListHeading = ({ text, className }: ListHeadingProps) => {
  return (
    <h3 className={twMerge('mb-1 text-2xl font-semibold', className)}>
      {text}
    </h3>
  );
};

export default ListHeading;
