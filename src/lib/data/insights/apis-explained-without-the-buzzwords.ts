import type { Insight } from '@/types/types';

export const apisExplainedWithoutTheBuzzwords: Insight = {
  slug: 'apis-explained-without-the-buzzwords',
  title: 'APIs Explained Without the Buzzwords',
  date: '2026-02-21T11:00:00.000Z',
  summary:
    'A beginner-friendly explanation of APIs, JSON, and REST without jargon.',
  tags: ['API', 'REST', 'Web Dev', 'Beginners', 'JSON'],
  published: true,
  views: 0,
  content: `Every app you use today is powered by APIs. Your weather app, your banking app, Instagram - all of them talk to servers via APIs. But most explanations of what an API *is* are unnecessarily confusing.

Here's the clearest one I know.

## An API is a waiter

You're at a restaurant. You don't walk into the kitchen and make your own food. You tell the waiter what you want. The waiter goes to the kitchen, gets it, and brings it back to you.

An API works exactly like that:

- **You** (your app or browser) are the customer
- **The waiter** is the API
- **The kitchen** is the server and database

You send a request. The API takes it to the server. The server processes it and sends data back. You never touch the kitchen directly.

## What an API request looks like

When your weather app shows you today's forecast, it's doing something like this behind the scenes:

~~~jsx
const response = await fetch(
  "https://api.weather.com/v1/current?city=London&apiKey=abc123"
);
const data = await response.json();

console.log(data.temperature); // 14
console.log(data.condition);   // "Cloudy"
~~~

It sends a request to a URL. The server responds with data in JSON format.

## What JSON looks like

JSON (JavaScript Object Notation) is just a way of structuring data so computers can read it easily. It looks like this:

~~~json
{
  "city": "London",
  "temperature": 14,
  "condition": "Cloudy",
  "humidity": 78,
  "wind": {
    "speed": 15,
    "direction": "SW"
  }
}
~~~

Keys on the left, values on the right. Nested objects for grouped data. That's it.

## REST: the most common type of API

REST (Representational State Transfer) is a set of conventions for how APIs should work. Most APIs you'll encounter are RESTful. They use standard HTTP methods:

| Method | What it does | Example |
| --- | --- | --- |
| GET | Retrieve data | Get a list of users |
| POST | Create new data | Create a new user |
| PUT | Update existing data | Update a user's email |
| DELETE | Remove data | Delete a user |

A RESTful API for a blog might have endpoints like:

~~~text
GET    /api/posts          -> returns all posts
GET    /api/posts/42       -> returns post #42
POST   /api/posts          -> creates a new post
PUT    /api/posts/42       -> updates post #42
DELETE /api/posts/42       -> deletes post #42
~~~

## Why APIs matter

APIs are how the internet connects. They let separate systems talk to each other without sharing code or databases. Stripe handles your payments so you don't have to build a payment processor. Twilio sends your SMS so you don't have to manage telecom infrastructure. Google Maps shows your store locations so you don't have to build a mapping tool.

Every great product is built on top of a stack of APIs.

---`,
};
