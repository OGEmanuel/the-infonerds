'use client';

import { ReactNode } from 'react';
import ImageFallback from '@/components/image-fallback';

const Gallery = () => {
  return (
    <div>
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
              className="h-[240.36px]"
              src="https://drive.google.com/uc?export=view&id=1IMdy-9FCVizdCr6qMIfet-fuOw7fQwoK"
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
              src="https://drive.google.com/uc?export=view&id=1b6AfjE7bxskAZIUho8uxnRVLch-cMGIg"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[410.55px]"
              src="https://drive.google.com/uc?export=view&id=151Cg5RyEUQg1_3dyx3RlKkY5zc_I1j_k"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[183.64px]"
              src="https://drive.google.com/uc?export=view&id=1_vGMARp5x6KJbJQEa2OS-LHmVDJHsIyT"
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
              className="h-[223.05px]"
              src="https://drive.google.com/uc?export=view&id=1Bpu3GDrhWeu6PLuKj8Mvtoy9dEGoRRNq"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[249.98px]"
              src="https://drive.google.com/uc?export=view&id=1FWV4-WmMLaC8Y8GXZOGhWm3u0DogYug7"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[202.86px]"
              src="https://drive.google.com/uc?export=view&id=1hGUS_Bauy9D3R8GoO6TBGOYo-yVs11h6"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[492.27px]"
              src="https://drive.google.com/uc?export=view&id=1sFLZpf3pqpw39oV5urzIRsfENhJvstFJ"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[186.53px]"
              src="https://drive.google.com/uc?export=view&id=1-iwn4h_yPFgVTrTbJdQ9XQ35vOEPdUG8"
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
