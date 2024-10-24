import { sql } from '@vercel/postgres';

async function migrate() {
  //   const db = drizzle(sql);

  try {
    console.log('Starting migration...');

    await sql`
          CREATE TABLE IF NOT EXISTS upload_files (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            key TEXT NOT NULL,
            status TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `;

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}

async function runMigration() {
  try {
    await migrate();
    console.log('Migration completed');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
