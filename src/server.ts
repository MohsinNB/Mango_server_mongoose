import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());
app.listen(5000, () => {
  console.log("App is running");
});

async function server() {
  try {
    // await mongoose.connect();
    console.log(`server is running on ${5000}`);
  } catch (error) {
    console.log("SERVER ERROR", error);
  }
}
server();
