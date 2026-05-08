import type { BlogPost } from '@/types/types';

export const loopsMakingYourComputerDoTheBoringStuff: BlogPost = {
  slug: 'loops-making-your-computer-do-the-boring-stuff',
  title: 'Loops: Making Your Computer Do the Boring Stuff',
  date: '2026-02-28T13:00:00.000Z',
  summary:
    'A practical beginner guide to loops in JavaScript, including for, while, forEach, and map.',
  tags: [
    'JavaScript',
    'Beginners',
    'Clean Code',
    'Programming',
    'Learn to Code',
  ],
  published: true,
  content: `If you're doing the same thing more than twice, something else should be doing it. That something is a loop.

Loops are how you make computers do what they're actually good at: repeating a task thousands of times without complaining, without getting tired, and without making mistakes.

## The problem loops solve

Imagine sending a welcome email to every new user. You have 1,000 users. You could write:

~~~jsx
sendEmail(users[0]);
sendEmail(users[1]);
sendEmail(users[2]);
// ... 997 more lines
~~~

Or you could use a loop:

~~~jsx
for (let i = 0; i < users.length; i++) {
  sendEmail(users[i]);
}
~~~

Three lines. Works for 1,000 users or 1,000,000 users.

## The for loop: when you know how many times

The classic loop. Three parts: start, condition, increment.

~~~jsx
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
~~~

Breaking it down:

- \`let i = 0\` - start counting at 0
- \`i < 5\` - keep going while i is less than 5
- \`i++\` - add 1 to i after each loop

## The while loop: when you don't know how many times

~~~jsx
let attempts = 0;

while (attempts < 3) {
  console.log("Attempting connection...");
  attempts++;
}
console.log("Max attempts reached.");
~~~

Use \`while\` when you're waiting for something to happen rather than counting iterations - like waiting for a server to respond or a user to enter valid input.

## forEach: the modern way to loop arrays

When you have an array of things and want to do something with each one:

~~~jsx
const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit) => {
  console.log("I like " + fruit);
});
// I like apple
// I like banana
// I like mango
~~~

Clean, readable, and very common in modern JavaScript. Under the hood it's doing the same thing as a for loop, but the syntax reads like English.

## map: loop and transform

\`forEach\` does something *with* each item. \`map\` does something *to* each item and returns a new array:

~~~jsx
const prices = [10, 25, 50];
const withVAT = prices.map(price => price * 1.2);

console.log(withVAT); // [12, 30, 60]
~~~

The original \`prices\` array is unchanged. \`map\` gives you a new array with the transformed values.

## The infinite loop: the thing to avoid

If your loop condition never becomes false, it runs forever and crashes your program:

~~~jsx
// Infinite loop - i never changes, condition never becomes false
let i = 0;
while (i < 10) {
  console.log(i);
  // forgot i++
}
~~~

Always make sure something inside your loop moves it towards the exit condition.

## Choosing the right loop

| Loop | Use when |
| --- | --- |
| \`for\` | You know the exact number of iterations |
| \`while\` | You're waiting for a condition to change |
| \`forEach\` | You have an array and want to act on each item |
| \`map\` | You have an array and want a transformed copy |

---
`,
};
