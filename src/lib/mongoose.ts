import mongoose, { Connection } from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI!
const MONGO_DATABASE = process.env.MONGO_DATABASE!

if (!MONGO_URI || !MONGO_DATABASE) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

let cached: { conn: Connection | null; promise: Promise<Connection> | null } = global.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongoose = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(`${MONGO_URI}/${MONGO_DATABASE}`, {})
      .then((mongoose) => mongoose.connection)
      .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;