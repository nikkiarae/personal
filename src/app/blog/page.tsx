import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { BlogCard } from '@/components/cards';
import { fetchBlogPosts } from '@/lib/api/blog';

const BlogPage = async () => {
  const posts = await fetchBlogPosts();

  return (
    <Page>
      <PageHeader
        heading="Blog"
        subHeading="Thoughts, lessons learned, and technical deep dives."
      />

      {posts.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No blog posts found yet. Add entries in{' '}
          <span className="font-semibold">src/lib/data/blogs.ts</span> to
          publish your first post.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Page>
  );
};

export default BlogPage;
