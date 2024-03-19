import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  out: './drizzle',
  schema: './db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
