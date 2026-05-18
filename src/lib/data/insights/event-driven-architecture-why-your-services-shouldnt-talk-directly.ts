import type { Insight } from '@/types/types';

export const eventDrivenArchitectureWhyYourServicesShouldntTalkDirectly: Insight =
  {
    slug: 'event-driven-architecture-why-your-services-shouldnt-talk-directly',
    title:
      "Event-Driven Architecture: Why Your Services Shouldn't Talk Directly",
    date: '2026-05-18T11:00:00.000Z',
    summary:
      'A practical explanation of event-driven architecture, pub/sub, queues, eventual consistency, and idempotency.',
    tags: ['Event-Driven', 'Architecture', 'Microservices', 'Backend', 'AWS'],
    published: true,
    views: 0,
    content: `When services talk directly to each other, you create invisible dependencies. Service A fails, Service B fails because it was waiting. You get cascading failures, tight coupling, and a system that's fragile by design.

Event-driven architecture breaks that chain.

## The problem with direct calls

~~~tsx
// OrderService calls three services directly - tightly coupled
class OrderService {
  async createOrder(orderData: CreateOrderDto) {
    const order = await this.db.orders.create(orderData);

    // If any of these fail, the whole operation is in trouble
    await this.inventoryService.reserveStock(order);    // direct HTTP call
    await this.emailService.sendConfirmation(order);    // direct HTTP call
    await this.analyticsService.trackOrder(order);      // direct HTTP call

    return order;
  }
}
~~~

OrderService now needs to know about InventoryService, EmailService, and AnalyticsService. If EmailService is down, order creation fails. If AnalyticsService is slow, your user waits. Every new service that cares about orders requires changing OrderService.

## The event-driven approach

~~~tsx
// OrderService emits an event - knows nothing about who listens
class OrderService {
  async createOrder(orderData: CreateOrderDto) {
    const order = await this.db.orders.create(orderData);

    // Emit an event and move on
    await this.eventBus.publish('order.created', {
      orderId: order.id,
      userId: order.userId,
      items: order.items,
      total: order.total,
      timestamp: new Date().toISOString()
    });

    return order;
  }
}

// Each handler reacts independently
@EventHandler('order.created')
class InventoryHandler {
  async handle(event: OrderCreatedEvent) {
    await this.inventory.reserve(event.items);
  }
}

@EventHandler('order.created')
class EmailHandler {
  async handle(event: OrderCreatedEvent) {
    await this.email.sendConfirmation(event.userId, event.orderId);
  }
}

@EventHandler('order.created')
class AnalyticsHandler {
  async handle(event: OrderCreatedEvent) {
    await this.analytics.track('order_placed', event);
  }
}
~~~

OrderService doesn't know about any of these handlers. Adding a new service that cares about orders? Create a new handler. Touch nothing else.

## Pub/Sub vs Message Queues

**Pub/Sub (publish/subscribe):** Events are broadcast to all subscribers. One event, many consumers. AWS SNS, Google Pub/Sub, Redis Pub/Sub.

~~~text
Publisher -> Topic -> [Subscriber A]
                  -> [Subscriber B]
                  -> [Subscriber C]
~~~

**Message Queue:** Events go into a queue and are consumed by one worker at a time. Great for guaranteed processing, load leveling, and retries. AWS SQS, RabbitMQ, BullMQ.

~~~text
Publisher -> Queue -> Worker (processes one message at a time)
~~~

In practice you often combine them: SNS (fan-out) -> SQS (per-service queue) -> Lambda/worker.

## Implementing with BullMQ (Node.js)

~~~tsx
import { Queue, Worker } from 'bullmq';

const orderQueue = new Queue('orders', {
  connection: { host: 'localhost', port: 6379 } // Redis
});

// Publish an event
await orderQueue.add('order.created', {
  orderId: order.id,
  userId: order.userId,
  total: order.total
});

// Consume in a separate service/process
const worker = new Worker('orders', async (job) => {
  if (job.name === 'order.created') {
    await emailService.sendConfirmation(job.data);
  }
}, {
  connection: { host: 'localhost', port: 6379 }
});
~~~

BullMQ handles retries, delays, rate limiting, and dead-letter queues out of the box.

## Eventual consistency: the trade-off

In the direct-call model, everything either succeeds or fails together (synchronously). In the event-driven model, handlers run asynchronously - the order is created before the email is sent, the stock reserved, or analytics tracked.

This is **eventual consistency**: the system will reach a consistent state, but not immediately.

For most use cases this is fine. The user gets their order confirmation a moment later. The stock is reserved before it can be oversold. Analytics land in the warehouse seconds after the event.

## Idempotency: your handlers must be safe to run twice

Networks are unreliable. Your message broker may deliver the same message more than once. Your handlers must be **idempotent** - processing the same event twice produces the same result as processing it once:

~~~tsx
@EventHandler('order.created')
class InventoryHandler {
  async handle(event: OrderCreatedEvent) {
    // Check if we've already processed this event
    const processed = await this.db.processedEvents.findOne({
      eventId: event.id
    });
    if (processed) return; // already done - skip

    await this.inventory.reserve(event.items);

    // Record that we've processed it
    await this.db.processedEvents.create({ eventId: event.id });
  }
}
~~~

---`,
  };
