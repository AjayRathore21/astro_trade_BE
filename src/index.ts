import express from "express";
import { connect } from "./config/db";
const app = express();
const PORT = 3000;

const db = connect();
app.get("/", async (req, res) => {
  res.send("Express server is running and connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
