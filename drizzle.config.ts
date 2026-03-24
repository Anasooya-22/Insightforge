import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config(); // 🔥 VERY IMPORTANT

export default defineConfig({
  schema: "./shared/schema.ts",   // ✅ MUST match your file path
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});