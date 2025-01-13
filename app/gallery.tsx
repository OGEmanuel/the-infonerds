'use client';

import { ReactNode, SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ImgFallback, { ErrorMessage } from '@/components/img-fallback';

const Gallery = () => {
  return (
    <div className="px-4 pt-4 sm:px-8 sm:pt-8 lg:px-16 lg:pt-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[369.2px]"
              src={
                'https://drive.google.com/uc?export=view&id=112b3oP3RIw_EuQQPRIEUFkYO4cS8kMpy'
              }
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[240.36px] object-top"
              src="https://drive.google.com/uc?export=view&id=1dIHXjduc8v0qpVUHgHPql8IhNHzzInIf"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[272.11px]"
              src="https://drive.google.com/uc?export=view&id=18FMnNXJ-57Lz1sLK5XAgiUJs1CBA-Um8"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[287.47px]"
              src="https://drive.google.com/uc?export=view&id=1se9UWq9IPYyKXn77CBg1JgXWeeFGBMFR"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[410.55px]"
              src="https://drive.google.com/uc?export=view&id=1cir6ihuZ0l1q0uuO4ZUD6BqXcCgSmMsr"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[183.64px] object-center"
              src="https://drive.google.com/uc?export=view&id=11gxRIS7f-mj7ZBvQgAszKMNmxJuL80n2"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[408.63px]"
              src="https://drive.google.com/uc?export=view&id=1OHIZxYa1khDtRWIbG83BixP9GoKCdx-x"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[223.05px] object-right sm:object-top"
              src="https://drive.google.com/uc?export=view&id=1Bpu3GDrhWeu6PLuKj8Mvtoy9dEGoRRNq"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[249.98px]"
              src="https://drive.google.com/uc?export=view&id=1qM-v_15Ok3Dmn4T5Q2O3mwRFQeSQJDeA"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[202.86px]"
              src="https://drive.google.com/uc?export=view&id=1JIdR96n14NVprktcGpEtWUhXXuEro-Dd"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[492.27px]"
              src="https://drive.google.com/uc?export=view&id=1OWqPo6agwz9cn-_zsSgoQcCDlrvMk3mc"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[186.53px] object-top"
              src="https://drive.google.com/uc?export=view&id=1G5rtwo9VjKNTb_iyqkdmSYpLEc7Nr-5h"
            />
          </GridCol>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const GridCol = ({ children }: { children: ReactNode }) => {
  return (
    <div className="group relative h-max max-w-full before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:rounded-lg before:bg-black before:opacity-0 before:blur-sm before:transition-opacity hover:before:opacity-50">
      {children}
    </div>
  );
};

const ImageFallback = ({
  className,
  src,
}: {
  className: string;
  src: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="relative h-full w-full">
      {loading && <ImgFallback />}
      <Image
        className={cn(
          'h-full w-full max-w-full rounded-lg object-cover object-top',
          className,
        )}
        src={src}
        alt={'gallery'}
        width={500}
        height={500}
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
  );
};
