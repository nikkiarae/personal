import type { BlogPost } from '@/types/types';

export const theSingleResponsibilityPrincipleWillChangeHowYouWriteCode: BlogPost =
  {
    slug: 'the-single-responsibility-principle-will-change-how-you-write-code',
    title: 'The Single Responsibility Principle Will Change How You Write Code',
    date: '2026-03-21T19:00:00.000Z',
    summary:
      'A practical guide to applying SRP so functions, modules, and services stay focused and easy to maintain.',
    tags: [
      'SOLID',
      'Clean Code',
      'Architecture',
      'Refactoring',
      'Software Engineering',
    ],
    published: true,
    content: `The Single Responsibility Principle (SRP) is one of the most useful ideas in software engineering. It states that every function, class, or module should have exactly one reason to change.

One job. One purpose. One reason to exist.

It sounds simple. It is deceptively hard to apply consistently. But once it clicks, you will see violations everywhere - including in your own code.

## The smell: "and"

Here is the test. Ask yourself: "What does this function do?"

If your answer contains the word **"and"**, your function is doing too much.

"It fetches the user and formats the response and saves it to the database."

That is three jobs. That is three reasons to change.

## A concrete violation

~~~jsx
// This function does three different things
async function processNewUser(userData) {
  // 1. Validate the input
  if (!userData.email || !userData.name) {
    throw new Error("Missing required fields");
  }

  // 2. Save to the database
  const user = await db.users.create({
    name: userData.name,
    email: userData.email,
    createdAt: new Date()
  });

  // 3. Send a welcome email
  await emailService.send({
    to: user.email,
    subject: "Welcome!",
    body: \`Hi \${user.name}, welcome aboard.\`
  });

  return user;
}
~~~

This works. But now imagine: the email template changes. You edit this function. The validation logic changes. You edit this function. The database schema changes. You edit this function.

Three different things change for three different reasons - all in the same place.

## Refactored: one job each

~~~jsx
// Each function has exactly one job

function validateUserData(userData) {
  if (!userData.email || !userData.name) {
    throw new Error("Missing required fields");
  }
}

async function createUser(userData) {
  return await db.users.create({
    name: userData.name,
    email: userData.email,
    createdAt: new Date()
  });
}

async function sendWelcomeEmail(user) {
  await emailService.send({
    to: user.email,
    subject: "Welcome!",
    body: \`Hi \${user.name}, welcome aboard.\`
  });
}

// The orchestrator - composes the three steps
async function processNewUser(userData) {
  validateUserData(userData);
  const user = await createUser(userData);
  await sendWelcomeEmail(user);
  return user;
}
~~~

Now \`validateUserData\` only changes when validation rules change. \`createUser\` only changes when the database schema changes. \`sendWelcomeEmail\` only changes when the email content changes.

Each function has one reason to change.

## Why this makes your life better

**Testing:** Small, focused functions are trivially easy to unit test. Test \`validateUserData\` with various inputs. Test \`createUser\` with a mocked database. Test them independently.

**Debugging:** When something breaks, you know exactly where to look. The email is not sending? Look at \`sendWelcomeEmail\`. Validation is wrong? Look at \`validateUserData\`.

**Reuse:** \`validateUserData\` can be used anywhere you accept user input. \`sendWelcomeEmail\` can be called from multiple flows. Focused functions are reusable functions.

**Reading:** \`processNewUser\` now reads like a summary. You understand the high-level flow without reading the implementation details.

## SRP beyond functions

The principle applies at every level:

- **Classes** should represent one concept
- **Modules/files** should group related functionality
- **Services** should own one domain

A \`UserService\` that handles users, authentication, email notifications, and billing is violating SRP at the service level. Split it.

## The heuristic

Every time you write a function, ask: "What is the one thing this does?" If you cannot answer in one sentence without using "and," split it.

---`,
  };
