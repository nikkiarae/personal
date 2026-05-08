export interface NavItem {
  label: string;
  href: string;
}

export const PROJECTS = 'Projects';
export const RESUME = 'Resume';
export const INSIGHTS = 'Insights';
export const CONTACT = 'Contact';

export const NAV_ITEMS: NavItem[] = [
  { label: PROJECTS, href: '/projects' },
  { label: RESUME, href: '/resume' },
  { label: INSIGHTS, href: '/insights' },
  { label: CONTACT, href: '/contact' },
];
