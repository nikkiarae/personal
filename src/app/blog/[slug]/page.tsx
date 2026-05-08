import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Link from 'next/link';
import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { fetchBlogPost } from '@/lib/api/blog';
import { SlugParams } from '@/types/types';
import { Chip, Surface } from '@/components/third-party';
import { formatPublishedDate } from '@/lib/date';

const formatReadingTime = (content: string): string => {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 225));

  return `${minutes} min read`;
};

const BlogPostPage = async ({ params }: SlugParams) => {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await marked.parse(post.content);
  const readingTime = formatReadingTime(post.content);

  return (
    <Page>
      <PageHeader heading={post.title} subHeading={post.summary} />

      <article className="w-full">
        <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8">
          <Surface
            variant="secondary"
            className="relative overflow-hidden rounded-3xl border p-0 shadow-sm"
            style={{ borderColor: 'var(--separator)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--default)_0%,transparent_58%)]" />

            <div className="relative p-6 sm:p-8 md:p-10">
              <div
                className="text-base leading-8 text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-7 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-foreground [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:pl-1 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted [&_code]:rounded [&_code]:bg-(--color-default) [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-foreground [&_pre]:mb-5 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-(--color-default) [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-foreground [&_a]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_img]:my-6 [&_img]:rounded-xl"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </Surface>

          <aside className="lg:sticky lg:top-24">
            <Surface
              variant="secondary"
              className="flex flex-col items-center gap-4 overflow-hidden rounded-3xl border px-5 py-5 shadow-sm sm:px-6 sm:py-6"
            >

              <div className="flex flex-col items-center gap-2 text-md font-semibold text-muted">
                <span>{formatPublishedDate(post.date)}</span>
                <span>{readingTime}</span>
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Chip
                      key={tag}
                      variant="soft"
                      color="accent"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}
            </Surface>
          </aside>
        </div>
      </article>
    </Page>
  );
};

export default BlogPostPage;
