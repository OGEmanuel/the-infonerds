import { PhotosData } from '@/app/pictures/[categ]/data';
import { PaginatedResponse } from '@/lib/hooks';
import { shuffleArray } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const folder = searchParams.get('folder');
    const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);
    const nextCursor = searchParams.get('nextCursor') || undefined;

    // Handle missing folder parameter
    if (!folder) {
      return NextResponse.json(
        { error: 'Missing folder parameter' },
        { status: 400 },
      );
    }

    // Check if the folder exists in our data
    if (!PhotosData[folder]) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
    }

    const allImages = PhotosData[folder];

    // Implement pagination logic
    let startIndex = 0;
    if (nextCursor) {
      // Find the index of the item after the cursor
      const cursorIndex = allImages.findIndex(img => img.id === nextCursor);
      startIndex = cursorIndex !== -1 ? cursorIndex + 1 : 0;
    }

    // Get the items for this page
    const endIndex = Math.min(startIndex + pageSize, allImages.length);
    const images = allImages.slice(startIndex, endIndex);

    // Determine if there are more items
    const hasMore = endIndex < allImages.length;

    // Create the next cursor (last image id in the current set)
    const nextPageCursor =
      hasMore && images.length > 0 ? images[images.length - 1].id : undefined;

    // Create and return the paginated response with your exact interface
    const response: PaginatedResponse = {
      images: shuffleArray(images),
      nextCursor: nextPageCursor,
      hasMore,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in photos API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
