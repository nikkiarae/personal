import 'server-only';

import { headers } from 'next/headers';

interface Coordinates {
  longitude: number;
  latitude: number;
}

interface VisitorRegionResult {
  isUkVisitor: boolean;
  coordinates: Coordinates;
  countryCode?: string;
}

const UK_COORDINATES: Coordinates = {
  longitude: -0.645747,
  latitude: 52.91109352,
};

const US_COORDINATES: Coordinates = {
  longitude: -111.79792,
  latitude: 40.4248665,
};

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
    const regionMatch = locale.match(/-([A-Za-z]{2})\b/);
    const regionCode = regionMatch?.[1]?.toUpperCase();

    if (regionCode) {
      return regionCode;
    }
  }

  return undefined;
};

export const getVisitorRegion = async (): Promise<VisitorRegionResult> => {
  const requestHeaders = await headers();

  const countryCodeFromGeoHeaders = GEO_COUNTRY_HEADER_NAMES.map((headerName) =>
    requestHeaders.get(headerName),
  )
    .find((headerValue) => !!headerValue)
    ?.toUpperCase();

  const countryCode =
    countryCodeFromGeoHeaders ??
    getCountryFromAcceptLanguage(requestHeaders.get('accept-language'));

  const isUkVisitor = countryCode === 'GB' || countryCode === 'UK';

  return {
    isUkVisitor,
    coordinates: isUkVisitor ? UK_COORDINATES : US_COORDINATES,
    countryCode,
  };
};

export const useVisitorRegion = getVisitorRegion;
