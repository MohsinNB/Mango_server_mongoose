import dotenv from "dotenv";
import { Path } from "mongoose";
require("dotenv").config();

// dotenv.config({ path: path.join(process.cwd(), ".env") });
dotenv.config({ path: "../.env" });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
