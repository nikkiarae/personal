import type { Insight } from '@/types/types';

export const typescriptMadeMeABetterJavaScriptDeveloperEvenWhenIHatedIt: Insight =
  {
    slug: 'typescript-made-me-a-better-javascript-developer-even-when-i-hated-it',
    title:
      'TypeScript Made Me a Better JavaScript Developer (Even When I Hated It)',
    date: '2026-04-18T23:45:00.000Z',
    summary:
      'How TypeScript catches bugs early, improves refactoring confidence, and strengthens JavaScript codebases over time.',
    tags: [
      'TypeScript',
      'JavaScript',
      'Web Dev',
      'Clean Code',
      'Software Development',
    ],
    published: true,
    views: 0,
    content: `I resisted TypeScript for two years. Thought it was overhead. Thought it slowed you down. Thought it was enterprise bloat for people who could not trust their own code.

I was wrong on all three counts.

Here is what changed my mind - told through the bugs TypeScript would have caught before they reached production.

## What TypeScript actually is

TypeScript is JavaScript with types. You add type annotations to your code, and the TypeScript compiler checks them before your code ever runs. It compiles down to plain JavaScript - browsers and Node.js never see TypeScript, only the output.

~~~tsx
// JavaScript - no safety net
function calculateTotal(price, quantity) {
  return price * quantity;
}

// TypeScript - the compiler enforces your intent
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
~~~

That second version tells TypeScript: this function takes two numbers and returns a number. If you ever call it with a string, the compiler tells you immediately.

## Bug 1: The function called with the wrong type

~~~tsx
// In JavaScript, this runs silently and gives NaN
calculateTotal("99.99", 3); // -> NaN

// In TypeScript, this fails at compile time
// Argument of type 'string' is not assignable to parameter of type 'number'.
calculateTotal("99.99", 3);
~~~

Caught in the editor, before a single line runs.

## Bug 2: Accessing a property that might not exist

~~~tsx
// JavaScript - crashes at runtime if user is null
function greetUser(user) {
  return \`Hello, \${user.name}\`; // TypeError if user is undefined
}

// TypeScript - forces you to handle the null case
function greetUser(user: { name: string } | null): string {
  if (!user) return "Hello, guest";
  return \`Hello, \${user.name}\`;
}
~~~

TypeScript saw that \`user\` could be null and refused to compile until you handled it.

## Bug 3: Renaming a property and forgetting to update callers

~~~tsx
interface User {
  id: number;
  fullName: string; // renamed from "name"
}

// Every place that accesses user.name now shows a compiler error
// Property 'name' does not exist on type 'User'. Did you mean 'fullName'?
console.log(user.name); // caught immediately
~~~

Without TypeScript, this bug silently shows \`undefined\` in production.

## Type inference: you do not type everything

A common misconception: TypeScript requires you to annotate every variable. You do not. TypeScript infers types from context:

~~~tsx
const count = 0;      // TypeScript knows this is a number
const name = "Nikki"; // TypeScript knows this is a string
const items = [1, 2, 3]; // TypeScript knows this is number[]

// Only annotate where TypeScript cannot infer
function fetchUser(id: number): Promise<User> {
  // ...
}
~~~

## Gradual adoption: you do not have to do it all at once

You can migrate an existing JavaScript project file by file:

~~~json
// tsconfig.json - start permissive
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "strict": false
  }
}
~~~

Rename files from \`.js\` to \`.ts\` one at a time. Add types incrementally. Turn on \`strict\` mode when you are ready.

## The real payoff

The value of TypeScript is not just catching bugs. It is the development experience. Your editor knows the shape of your data. Autocomplete works properly. Refactoring is safe. New team members can understand your code faster because the types are self-documenting.

TypeScript pays back its overhead in the first week on any project of real complexity.

---`,
  };
