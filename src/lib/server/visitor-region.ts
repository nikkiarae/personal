import 'server-only';

import { cache } from 'react';
import { headers } from 'next/headers';
import { locations, resumes } from '@/lib/data/profile';
import type { Region, RegionalLocation, ResumeFile } from '@/types/types';

interface VisitorRegion {
  region: Region;
  countryCode?: string;
  location: RegionalLocation;
  resume: ResumeFile;
  /** The document for the other region, offered as a secondary download. */
  alternateResume: ResumeFile;
}

const GEO_COUNTRY_HEADER_NAMES = [
  'x-vercel-ip-country',
  'cf-ipcountry',
  'fastly-client-country-code',
  'cloudfront-viewer-country',
  'x-country-code',
];

const getCountryFromAcceptLanguage = (
  acceptLanguage: string | null,
): string | undefined => {
  if (!acceptLanguage) {
    return undefined;
  }

  const locales = acceptLanguage
    .split(',')
    .map((item) => item.trim().split(';')[0])
    .filter(Boolean);

  for (const locale of locales) {
    const regionCode = locale.match(/-([A-Za-z]{2})\b/)?.[1]?.toUpperCase();

    if (regionCode) {
      return regionCode;
    }
  }

  return undefined;
};

/**
 * Resolves the visitor's region from geo-IP headers (falling back to
 * Accept-Language). Wrapped in `cache` so the layout and page share one
 * lookup per request.
 */
export const getVisitorRegion = cache(async (): Promise<VisitorRegion> => {
  const requestHeaders = await headers();

  const countryCode =
    GEO_COUNTRY_HEADER_NAMES.map((name) => requestHeaders.get(name))
      .find(Boolean)
      ?.toUpperCase() ??
    getCountryFromAcceptLanguage(requestHeaders.get('accept-language'));

  const region: Region =
    countryCode === 'GB' || countryCode === 'UK' ? 'uk' : 'us';
  const otherRegion: Region = region === 'uk' ? 'us' : 'uk';

  return {
    region,
    countryCode,
    location: locations[region],
    resume: resumes[region],
    alternateResume: resumes[otherRegion],
  };
});
