import { FC } from 'react';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { Page } from '@/components/layout';
import { fetchBlogPost, fetchBlogPosts } from '@/lib/api/blog';
import { SlugParams } from '@/types/types';

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
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {formatPublishedDate(post.date)}
        </p>

        <h1 className="mt-2 text-4xl font-semibold leading-tight text-slate-900">
          {post.title}
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-600">
          {post.summary}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="mt-8 text-base leading-8 text-slate-700 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-slate-800 [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-slate-100 [&_a]:font-semibold [&_a]:text-slate-900 [&_a]:underline [&_a]:underline-offset-4"
          // Content is authored in markdown and rendered as HTML on the server.
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </Page>
  );
};

export default BlogPostPage;
