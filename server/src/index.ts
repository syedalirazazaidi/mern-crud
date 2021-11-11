import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { DB, PORT } from "./../config/index";
import router from "./routes/posts";

const app = express();
app.use(cors());

app.use("/", router);

mongoose
  .connect(DB)
  .then(() => {
    return console.log(`Successfully connected to ${PORT}`);
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
    return process.exit(1);
  });
