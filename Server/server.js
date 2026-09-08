import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/admin.js";
import propertyRoutes from "./routes/propertyRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from Server directory, and fallback to root if present
dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config();

connectDB();

const app = express();

const configuredOrigins = [
  process.env.CLIENT_URL,
  "https://venus-property-group.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, Postman, server-to-server)
      if (!origin) return callback(null, true);

      // Allow any localhost or local IP port
      if (
        origin.startsWith("http://localhost:") ||
        origin.startsWith("http://127.0.0.1:")
      ) {
        return callback(null, true);
      }

      // Allow all Vercel deployment preview and production domains
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      // Allow origins explicitly listed in configuration
      if (configuredOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Root health-check endpoint for Render
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Venus Property API is running smoothly on Render!",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/admin", adminRoutes);
app.use("/api/properties", propertyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});

