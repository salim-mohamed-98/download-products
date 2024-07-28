import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

const DB_URL = process.env.DB_URL;
if (!DB_URL) throw new Error("DB_URL env is missing");

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/postgres/schema.ts",
  out: "./src/db/postgres",
  dbCredentials: {
    url: DB_URL,
  },
});
