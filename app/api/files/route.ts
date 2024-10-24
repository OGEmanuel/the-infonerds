import { db } from '@/server/db';
import { uploadFiles } from '@/server/db/schema/files';
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';
// import { db } from '@/lib/db';

export async function GET() {
  try {
    // console.log('Starting files fetch...');

    // Test database connection
    // try {
    //   const testQuery = await db.select({ now: sql`NOW()` });
    //   console.log('Database connection successful:', testQuery);
    // } catch (e) {
    //   console.error('Database connection test failed:', e);
    //   throw new Error('Database connection failed');
    // }

    // Fetch files
    const files = await db.select().from(uploadFiles);
    console.log('Files fetched:', files);

    return NextResponse.json({
      data: files,
      message: 'Files fetched successfully',
    });
  } catch (error) {
    console.error('Error in GET /api/files:', error);
    return NextResponse.json(
      {
        message: 'Error fetching files',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
