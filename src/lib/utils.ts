type ClassValue = string | undefined | null | false;

export const cn = (...classes: ClassValue[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const formatReadingTime = (
  content: string,
  wordsPerMinute = 225,
): string => {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return `${minutes} min read`;
};
