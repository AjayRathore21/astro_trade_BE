
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const PORT = 3000;

const uri = "mongodb+srv://ajjubhai:45zxh6cSWOnztLLC@cluster0.6meed2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function startServer() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");

    app.get('/', (req, res) => {
      res.send('Express server is running and connected to MongoDB');
    });

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

startServer();
