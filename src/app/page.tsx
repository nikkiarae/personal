import { Page } from '@/components/layout';
import { Intro, Strengths, RecentBlogs } from '@/components/sections';
import { fetchBlogPosts } from '@/lib/api/blog';

const Home = async () => {
  const blogPosts = await fetchBlogPosts();
  return (
    <Page>
      <div className="mx-auto max-w-6xl space-y-12 pb-8">
        <Intro />
        <Strengths />
        <RecentBlogs blogPosts={blogPosts} />
      </div>
    </Page>
  );
};

export default Home;
