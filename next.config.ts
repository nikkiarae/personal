import type { NextConfig } from 'next';
import { MAPBOX_TOKEN } from '@/lib/constants/config';

const nextConfig: NextConfig = {
  env: {
    MAPBOX_TOKEN: MAPBOX_TOKEN,
  },
};

export default nextConfig;
