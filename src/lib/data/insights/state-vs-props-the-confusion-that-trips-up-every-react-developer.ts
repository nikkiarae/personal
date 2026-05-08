import type { Insight } from '@/types/types';

export const stateVsPropsTheConfusionThatTripsUpEveryReactDeveloper: Insight = {
  slug: 'state-vs-props-the-confusion-that-trips-up-every-react-developer',
  title: 'State vs Props: The Confusion That Trips Up Every React Developer',
  date: '2026-03-28T21:00:00.000Z',
  summary:
    'A practical mental model for understanding props, state, and when to lift state up in React.',
  tags: ['React', 'Frontend', 'JavaScript', 'ReactJS', 'Web Dev'],
  published: true,
  views: 0,
  content: `If you've ever stared at a React component wondering why it is not updating - or why it is updating too often - the answer is almost always confusion between props and state.

Even experienced developers muddle this sometimes. Here is the mental model that makes it click permanently.

## The core distinction

**Props** are data passed *into* a component from its parent. They are read-only. The component receives them but does not own them.

**State** is data that lives *inside* a component. The component owns it and can change it.

**Props are arguments. State is memory.**

Like a function: arguments come from the caller, local variables are owned by the function.

## Props in practice

~~~jsx
// Parent passes data down via props
function App() {
  return <UserCard name="Nikki" role="Founder" />;
}

// Child receives props - read only
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
~~~

\`UserCard\` does not own \`name\` or \`role\`. It just displays them. If \`App\` changes those values, \`UserCard\` re-renders with the new ones automatically.

**Important:** A component should never modify its own props.

~~~jsx
// Never do this
function UserCard({ name }) {
  name = name.toUpperCase(); // mutating props - bad
  return <h2>{name}</h2>;
}

// Use a local variable or state instead
function UserCard({ name }) {
  const displayName = name.toUpperCase(); // derived value - fine
  return <h2>{displayName}</h2>;
}
~~~

## State in practice

State is for data that the component owns and that changes over time:

~~~jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // starts at 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
~~~

\`count\` belongs to \`Counter\`. When \`setCount\` is called, React re-renders the component with the new value.

## When to lift state up

Here is where it gets interesting. What if two sibling components need access to the same data?

~~~jsx
// Problem: both components need the same "selected item"
function ProductList() {
  const [selected, setSelected] = useState(null);
  // only ProductList can see this
}

function ProductDetail() {
  // cannot access ProductList's state - they're siblings
}
~~~

The solution: **lift the state** to the nearest common parent.

~~~jsx
// State lives in the parent - passed down as props
function ProductPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <ProductList onSelect={setSelected} />
      <ProductDetail product={selected} />
    </div>
  );
}

function ProductList({ onSelect }) {
  return (
    <ul>
      <li onClick={() => onSelect({ id: 1, name: "Laptop" })}>Laptop</li>
      <li onClick={() => onSelect({ id: 2, name: "Phone" })}>Phone</li>
    </ul>
  );
}

function ProductDetail({ product }) {
  if (!product) return <p>Select a product</p>;
  return <h2>You selected: {product.name}</h2>;
}
~~~

## When NOT to lift state

Only lift state as high as it needs to go. If only one component uses a piece of data, keep it local. Lifting everything to a global store (Redux, Zustand) for simple UI state is overkill and makes code harder to follow.

**Rule:** State should live in the lowest common ancestor that needs it.

## The decision process

1. Does this data change over time? -> It might need to be state
2. Is it computed from props or other state? -> Derive it, do not store it
3. Do multiple components need it? -> Lift it to their common parent
4. Is it truly global (auth, theme)? -> Consider context or a state library

---`,
};
