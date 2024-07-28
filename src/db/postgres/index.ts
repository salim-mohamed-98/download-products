import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DB_URL!,
});

import * as schema from "./schema";

export const db = drizzle(pool, { schema: schema });
