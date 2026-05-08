import { FC } from 'react';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { fetchBlogPost, fetchBlogPosts } from '@/lib/api/blog';
import { SlugParams } from '@/types/types';
import { Surface } from '@heroui/react';

const formatPublishedDate = (date: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const BlogPostPage: FC<SlugParams> = async ({ params }) => {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await marked.parse(post.content);

  return (
    <Page>
      <PageHeader heading={post.title} subHeading={post.summary} />

      <article className="mx-auto flex max-w-3xl flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {formatPublishedDate(post.date)}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2 py-0.5 text-xs font-medium text-muted"
                style={{ borderColor: 'var(--separator)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Surface variant="secondary" className="rounded-2xl p-6 shadow-sm">
          <div
            className="text-base leading-8 text-foreground [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_code]:rounded [&_code]:bg-(--color-default) [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-foreground [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-(--color-default) [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-foreground [&_a]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </Surface>
      </article>
    </Page>
  );
};

export default BlogPostPage;
