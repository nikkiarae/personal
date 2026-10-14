export interface NavItem {
  label: string;
  /** Matches the `id` of a section on the home page. */
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];
