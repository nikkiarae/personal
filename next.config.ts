import type { NextConfig } from 'next';
import { MAPBOX_TOKEN } from '@/lib/constants/config';

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    MAPBOX_TOKEN: MAPBOX_TOKEN,
  },
  // The site is a single-page resume now; keep old links working.
  async redirects() {
    return [
      { source: '/resume', destination: '/#experience', permanent: true },
      { source: '/cv', destination: '/#experience', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/insights', destination: '/', permanent: false },
      { source: '/insights/:slug*', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
