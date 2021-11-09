import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts";
import { DB, PORT } from "./../config/index";

const app = express();
app.use(cors());
// app.use("/posts", postRoutes);

mongoose
  .connect(DB)
  .then(() => {
    return console.log(`Successfully connected to ${PORT}`);
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
    return process.exit(1);
  });

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server Running on Port: http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
