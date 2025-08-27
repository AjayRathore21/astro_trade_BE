


const { MongoClient, ServerApiVersion } = require('mongodb');

const url = "mongodb+srv://ajjubhai:45zxh6cSWOnztLLC@cluster0.6meed2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbName = 'astro_trade_db';    // Replace with your database name

const client = new MongoClient(url, {
  serverApi: {
    version:ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    return db;  // Return the DB instance if you need to perform any operations
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);  // Exit the process in case of connection failure
  }
}

