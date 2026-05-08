import { BlogPost, BlogPostSummary } from '@/types/types';
import { blogs } from '@/lib/data/blogs';

const getVisibleBlogs = (): BlogPost[] => {
  return blogs
    .filter((blog) => blog.published)
    .sort(
      (firstPost, secondPost) =>
        new Date(secondPost.date).getTime() -
        new Date(firstPost.date).getTime(),
    );
};

const toBlogSummary = (post: BlogPost): BlogPostSummary => {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    summary: post.summary,
    tags: post.tags,
    coverImage: post.coverImage,
    published: post.published,
  };
};

export const fetchBlogPosts = async (): Promise<BlogPostSummary[]> => {
  return getVisibleBlogs().map(toBlogSummary);
};

export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  return getVisibleBlogs().find((post) => post.slug === slug) ?? null;
};
