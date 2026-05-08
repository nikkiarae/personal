import { Page } from '@/components/layout';
import { Intro, Strengths, RecentInsights } from '@/components/sections';
import { fetchBlogPosts } from '@/lib/api/blog';

const Home = async () => {
  const insightPosts = await fetchBlogPosts();
  return (
    <Page>
      <div className="mx-auto max-w-6xl space-y-12 pb-8">
        <Intro />
        <Strengths />
        <RecentInsights insightPosts={insightPosts} />
      </div>
    </Page>
  );
};

export default Home;
