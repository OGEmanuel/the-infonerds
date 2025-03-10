import { advancedShuffleArray, shuffleArray } from '@/lib/utils';
import { NextResponse } from 'next/server';

// TypeScript interfaces for clarity
interface DriveFile {
  id: string;
  name: string;
  mimeType?: string;
  size?: number;
}

interface DriveResponse {
  files: DriveFile[];
  nextPageToken?: string;
}

interface PaginatedResponse {
  images: Array<{
    id: string;
    name: string;
    viewLink: string;
    downloadLink: string;
    mimeType?: string;
    size?: number;
  }>;
  nextPageToken?: string;
  totalItems?: number;
}

// interface DriveFile {
//   id: string;
//   name: string;
// }

// interface DriveResponse {
//   files: DriveFile[];
//   nextPageToken?: string;
// }

// interface PaginatedResponse {
//   images: {
//     id: string;
//     name: string;
//     viewLink: string;
//     downloadLink: string;
//   }[];
//   nextPageToken?: string;
//   totalItems: number;
// }

const fetchDriveImages = async (
  folderId: string,
  apiKey: string,
  pageSize: number = 20,
  pageToken?: string,
): Promise<PaginatedResponse> => {
  // Construct the base query
  const baseQuery = `'${folderId}' in parents and mimeType contains 'image/'`;

  // Build the URL with pagination parameters
  let url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    baseQuery,
  )}&key=${apiKey}&fields=files(id,name,mimeType,size),nextPageToken&pageSize=${pageSize}`;

  // Add page token if provided
  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to fetch images: ${errorBody}`);
  }

  const data: DriveResponse = await response.json();

  // Optional: Approximate total count using the first request
  // This avoids a separate API call
  const approximateTotalItems = pageToken
    ? undefined // Don't provide total for subsequent pages
    : Math.max(data.files.length * 10, 100); // Rough estimate

  return {
    images: data.files.map(file => ({
      id: file.id,
      name: file.name,
      viewLink: `https://drive.google.com/uc?export=view&id=${file.id}`,
      downloadLink: `https://drive.google.com/uc?export=download&id=${file.id}`,
      // Optional: Include additional metadata if needed
      mimeType: file.mimeType,
      size: file.size,
    })),
    nextPageToken: data.nextPageToken,
    // Use approximate total or undefined for subsequent pages
    totalItems: approximateTotalItems,
  };
};

// const fetchDriveImages = async (
//   folderId: string,
//   apiKey: string,
//   pageSize: number = 20,
//   pageToken?: string,
// ): Promise<PaginatedResponse> => {
//   // Construct the base query
//   const baseQuery = `'${folderId}' in parents and mimeType contains 'image/'`;

//   // Build the URL with pagination parameters
//   let url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
//     baseQuery,
//   )}&key=${apiKey}&fields=files(id,name),nextPageToken&pageSize=${pageSize}`;

//   // Add page token if provided
//   if (pageToken) {
//     url += `&pageToken=${pageToken}`;
//   }

//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error('Failed to fetch images');
//   }

//   const data: DriveResponse = await response.json();

//   // Get total count (separate request because files.list doesn't return total with pagination)
//   const countResponse = await fetch(
//     `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
//       baseQuery,
//     )}&key=${apiKey}&fields=files(id)`,
//   );

//   const countData: { files: { id: string }[] } = await countResponse.json();

//   return {
//     images: data.files.map(file => ({
//       id: file.id,
//       name: file.name,
//       viewLink: `https://drive.google.com/uc?export=view&id=${file.id}`,
//       downloadLink: `https://drive.google.com/uc?export=download&id=${file.id}`,
//     })),
//     nextPageToken: data.nextPageToken,
//     totalItems: countData.files.length,
//   };
// };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folderId = searchParams.get('folderId');
  const pageToken = searchParams.get('pageToken') || undefined;
  const pageSize = Number(searchParams.get('pageSize')) || 20;

  if (!folderId) {
    return NextResponse.json({ error: 'Invalid folder ID' }, { status: 400 });
  }

  // Validate pageSize
  if (pageSize < 1 || pageSize > 100) {
    return NextResponse.json(
      { error: 'Page size must be between 1 and 100' },
      { status: 400 },
    );
  }

  try {
    const result = await fetchDriveImages(
      folderId,
      process.env.GOOGLE_DRIVE_API_KEY as string,
      pageSize,
      pageToken,
    );

    return NextResponse.json({
      images: shuffleArray(result.images),
      nextPageToken: result.nextPageToken,
      totalItems: result.totalItems,
      pageSize,
      currentPage: pageToken ? parseInt(pageToken) : 1,
    });
  } catch (error) {
    console.log('Here is the error', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 },
    );
  }
}
