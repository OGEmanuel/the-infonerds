'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

interface DriveImage {
  id: string;
  name: string;
  viewLink: string;
  downloadLink: string;
  width: number;
  height: number;
}

interface PaginatedResponse {
  images: DriveImage[];
  nextPageToken?: string;
  totalItems: number;
  pageSize: number;
  currentPage: number;
}

type InfiniteData = {
  pages: PaginatedResponse[];
  pageParams: (string | undefined)[];
};

interface FetchImagesParams {
  folderId: string;
  pageSize?: number;
  pageToken?: string;
}

const fetchDriveImagesFromApi = async ({
  folderId,
  pageSize = 20,
  pageToken,
}: FetchImagesParams): Promise<PaginatedResponse> => {
  const params = new URLSearchParams({
    folderId,
    pageSize: pageSize.toString(),
  });

  if (pageToken) {
    params.append('pageToken', pageToken);
  }

  const response = await fetch(`/api/drive-images?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
};

type QueryKey = ['infiniteDriveImages', string, number];

export const useInfiniteDriveImages = (folderId: string, pageSize = 20) => {
  return useInfiniteQuery<
    PaginatedResponse,
    Error,
    InfiniteData,
    QueryKey,
    string | undefined
  >({
    queryKey: ['infiniteDriveImages', folderId, pageSize] as const,
    queryFn: ({ pageParam }) =>
      fetchDriveImagesFromApi({
        folderId,
        pageSize,
        pageToken: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: lastPage => lastPage.nextPageToken,
    enabled: !!folderId,
  });
};
