'use client';

import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import useTripleColumnInfiniteScroll, {
  useInfiniteDriveImages,
} from '@/lib/hooks';
import { ArrowUpIcon, Loader2 } from 'lucide-react';
import ImgFallback, { ErrorMessage } from '@/components/img-fallback';
import useThemeStore from '@/store/theme-control';

interface DriveImage {
  id: string;
  name: string;
  viewLink: string;
  downloadLink: string;
}

enum AlbumCategories {
  WEDDINGS = 'weddings',
  CONCERTS = 'concerts-and-events',
  CORPORATE = 'corporate-events-and-brand-activations',
  PRE_WEDDING = 'pre-wedding-and-proposals',
  PORTRAITS = 'portraits',
  BTS = 'behind-the-scenes',
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

  const { theme } = useThemeStore();

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

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
  } = useInfiniteDriveImages(folderId);

  const {
    columnData,
    observerTarget,
    isError: hookError,
    error: hookErrorDetails,
    isPending: hookPending,
    isFetchingNextPage: hookFetching,
  } = useTripleColumnInfiniteScroll({
    data,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    fetchNextPage,
  });

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
        <span
          className={`ml-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          Loading gallery...
        </span>
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

  console.log(data);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full justify-center gap-5 max-xl:flex-wrap">
        <div className="flex flex-col gap-5">
          {columnData.column1.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {columnData.column2.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {columnData.column3.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
      <div ref={observerTarget} className="h-4 w-full" aria-hidden="true" />
      {isFetchingNextPage && (
        <div className="flex items-center justify-center p-4">
          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          <span
            className={`ml-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
          >
            Loading more...
          </span>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-5 text-gray-600">
        <div className="mt-4 text-center">
          Showing {displayedImages}{' '}
          <span className="sr-only">of {totalAvailableImages}</span> images
        </div>
        <button
          onClick={scrollToTop}
          role="button"
          className={`flex items-center gap-2.5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
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
  const [error, setError] = useState(false);
  const { theme } = useThemeStore();
  return (
    !error && (
      <div className="group relative h-max w-max overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        {loading && <ImgFallback />}
        <Image
          src={image.viewLink}
          alt={image.name}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          quality={75}
          width={400}
          height={0}
          layout="intrinsic"
          onLoad={(event: SyntheticEvent<HTMLImageElement>) => {
            const img = event.target as HTMLImageElement;
            if (img.naturalWidth > 0) {
              setLoading(false);
            }
          }}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
        {error && <ErrorMessage />}
      </div>
    )
  );
};
