import { MongoClient } from "mongodb";

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db("maintains");

  cachedClient = client;
  return db;
}
