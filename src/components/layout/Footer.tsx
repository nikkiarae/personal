import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { profile } from '@/lib/data/profile';
import SocialLinks from '@/components/ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
          &amp; React 19.
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <Link
            href="/#top"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-full bg-default text-muted transition-colors hover:text-accent"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
