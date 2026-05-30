import mongoose from "mongoose";
import {config} from "./config.js"
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.MONGO_URI);
    console.log("Database is Connected with Server")
    ;
  } catch (error) {
    console.error("MongoDB connection FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;
