import { db } from '@/server/db';
import { uploadFiles } from '@/server/db/schema/files';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  data?: any;
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method not allowed. Only GET requests are supported.',
    });
  }

  try {
    // const { status } = req.query;

    // Build query with optional filters
    let query = db.select().from(uploadFiles);

    // Add status filter if provided
    // if (status) {
    //   query = query.where(eq(uploadFiles.status, status as string));
    // }

    const files = await query;

    return res.status(200).json({
      data: files,
      message: 'Files fetched successfully',
    });
    // return res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.error('Error fetching files:', error);
    return res.status(500).json({
      message: 'Error fetching files',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
