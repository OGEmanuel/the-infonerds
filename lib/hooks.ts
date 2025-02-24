'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useCallback, useEffect, useState } from 'react';

interface UseTripleColumnInfiniteScrollProps {
  data: InfiniteData | undefined;
  isError: boolean;
  error: Error | null;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isPending: boolean;
  fetchNextPage: () => void;
}

interface ColumnData {
  column1: DriveImage[];
  column2: DriveImage[];
  column3: DriveImage[];
}

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

function useTripleColumnInfiniteScroll({
  data,
  isError,
  error,
  hasNextPage,
  isFetchingNextPage,
  isPending,
  fetchNextPage,
}: UseTripleColumnInfiniteScrollProps) {
  const [columnData, setColumnData] = useState<ColumnData>({
    column1: [],
    column2: [],
    column3: [],
  });

  const observerTarget = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const processedItems = useRef<Set<string | number>>(new Set());

  const distributeItemsEvenly = useCallback((items: DriveImage[]) => {
    const newItems = items.filter(item => !processedItems.current.has(item.id));

    if (newItems.length === 0) return;

    setColumnData(prev => {
      // Create a copy of the current state
      const newState = { ...prev };

      newItems.forEach(item => {
        processedItems.current.add(item.id);

        // Get current lengths of all columns
        const columnLengths = [
          newState.column1.length,
          newState.column2.length,
          newState.column3.length,
        ];

        // Find the minimum length
        const minLength = Math.min(...columnLengths);

        // Get all columns that have the minimum length
        const candidateColumns = ['column1', 'column2', 'column3'].filter(
          (_, index) => columnLengths[index] === minLength,
        ) as ('column1' | 'column2' | 'column3')[];

        // Randomly choose from the shortest columns
        const targetColumn =
          candidateColumns[Math.floor(Math.random() * candidateColumns.length)];

        // Add the item to the chosen column
        newState[targetColumn] = [...newState[targetColumn], item];
      });

      return newState;
    });
  }, []);

  // Process new data when it arrives
  useEffect(() => {
    if (data?.pages) {
      const allItems = data.pages.flatMap(page => page.images);
      distributeItemsEvenly(allItems);
    }
  }, [data, distributeItemsEvenly]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  useEffect(() => {
    const element = observerTarget.current;

    if (!element) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '100px',
      threshold: 0.1,
    });

    observer.current.observe(element);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleObserver]);

  return {
    columnData,
    observerTarget,
    isError,
    error,
    isPending,
    isFetchingNextPage,
  };
}

export default useTripleColumnInfiniteScroll;
