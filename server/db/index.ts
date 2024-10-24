import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const db = drizzle(sql);

// lib/db.ts

// Create drizzle database instance
// export const db = drizzle(pool, { schema });
