import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/admin.js";
import propertyRoutes from "./routes/propertyRoutes.js";

dotenv.config({ path: new URL("./.env", import.meta.url).pathname });
connectDB();

const app = express();
const allowedOrigins = [
  'https://venus-property-group.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/properties", propertyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
