'use client';

import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
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
                'https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161781/007_dr_veasut.jpg'
              }
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[240.36px] object-top"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161866/OBlovestory_5_rgmxf2.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[272.11px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161810/Pre-wedding_11_hemlwm.jpg"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[287.47px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742510181/POM_0760_bsld7e.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[410.55px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161757/The_Future_Awards-1303_asi1xo.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[183.64px] object-center"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161766/IMG_0009_dmkdqd.jpg"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[408.63px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161889/001_biugab.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[223.05px] object-right sm:object-top"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161882/IMG_0742_absyeo.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[249.98px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742510179/IMG_6823_yqmrx6.jpg"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[202.86px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161865/IMG_2816_dysxop.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[492.27px]"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742509599/Tiwa_02-2_pgez5p.jpg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[186.53px] object-top"
              src="https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1742161753/The_Future_Awards-1828_twfrri.jpg"
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
