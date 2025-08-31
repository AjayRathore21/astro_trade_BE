import "dotenv/config";
import express from "express";
import { connect } from "./config/db";
import appConfig from "./config/AppConfig";
const app = express();
const PORT = appConfig.port;
const authRouter = require("./routes/Auth");

const db = connect();
app.get("/", async (req, res) => {
  res.send("Express server is running and connected to MongoDB");
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
