import type { Insight } from '@/types/types';

export const writeTestsOrWriteRegretsABeginnersGuideToUnitTesting: Insight = {
  slug: 'write-tests-or-write-regrets-a-beginners-guide-to-unit-testing',
  title: "Write Tests or Write Regrets: A Beginner's Guide to Unit Testing",
  date: '2026-04-25T23:55:00.000Z',
  summary:
    'A practical beginner guide to unit testing with Jest, including what to test, what to mock, and how to avoid coverage traps.',
  tags: ['Testing', 'Jest', 'Clean Code', 'TDD', 'Software Engineering'],
  published: true,
  views: 0,
  content: `Most developers skip testing. Not because they do not know it matters - but because it feels like extra work on top of already tight deadlines.

Here is the reframe that changed how I think about it: tests are not extra work. They are the thing that lets you change code without fear.

## What unit testing actually is

A unit test checks that a small, isolated piece of code does what you expect. You give it an input, check the output, and if something breaks later, the test tells you immediately.

~~~jsx
// The function you want to test
function addVAT(price) {
  return price * 1.2;
}

// The test
test("addVAT adds 20% to the price", () => {
  expect(addVAT(100)).toBe(120);
  expect(addVAT(50)).toBe(60);
  expect(addVAT(0)).toBe(0);
});
~~~

If you later change \`addVAT\` in a way that breaks something, that test fails immediately. You catch the regression before it ships.

## Setting up Jest

Jest is the most widely used JavaScript testing framework. Zero configuration for most projects:

~~~bash
npm install --save-dev jest
~~~

Add to \`package.json\`:

~~~json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
~~~

Write test files ending in \`.test.js\` or \`.spec.js\`. Run \`npm test\`. That is it.

## What to test

**Pure functions with clear inputs and outputs:**

~~~jsx
// Perfect candidate for testing
function formatCurrency(amount, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency
  }).format(amount);
}

test("formatCurrency formats GBP correctly", () => {
  expect(formatCurrency(1234.56)).toBe("£1,234.56");
  expect(formatCurrency(0)).toBe("£0.00");
});
~~~

**Business logic and edge cases:**

~~~jsx
function calculateDiscount(price, membershipLevel) {
  if (membershipLevel === "premium") return price * 0.8;
  if (membershipLevel === "standard") return price * 0.9;
  return price;
}

test("applies correct discount by membership level", () => {
  expect(calculateDiscount(100, "premium")).toBe(80);
  expect(calculateDiscount(100, "standard")).toBe(90);
  expect(calculateDiscount(100, "none")).toBe(100);
});
~~~

## What NOT to test

**Implementation details** - test the output, not the internal logic. If you test internals, refactoring breaks tests even when behavior is correct.

**Third-party libraries** - Stripe, Twilio, your database library. They have their own tests. Mock them.

**The framework itself** - do not test that React renders. Test what your component does.

## Mocking: isolating your code

When your function depends on an external service, mock it:

~~~jsx
// Mock the email service - do not send real emails in tests
jest.mock("./emailService", () => ({
  send: jest.fn().mockResolvedValue({ success: true })
}));

test("sends welcome email after registration", async () => {
  const emailService = require("./emailService");

  await registerUser({ name: "Nikki", email: "nikki@example.com" });

  expect(emailService.send).toHaveBeenCalledWith(
    expect.objectContaining({
      to: "nikki@example.com",
      subject: expect.stringContaining("Welcome")
    })
  );
});
~~~

## The 100% coverage trap

Coverage is a metric, not a goal. 100% coverage means every line was executed in a test - not that every behavior was tested. You can have 100% coverage with meaningless tests.

Test the things that matter: critical business logic, edge cases, error handling. A focused 30% coverage on the right things beats hollow 100% coverage any day.

## The compounding return

Tests pay for themselves the first time they prevent a regression. After that, every change you make with a passing test suite is a change you make with confidence. That confidence is worth more than the time the tests took to write.

---`,
};
