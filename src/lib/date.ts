const DEFAULT_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
};

const PUBLISHED_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

export const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = DEFAULT_DATE_FORMAT_OPTIONS,
): string => {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const formatPublishedDate = (date: Date | string): string => {
  return formatDate(date, PUBLISHED_DATE_FORMAT_OPTIONS);
};
