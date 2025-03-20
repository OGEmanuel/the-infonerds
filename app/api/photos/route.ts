import { NextResponse } from 'next/server';
import { Photo } from '@/lib/hooks';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  secure_url?: string;
  format: string;
  width: number;
  height: number;
  created_at: string;
}

interface PaginatedResponse {
  images: Photo[];
  nextCursor?: string;
  hasMore: boolean;
}

interface FetchPhotosParams {
  pageSize?: number;
  nextCursor?: string;
  folder: string;
}

export async function getPhotos({
  pageSize = 20,
  nextCursor,
  folder,
}: FetchPhotosParams): Promise<PaginatedResponse> {
  try {
    const exactFolderPath = `Website Contents/Photo Gallery/${folder}`;

    // Configure the search with properly handling Cloudinary's cursor-based pagination
    let searchQuery = cloudinary.search
      .expression(`folder="${exactFolderPath}"`)
      .sort_by('created_at', 'desc')
      .max_results(pageSize);

    // Add next_cursor if it exists
    if (nextCursor) {
      searchQuery = searchQuery.next_cursor(nextCursor);
    }

    const result = await searchQuery.execute();

    console.log(`Found ${result.resources.length} photos for this page`);

    // If that returns empty, try without quotes
    if (result.resources.length === 0) {
      let alternativeQuery = cloudinary.search
        .expression(`folder:${exactFolderPath}`)
        .sort_by('created_at', 'desc')
        .max_results(pageSize);

      if (nextCursor) {
        alternativeQuery = alternativeQuery.next_cursor(nextCursor);
      }

      const resultAlt = await alternativeQuery.execute();

      console.log(
        `Alternative search found ${resultAlt.resources.length} wedding photos`,
      );

      // Map Cloudinary resources to our Photo interface
      const images = resultAlt.resources.map(
        (resource: CloudinaryResource) => ({
          id: resource.asset_id,
          public_id: resource.public_id,
          url:
            resource.secure_url ||
            `https://res.cloudinary.com/your-cloud-name/image/upload/q_auto,f_auto,c_limit/${resource.public_id}`,
          format: resource.format,
          width: resource.width,
          height: resource.height,
          created_at: resource.created_at,
        }),
      );

      return {
        images,
        nextCursor: resultAlt.next_cursor,
        hasMore: !!resultAlt.next_cursor,
      };
    }

    // Map Cloudinary resources to our WeddingPhoto interface
    const images = result.resources.map((resource: CloudinaryResource) => ({
      id: resource.asset_id,
      public_id: resource.public_id,
      url:
        resource.secure_url ||
        `https://res.cloudinary.com/your-cloud-name/image/upload/q_auto,f_auto,c_limit/${resource.public_id}`,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      created_at: resource.created_at,
    }));

    return {
      images,
      nextCursor: result.next_cursor,
      hasMore: !!result.next_cursor,
    };
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw new Error(
      `Failed to fetch photos: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}

// app/api/wedding-photos/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);
  const nextCursor = searchParams.get('nextCursor') || undefined;
  const folder = searchParams.get('folder') || '1. Wedding Photos';

  try {
    const images = await getPhotos({ pageSize, nextCursor, folder });
    return NextResponse.json(images);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: 'Unknown error occurred' },
      { status: 500 },
    );
  }
}
