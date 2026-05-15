import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contentRoutes from "./routes/content.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/content", contentRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://demo:demo123@cluster0.mongodb.net/finsentsis?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });