'use client';

import React, { PropsWithChildren } from 'react';

const CardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-full flex-col transition-transform duration-100 ease-in-out hover:scale-[1.01] rounded-8 shadow-lg hover:shadow-xl">
      {children}
    </div>
  );
};

export default CardWrapper;
