'use client';

import { photosData } from '@/app/pictures/[categ]/data';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface PaginatedResponse {
  images: photosData[];
  nextCursor?: string;
  hasMore: boolean;
}

type CategoryQueryKey = [string, number];

type ColumnData = {
  column1: photosData[];
  column2: photosData[];
  column3: photosData[];
};

interface InfiniteData<TData> {
  pages: TData[];
  pageParams: (string | undefined)[];
}

export const useInfinitePhotos = (pageSize = 20, queryKey: string) => {
  return useInfiniteQuery<
    PaginatedResponse,
    Error,
    InfiniteData<PaginatedResponse>,
    CategoryQueryKey,
    string | undefined
  >({
    queryKey: [queryKey, pageSize] as const,
    queryFn: async ({ pageParam }) => {
      // Build URL with query parameters
      const url = new URL(
        '/api/photos?folder=' + queryKey,
        window.location.origin,
      );
      url.searchParams.append('pageSize', pageSize.toString());
      if (pageParam) {
        url.searchParams.append('nextCursor', pageParam);
      }

      // Fetch data from API endpoint
      const response = await fetch(url.toString());
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch photos');
      }

      return response.json();
    },
    initialPageParam: undefined,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });
};

export function useTripleColumnScroll({
  allPhotos,
  // chunkSize = 18,
}: {
  allPhotos: photosData[];
  // chunkSize?: number;
}) {
  const [columnData, setColumnData] = useState<ColumnData>({
    column1: [],
    column2: [],
    column3: [],
  });

  // const [currentPage, setCurrentPage] = useState(0);
  // // Use a Set for processedItems for efficient lookups
  const processedItems = useRef<Set<string>>(new Set());
  // const observerTarget = useRef<HTMLDivElement>(null);
  // const observer = useRef<IntersectionObserver | null>(null);

  // const getNextChunk = useCallback(() => {
  //   const start = currentPage * chunkSize;
  //   const end = start + chunkSize;
  //   return allPhotos.slice(start, end);
  // }, [allPhotos, currentPage, chunkSize]);

  const distributeItemsEvenly = useCallback((items: photosData[]) => {
    // Filter out items already processed.
    const newItems = items.filter(item => !processedItems.current.has(item.id));
    if (newItems.length === 0) return;

    setColumnData(prev => {
      const newState = { ...prev };

      newItems.forEach(item => {
        processedItems.current.add(item.id);

        const columnLengths = [
          newState.column1.length,
          newState.column2.length,
          newState.column3.length,
        ];

        const minLength = Math.min(...columnLengths);
        const candidateColumns = ['column1', 'column2', 'column3'].filter(
          (_, index) => columnLengths[index] === minLength,
        ) as (keyof ColumnData)[];

        // Randomly pick one of the shortest columns
        const targetColumn =
          candidateColumns[Math.floor(Math.random() * candidateColumns.length)];

        // Append the item to the chosen column
        newState[targetColumn] = [...newState[targetColumn], item];
      });

      return newState;
    });
  }, []);

  distributeItemsEvenly(allPhotos);

  // const loadNextPage = useCallback(() => {
  //   // Check if we've already processed all items
  //   const totalProcessed = processedItems.current.size;
  //   if (totalProcessed >= allPhotos.length) {
  //     console.log('All items have been processed.');
  //     return;
  //   }

  //   const nextChunk = getNextChunk();
  //   if (nextChunk.length > 0) {
  //     distributeItemsEvenly(nextChunk);
  //     setCurrentPage(prev => prev + 1);
  //   } else {
  //     console.warn(
  //       'getNextChunk returned empty, but there might be more items.',
  //     );
  //   }
  // }, [allPhotos.length, getNextChunk, distributeItemsEvenly]);

  // const handleObserver = useCallback(
  //   (entries: IntersectionObserverEntry[]) => {
  //     const [entry] = entries;
  //     // Trigger loadNextPage if observer target is intersecting AND there are more items to process
  //     const totalProcessed = processedItems.current.size;
  //     if (entry.isIntersecting && totalProcessed < allPhotos.length) {
  //       console.log('Observer intersecting, loading next page...');
  //       loadNextPage();
  //     }
  //   },
  //   [loadNextPage, allPhotos.length],
  // );

  // // Effect to set up and tear down the IntersectionObserver
  // useEffect(() => {
  //   const element = observerTarget.current;
  //   if (!element) return;

  //   // Disconnect previous observer if it exists
  //   if (observer.current) {
  //     observer.current.disconnect();
  //   }

  //   // Create new observer
  //   observer.current = new IntersectionObserver(handleObserver, {
  //     root: null,
  //     rootMargin: '0px 0px 100px 0px',
  //     threshold: 0.1, // Trigger when 10% of the target is visible
  //   });

  //   // Start observing the target element
  //   observer.current.observe(element);

  //   // Cleanup function: disconnect observer when component unmounts or dependencies change
  //   return () => {
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //   };
  // }, [handleObserver]);

  // Initial load of the first chunk when the component mounts or allPhotos changes
  // useEffect(() => {
  //   // Only perform initial load if allPhotos is available and no data has been loaded yet
  //   if (allPhotos.length > 0 && processedItems.current.size === 0) {
  //     console.log('Initial load triggered.');
  //     loadNextPage();
  //   }
  //   // Dependency array includes allPhotos to re-trigger initial load if allPhotos changes
  //   // This is important if allPhotos is fetched asynchronously.
  // }, [allPhotos, loadNextPage]);

  const totalDisplayed =
    columnData.column1.length +
    columnData.column2.length +
    columnData.column3.length;

  const hasMore = processedItems.current.size < allPhotos.length;

  // console.log('currentPage', currentPage);
  // console.log('totalPages', allPhotos.length / chunkSize);

  return {
    columnData,
    // observerTarget,
    totalDisplayed,
    hasMore,
    // loadNextPage,
  };
}

// export function useTripleColumnScroll({
//   allPhotos,
//   chunkSize = 18,
// }: {
//   allPhotos: photosData[];
//   chunkSize?: number;
// }) {
//   const [columnData, setColumnData] = useState<ColumnData>({
//     column1: [],
//     column2: [],
//     column3: [],
//   });

//   console.log('allPhotos', allPhotos);

//   const [currentPage, setCurrentPage] = useState(0);
//   // Use a Set for processedItems for efficient lookups
//   const processedItems = useRef<Set<string>>(new Set());
//   const observerTarget = useRef<HTMLDivElement>(null);
//   const observer = useRef<IntersectionObserver | null>(null);

//   // Memoize totalPages to prevent recalculation on every render if allPhotos doesn't change
//   const totalPages = Math.ceil(allPhotos.length / chunkSize);

//   const getNextChunk = useCallback(() => {
//     const start = currentPage * chunkSize;
//     const end = start + chunkSize;
//     return allPhotos.slice(start, end);
//   }, [allPhotos, currentPage, chunkSize]); // Add allPhotos to dependencies

//   const distributeItemsEvenly = useCallback((items: photosData[]) => {
//     // Filter out items already processed.
//     const newItems = items.filter(item => !processedItems.current.has(item.id));
//     if (newItems.length === 0) return;

//     setColumnData(prev => {
//       const newState = { ...prev };

//       newItems.forEach(item => {
//         processedItems.current.add(item.id);

//         const columnLengths = [
//           newState.column1.length,
//           newState.column2.length,
//           newState.column3.length,
//         ];

//         const minLength = Math.min(...columnLengths);
//         const candidateColumns = ['column1', 'column2', 'column3'].filter(
//           (_, index) => columnLengths[index] === minLength,
//         ) as (keyof ColumnData)[];

//         // Randomly pick one of the shortest columns
//         const targetColumn =
//           candidateColumns[Math.floor(Math.random() * candidateColumns.length)];

//         // Append the item to the chosen column
//         newState[targetColumn] = [...newState[targetColumn], item];
//       });

//       return newState;
//     });
//   }, []); // Dependencies are stable (processedItems.current and setColumnData)

//   const loadNextPage = useCallback(() => {
//     // Check if we've already processed all items
//     const totalProcessed = processedItems.current.size;
//     if (totalProcessed >= allPhotos.length) {
//       console.log('All items have been processed.');
//       return;
//     }

//     const nextChunk = getNextChunk();
//     if (nextChunk.length > 0) {
//       distributeItemsEvenly(nextChunk);
//       setCurrentPage(prev => prev + 1);
//     } else {
//       // This shouldn't happen if our logic is correct, but just in case
//       console.warn(
//         'getNextChunk returned empty but there should be more items',
//       );
//     }
//   }, [allPhotos.length, getNextChunk, distributeItemsEvenly]);

//   const handleObserver = useCallback(
//     (entries: IntersectionObserverEntry[]) => {
//       const [entry] = entries;
//       // Trigger loadNextPage if observer target is intersecting AND there are more items to process
//       const totalProcessed = processedItems.current.size;
//       if (entry.isIntersecting && totalProcessed < allPhotos.length) {
//         console.log('Observer intersecting, loading next page...');
//         loadNextPage();
//       }
//     },
//     [loadNextPage, allPhotos.length], // Dependencies to ensure up-to-date state
//   );

//   // Effect to set up and tear down the IntersectionObserver
//   useEffect(() => {
//     const element = observerTarget.current;
//     if (!element) return;

//     // Disconnect previous observer if it exists
//     if (observer.current) {
//       observer.current.disconnect();
//     }

//     // Create new observer
//     observer.current = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: '0px 0px 100px 0px',
//       threshold: 0.1, // Trigger when 10% of the target is visible
//     });

//     // Start observing the target element
//     observer.current.observe(element);

//     // Cleanup function: disconnect observer when component unmounts or dependencies change
//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, [handleObserver]); // Re-run if handleObserver changes (due to its dependencies)

//   // Initial load of the first chunk when the component mounts
//   useEffect(() => {
//     if (columnData.column1.length === 0 && allPhotos.length > 0) {
//       console.log('Initial load triggered.');
//       loadNextPage();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // Empty dependency array means this runs once on mount

//   const totalDisplayed =
//     columnData.column1.length +
//     columnData.column2.length +
//     columnData.column3.length;

//   const hasMore = processedItems.current.size < allPhotos.length;

//   return {
//     columnData,
//     observerTarget,
//     totalDisplayed,
//     hasMore,
//     loadNextPage, // Expose if you need a manual trigger for "load more" button
//   };
// }
