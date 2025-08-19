'use client';

import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import { useTripleColumnScroll } from '@/lib/hooks';
import { ArrowUpIcon } from 'lucide-react';
import ImgFallback, { ErrorMessage } from '@/components/img-fallback';
import useThemeStore from '@/store/theme-control';
import { PhotosData, photosData } from './data';
import { shuffleArray } from '@/lib/utils';

enum AlbumCategories {
  WEDDINGS = 'weddings',
  CONCERTS = 'concerts-and-events',
  CORPORATE = 'corporate-events-and-brand-activations',
  PRE_WEDDING = 'pre-wedding-and-proposals',
  PORTRAITS = 'portraits',
  BTS = 'behind-the-scenes',
}

const weddings = 'weddings';
const concerts = 'concerts';
const corporate = 'coperates';
const preWedding = 'proposals';
const portraits = 'portraits';
const bts = 'bts';

const Categories = ({ page }: { page: string }) => {
  const { WEDDINGS, CONCERTS, CORPORATE, PRE_WEDDING, PORTRAITS, BTS } =
    AlbumCategories;

  const { theme } = useThemeStore();

  let currentPhotosData: photosData[] = PhotosData.weddings;

  if (page === WEDDINGS) {
    currentPhotosData = PhotosData[weddings];
  } else if (page === CONCERTS) {
    currentPhotosData = PhotosData[concerts];
  } else if (page === CORPORATE) {
    currentPhotosData = PhotosData[corporate];
  } else if (page === PRE_WEDDING) {
    currentPhotosData = PhotosData[preWedding];
  } else if (page === PORTRAITS) {
    currentPhotosData = PhotosData[portraits];
  } else if (page === BTS) {
    currentPhotosData = PhotosData[bts];
  }

  const shuffledPhotos = shuffleArray(currentPhotosData);

  const { columnData, totalDisplayed } = useTripleColumnScroll({
    allPhotos: shuffledPhotos,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
      <div className="flex flex-col items-center justify-center gap-5 text-gray-600">
        <div className="flex flex-col items-center gap-1">
          <div className="mt-4 text-center">
            Showing {totalDisplayed}{' '}
            <span className="">of {currentPhotosData.length}</span> images
          </div>
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

const ImageCard = ({ image }: { image: photosData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    !error && (
      <div className="group relative h-max w-max overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        {loading && <ImgFallback className="h-80" />}
        <Image
          src={image.url.replace('/upload/', '/upload/q_auto,f_auto,c_limit/')}
          alt={image.format || 'folder'}
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
