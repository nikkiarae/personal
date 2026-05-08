'use client';

import React, { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="flex min-h-screen flex-col">{children}</div>;
};

export default Wrapper;
