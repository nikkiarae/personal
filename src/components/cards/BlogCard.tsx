'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Card } from '@heroui/react';
import { BlogPostSummary } from '@/types/types';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPostSummary;
  className?: string;
  maxTags?: number;
  dateFormat?: Intl.DateTimeFormatOptions;
}

const DEFAULT_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};

const formatPublishedDate = (
  date: string,
  dateFormat: Intl.DateTimeFormatOptions,
): string => {
  return new Intl.DateTimeFormat('en-US', dateFormat).format(new Date(date));
};

const BlogCard: FC<BlogCardProps> = ({
  post,
  className,
  maxTags,
  dateFormat = DEFAULT_DATE_FORMAT,
}) => {
  const visibleTags =
    typeof maxTags === 'number' ? post.tags.slice(0, maxTags) : post.tags;

  return (
    <Link
      href={`/insights/${post.slug}`}
      aria-label={`Open insight: ${post.title}`}
      className="group block rounded-xl"
    >
      <Card
        className={cn(
          'h-full rounded-xl border transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:shadow-lg',
          className,
        )}
      >
        <Card.Content className="space-y-3 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {formatPublishedDate(post.date, dateFormat)}
          </p>

          <Card.Title className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
            {post.title}
          </Card.Title>

          <Card.Description className="text-sm leading-6 text-muted">
            {post.summary}
          </Card.Description>

          {visibleTags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {visibleTags.map((tag) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="rounded-full border px-2 py-0.5 text-xs font-medium text-muted"
                  style={{
                    borderColor: 'var(--separator)',
                    backgroundColor: 'var(--color-default)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Card.Content>
      </Card>
    </Link>
  );
};

export default BlogCard;
