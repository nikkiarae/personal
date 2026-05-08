'use client';

import React, { FC } from 'react';
import { MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/typography';
import { useTheme } from '@/hooks/useTheme';

const Education: FC = () => {
  const theme = useTheme();

  return (
    <div>
      <SectionHeading text={'Education'} />
      <div>
        <h3 className="text-2xl font-semibold">
          {`Bachelors of Science, Information Technology`}
        </h3>
        <p className="mb-1" style={{ color: theme.palette.text.secondary }}>
          {`Brigham Young University`}
        </p>
        <div className="flex items-start gap-2">
          <MapPin
            className="mt-1 shrink-0"
            size={18}
            style={{ color: theme.palette.primary.main }}
          />
          <p>{`Provo, UT, USA`}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
