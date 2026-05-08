'use client';

import { BlogCard } from '@/components/cards';
import { Heading } from '../typography';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import { BlogPostSummary } from '@/types/types';

interface RecentBlogsProps {
  blogPosts: BlogPostSummary[];
}

const RecentBlogs = ({ blogPosts }: RecentBlogsProps) => {
  const router = useRouter();

  return (
    <section className="space-y-5">
      <Heading
        text="Recent Insights"
        subtext="Business, product, and engineering notes from recent work."
        cto={
          <Button onPress={() => router.push('/blog')} variant="tertiary">
            View all posts
          </Button>
        }
      />

      {blogPosts.length === 0 ? (
        <p className="rounded-xl border border-[#2b3650] bg-[#131d31] px-4 py-3 text-sm text-[#aab4cc]">
          No blog posts are published yet.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} maxTags={3} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentBlogs;
