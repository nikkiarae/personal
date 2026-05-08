import type { Insight } from '@/types/types';

export const asyncAwaitIsJustPromisesWithABetterCostume: Insight = {
  slug: 'async-await-is-just-promises-with-a-better-costume',
  title: 'Async/Await Is Just Promises With a Better Costume',
  date: '2026-03-14T17:00:00.000Z',
  summary:
    'A practical explanation of callbacks, promises, async/await, and when to use Promise.all.',
  tags: ['JavaScript', 'Async', 'Web Dev', 'Promises', 'Node.js'],
  published: true,
  views: 0,
  content: `Async/await trips up almost every intermediate JavaScript developer. Not because it is complicated - but because it gets taught without the foundation it is built on.

Understanding it properly takes three minutes. Here are all three.

## The problem: JavaScript runs one thing at a time

JavaScript is single-threaded. It can only do one thing at a time. So if you ask it to fetch data from a server - which might take a second - it has a choice: sit and wait (blocking everything), or carry on and come back when the data arrives.

It carries on. That is asynchronous behavior. But then you need a way to say "when that data finally arrives, do this."

## Stage 1: Callbacks (the original solution)

~~~jsx
fetchUser(userId, function(user) {
  fetchOrders(user.id, function(orders) {
    fetchOrderDetails(orders[0].id, function(details) {
      console.log(details);
    });
  });
});
~~~

This works, but look at that nesting. Three levels deep and it is already painful. This is callback hell - and real codebases had it ten levels deep.

## Stage 2: Promises (cleaner chaining)

Promises were introduced to flatten that pyramid:

~~~jsx
fetchUser(userId)
  .then(user => fetchOrders(user.id))
  .then(orders => fetchOrderDetails(orders[0].id))
  .then(details => console.log(details))
  .catch(error => console.error("Something went wrong:", error));
~~~

Much better. Linear, readable, with proper error handling via \`.catch()\`.

A Promise represents a value that is not available yet but will be. It is in one of three states: **pending**, **fulfilled**, or **rejected**.

## Stage 3: async/await (the same thing, better syntax)

\`async/await\` is not a new feature. It is syntactic sugar on top of Promises - just a nicer way to write the same thing.

~~~jsx
async function loadUserOrders(userId) {
  try {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(user.id);
    const details = await fetchOrderDetails(orders[0].id);
    console.log(details);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
~~~

Rules:

- \`async\` before the function tells JavaScript this function will use \`await\` inside
- \`await\` pauses execution of *that function* until the Promise resolves
- Wrap in \`try/catch\` for error handling (equivalent to \`.catch()\`)

## A real-world example: fetching data from an API

~~~jsx
async function getWeather(city) {
  try {
    const response = await fetch(\`https://api.weather.com/current?city=\${city}\`);

    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    return null;
  }
}

// Calling it
const weather = await getWeather("London");
console.log(weather.temperature);
~~~

## Running async operations in parallel

\`await\` runs things sequentially - each line waits for the previous. If operations do not depend on each other, run them in parallel with \`Promise.all\`:

~~~jsx
// Sequential - takes 3 seconds if each takes 1 second
const user = await fetchUser(id);
const settings = await fetchSettings(id);
const permissions = await fetchPermissions(id);

// Parallel - takes 1 second total
const [user, settings, permissions] = await Promise.all([
  fetchUser(id),
  fetchSettings(id),
  fetchPermissions(id)
]);
~~~

## The mental model

\`await\` means "wait for this Promise to resolve before continuing." Everything after the \`await\` is like a \`.then()\`. The \`try/catch\` is the \`.catch()\`.

It is the same code, just readable like synchronous code.

---`,
};
