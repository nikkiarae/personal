type ClassValue = string | undefined | null | false;

export const cn = (...classes: ClassValue[]): string => {
  return classes.filter(Boolean).join(' ');
};
