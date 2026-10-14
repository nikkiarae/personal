'use client';

import { useEffect, useState } from 'react';

/**
 * Scrollspy: returns the id of the section crossing the middle of the
 * viewport. Pass an empty list to switch it off.
 */
export const useActiveSection = (ids: string[]): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = ids.join(',');

  useEffect(() => {
    if (!idsKey) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const id of idsKey.split(',')) {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [idsKey]);

  return idsKey ? activeId : null;
};
