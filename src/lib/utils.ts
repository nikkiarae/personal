import { twMerge } from 'tailwind-merge';

type ClassValue = string | undefined | null | false;

export const cn = (...classes: ClassValue[]): string => {
  return twMerge(classes.filter(Boolean).join(' '));
};
