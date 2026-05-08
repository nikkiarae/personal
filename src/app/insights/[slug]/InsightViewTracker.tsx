'use client';

import { useEffect } from 'react';

interface InsightViewTrackerProps {
  insightSlug?: string;
}

const InsightViewTracker = ({ insightSlug }: InsightViewTrackerProps) => {
  useEffect(() => {
    if (!insightSlug) {
      return;
    }

    void fetch(`/api/insights/${encodeURIComponent(insightSlug)}/view`, {
      method: 'POST',
      cache: 'no-store',
      keepalive: true,
    });
  }, [insightSlug]);

  return null;
};

export default InsightViewTracker;
