const express = require("express");

import { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Auth route is working");
});

router.post("/login", (req: Request, res: Response) => {
  console.log("hello");
  // Handle login logic here
  res.send("Login endpoint");
});
router.post("/register", (req: Request, res: Response) => {
  // Handle registration logic here
  res.send("Register endpoint");
});

module.exports = router;
