import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
const app = express();

app.use(cors());
app.use(express.json());
app.listen(config.port, () => {
  console.log(`App is running on port ${5000}`);
});

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log(`connected to database `);
  } catch (error) {
    console.log(`server error ${error}`);
  }
}
server();
