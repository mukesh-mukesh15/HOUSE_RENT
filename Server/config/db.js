import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { seedAdminUser } from "../utils/createAdmin.js";

let mongoServer;

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  try {
    await mongoose.connect(mongoUri, { dbName: "venusdb" });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.log("Starting in-memory MongoDB fallback...");

    try {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri, { dbName: "venusdb" });
      console.log("Connected to in-memory MongoDB");
    } catch (memoryErr) {
      console.error("Failed to start in-memory MongoDB:", memoryErr);
      process.exit(1);
    }
  }

  await seedAdminUser();
};

export default connectDB;
