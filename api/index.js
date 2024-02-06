import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("mongo db is connected");
  })
  .catch(() => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on pot 3000");
});
