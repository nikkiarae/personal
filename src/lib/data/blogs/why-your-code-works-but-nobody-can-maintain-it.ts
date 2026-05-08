import type { BlogPost } from '@/types/types';

export const whyYourCodeWorksButNobodyCanMaintainIt: BlogPost = {
  slug: 'why-your-code-works-but-nobody-can-maintain-it',
  title: 'Why Your Code Works But Nobody Can Maintain It',
  date: '2026-04-11T23:30:00.000Z',
  summary:
    'Working code is not enough - this guide shows how naming, structure, and incremental refactoring make code maintainable.',
  tags: [
    'Clean Code',
    'Refactoring',
    'Software Engineering',
    'Tech Debt',
    'Programming',
  ],
  published: true,
  content: `Working code and good code are not the same thing.

Working code does the job. Good code does the job, and the person reading it six months later - including future you - can understand it without a decoder ring.

The gap between the two is where tech debt lives.

## The cost of unmaintainable code

Every time a developer has to read a function three times before understanding it, that is wasted time. Every time someone is afraid to change a function because they do not know what it affects, that is slowed velocity. Every time a bug is introduced because someone misread the intent of some code, that is a regression.

Maintainability is not a nice-to-have. It is a productivity multiplier.

## Naming: the cheapest form of documentation

~~~jsx
// What does this do?
function proc(d, f) {
  return d.filter(x => x.s === f);
}

// Self-documenting
function filterByStatus(records, status) {
  return records.filter(record => record.status === status);
}
~~~

The second version tells you exactly what it does without a single comment. Good naming means: variables and parameters describe their contents, functions describe what they *do* (usually a verb), booleans read like questions (\`isActive\`, \`hasPermission\`, \`shouldRetry\`).

~~~jsx
// Confusing booleans
let flag = true;
let temp = getUserData();
let x = 0;

// Names that communicate intent
let isAuthenticated = true;
let currentUser = getUserData();
let retryCount = 0;
~~~

## Comments: explain the why, not the what

The code already shows *what* is happening. Comments should explain *why*.

~~~jsx
// Useless comment - just restates the code
// Add 1 to i
i++;

// Redundant
// Check if user is active
if (user.isActive) { ... }

// Explains non-obvious reasoning
// We delay by 500ms here to avoid hitting the rate limit on the external API
// which enforces a maximum of 2 requests per second
await delay(500);
await externalApi.fetch(endpoint);

// Explains a business rule that is not obvious from code alone
// Housing providers require a 7-day notice period before any inspection.
// This is a legal requirement under Section 11 of the Landlord and Tenant Act.
const NOTICE_PERIOD_DAYS = 7;
~~~

## Structure: small functions, consistent patterns

A function that is more than 20-30 lines is usually doing too much. Break it up.

~~~jsx
// One giant function doing everything
async function handleUserRegistration(req, res) {
  // 80 lines of mixed validation, DB calls, email sending, logging...
}

// Composed of small, focused functions
async function handleUserRegistration(req, res) {
  const validated = validateRegistrationInput(req.body);
  const user = await createUser(validated);
  await sendWelcomeEmail(user);
  await logRegistrationEvent(user);
  res.status(201).json(user);
}
~~~

The second version reads like a summary. You understand the process at a glance.

## The tech debt trap

Tech debt is not about writing bad code because you are lazy. It is about the accumulated cost of shortcuts. Every "I will clean this up later" that never gets cleaned up makes the next change harder.

Signs of mounting tech debt:

- Estimates keep coming in higher than expected
- Simple changes take unexpected time due to side effects
- Developers are scared to touch certain files
- Nobody fully understands how a particular module works

The fix is not a big bang rewrite. It is paying the debt down incrementally - refactoring as you go, leaving code cleaner than you found it.

## The campsite rule

Leave the code cleaner than you found it.

You do not have to refactor an entire module when you touch it. But rename that confusing variable. Extract that 10-line block into a named function. Add the comment that explains the business rule nobody documented.

Small improvements compound over time.

---`,
};
