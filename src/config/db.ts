
import { MongoClient, ServerApiVersion } from "mongodb";
import appConfig from "./AppConfig";

const url = appConfig.mongoUrl;

const dbName = appConfig.dbName;

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    return db; // Return the DB instance if you need to perform any operations
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process in case of connection failure
  }
}
