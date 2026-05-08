import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { InsightCard } from '@/components/cards';
import { fetchInsights } from '@/lib/api/insights';
import { Surface } from '@/components/third-party';

const InsightsPage = async () => {
  const posts = await fetchInsights();

  return (
    <Page>
      <PageHeader
        heading="Insights"
        subHeading="Thoughts, lessons learned, and technical deep dives."
      />

      {posts.length === 0 ? (
        <Surface className="rounded-xl border p-4">
          <span className="text-sm text-slate-600">No insights found</span>
        </Surface>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Page>
  );
};

export default InsightsPage;
