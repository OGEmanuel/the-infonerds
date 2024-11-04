'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInfiniteDriveImages } from '@/lib/hooks';
import { ArrowUpIcon, Loader2 } from 'lucide-react';
import ImgFallback from '@/components/img-fallback';
interface DriveImage {
  id: string;
  name: string;
  viewLink: string;
  downloadLink: string;
}

enum AlbumCategories {
  WEDDINGS = 'weddings',
  CONCERTS = 'concerts',
  CORPORATE = 'corporate',
  PRE_WEDDING = 'pre-wedding',
  PORTRAITS = 'portraits',
  BTS = 'bts',
}

const weddings = '167RTvpUdedkMArlV1d4jLXuIXVC9PDti';
const concerts = '1LicKXu80UvaP8yWNsYzFhKKjKafb8Xu-';
const corporate = '1Q3s7DhrgyP5QqGnhrp0HoomaX-0tiiLu';
const preWedding = '1dg0i94eAz_yzwGqExsUIm90q3vZHntSo';
const portraits = '1WMxnvlAGRAO6M50ELu5-dfRCAuFIFL_X';
const bts = '1ruAUBBbgwSABWAw9bG1xJo78jo3ivgzh';

const Categories = ({ page }: { page: string }) => {
  const { WEDDINGS, CONCERTS, CORPORATE, PRE_WEDDING, PORTRAITS, BTS } =
    AlbumCategories;

  let folderId = weddings;

  if (page === WEDDINGS) {
    folderId = weddings;
  } else if (page === CONCERTS) {
    folderId = concerts;
  } else if (page === CORPORATE) {
    folderId = corporate;
  } else if (page === PRE_WEDDING) {
    folderId = preWedding;
  } else if (page === PORTRAITS) {
    folderId = portraits;
  } else if (page === BTS) {
    folderId = bts;
  }

  const observerTarget = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
  } = useInfiniteDriveImages(folderId);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        <span className="ml-2 text-white">Loading gallery...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">Error: {error.message}</div>
    );
  }

  // Get the total number of loaded images
  const loadedImages =
    data?.pages.reduce((total, page) => total + page.images.length, 0) ?? 0;

  // Get the total number of available images from the first page response
  const totalAvailableImages = data?.pages[0]?.totalItems ?? 0;

  // Make sure we don't show a number larger than the total available
  const displayedImages = Math.min(loadedImages, totalAvailableImages);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.pages.map(page =>
          page.images.map(image => <ImageCard key={image.id} image={image} />),
        )}
      </div>
      <div ref={observerTarget} className="h-4 w-full" aria-hidden="true" />
      {isFetchingNextPage && (
        <div className="flex items-center justify-center p-4">
          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          <span className="ml-2 text-white">Loading more...</span>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-5 text-gray-600">
        <div className="mt-4 text-center">
          Showing {displayedImages} of {totalAvailableImages} images
        </div>
        <button
          onClick={scrollToTop}
          role="button"
          className="flex items-center gap-2.5 text-gray-300"
        >
          <ArrowUpIcon />
          <p className="text-sm leading-[16.94px]">Back to Top</p>
          <span className="sr-only">Scroll to top</span>
        </button>
      </div>
    </div>
  );
};

export default Categories;

const ImageCard = ({ image }: { image: DriveImage }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      {loading && <ImgFallback />}
      <Image
        src={image.viewLink}
        alt={image.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
        quality={75}
        onLoadingComplete={() => setLoading(false)}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-40">
        <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="truncate text-lg font-semibold">{image.name}</h3>
        </div>
      </div>
    </div>
  );
};
