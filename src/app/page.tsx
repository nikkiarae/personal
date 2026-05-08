import { Page } from '@/components/layout';
import { Intro, Strengths, RecentInsights } from '@/components/sections';
import { fetchInsights } from '@/lib/api/insights';

const Home = async () => {
  const insightPosts = await fetchInsights();
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
