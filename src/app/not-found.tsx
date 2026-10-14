import Link from 'next/link';
import { getVisitorRegion } from '@/lib/server/visitor-region';

export default async function NotFound() {
  const { resume } = await getVisitorRegion();

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-6 px-4 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="text-5xl font-semibold tracking-tight">
        Nothing to see here.
      </h1>
      <p className="text-lg text-muted">
        That page has moved or never existed. My whole {resume.noun} lives on
        the home page now.
      </p>
      <Link href="/" className="button button--primary button--lg">
        Back to my {resume.noun}
      </Link>
    </section>
  );
}
