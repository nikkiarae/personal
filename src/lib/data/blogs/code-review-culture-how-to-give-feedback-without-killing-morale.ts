import type { BlogPost } from '@/types/types';

export const codeReviewCultureHowToGiveFeedbackWithoutKillingMorale: BlogPost =
  {
    slug: 'code-review-culture-how-to-give-feedback-without-killing-morale',
    title: 'Code Review Culture: How to Give Feedback Without Killing Morale',
    date: '2026-05-09T00:15:00.000Z',
    summary:
      'A practical guide to code reviews that improve quality, spread knowledge, and protect team morale.',
    tags: [
      'Code Review',
      'Teamwork',
      'Engineering',
      'Software Engineering',
      'Leadership',
    ],
    published: true,
    content: `I have seen a developer quit because of a code review. Not because of a disagreement - because of how the feedback was delivered.

Code review is one of the highest-leverage activities in a development team. Done well, it catches bugs, spreads knowledge, and improves quality. Done badly, it kills morale, slows teams down, and drives out good people.

Here is how to do it well - from both sides of the review.

## The purpose of code review

First, be clear about what code review is for:

Do:

- Catch bugs before they reach production
- Spread knowledge of the codebase
- Maintain architectural consistency
- Identify security issues
- Help developers grow

Not for:

- Demonstrating your own knowledge
- Enforcing your personal style preferences
- Gatekeeping changes because you would have done it differently
- A lecture on everything that is wrong

## What to flag, what to let go

**Always flag:**

- Actual bugs (logic errors, off-by-one errors, null reference risks)
- Security issues (SQL injection, unsanitized input, exposed secrets)
- Performance problems that will matter at scale
- Architectural concerns (wrong abstraction, missing separation of concerns)
- Missing error handling on critical paths

**Let go or use a linter:**

- Formatting (configure Prettier and stop arguing about it)
- Naming style (camelCase vs snake_case - pick one, document it, stop reviewing it)
- "I would have done it differently" when their approach also works
- Minor style preferences that do not affect correctness

A good rule of thumb: if a linter or formatter can enforce it automatically, it should not be in a code review comment.

## How to phrase feedback

The difference between constructive and destructive review is mostly tone:

~~~text
// Accusatory - puts the author on the defensive
"This is wrong. You should use async/await here."

// Vague - author does not know what to do
"This could be better."

// Specific, curious, non-personal
"Could we use async/await here instead? I think it would be easier to follow
the error handling - happy to discuss if you had a reason for the promise chain."
~~~

Useful patterns:

- **"What if we..."** - suggests an alternative without asserting the current approach is wrong
- **"I am not sure I understand this - could you add a comment explaining..."** - highlights confusion without blame
- **"Nit:"** - signals a minor, optional suggestion. Author can take it or leave it.
- **"Blocking:"** - this must change before merge. Reserve this for real issues.

Distinguish between blocking issues and non-blocking suggestions explicitly. If everything is treated as critical, nothing feels critical.

## The author's responsibilities

Code review is not just the reviewer's job. As the author:

**Keep PRs small.** A 50-line PR gets a real review. A 1,000-line PR gets a skim and an approval. Small, focused PRs are a gift to your reviewers.

**Write a good description.** What does this PR do? Why? Is there anything tricky the reviewer should know about?

~~~markdown
## What this does
Adds the quote-to-PO conversion flow for the CRM module.

## Why
Prospect accepts a quote -> should be able to generate a PO from it directly.

## Notes for reviewer
The status machine in \`quoteService.ts\` is more complex than it looks -
check the inline comments before reviewing that file.
~~~

**Do not take feedback personally.** The review is on the code, not on you. The best developers actively want their code reviewed because they know it makes the work better.

## Asynchronous vs synchronous review

For most changes: async review works well. Leave comments, author responds, reviewer approves.

For complex changes or architectural decisions: a quick synchronous call saves a lot of back-and-forth. "Can we jump on a 15-minute call to talk through this?" is underused.

## The culture underneath it all

Code review culture is a lagging indicator of team culture. If reviews are adversarial, something else is wrong. If people dread getting their code reviewed, ask why.

The best reviews I have been part of felt like a conversation between people who were all trying to make the product better. That is the standard worth aiming for.

---`,
  };
