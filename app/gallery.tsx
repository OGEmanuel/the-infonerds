'use client';

// import { UploadButton } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import fallbackImgUrl from '@/public/images/fallback-img.png';
import ImageFallback from '@/components/image-fallback';
// import { useQuery } from '@tanstack/react-query';

// type GalleryImageType = { key: string; name: string; url: string }[];

const Gallery = () => {
  // const [galleryImages, setGalleryImages] = useState<GalleryImageType>([
  //   {
  //     key: '',
  //     name: '',
  //     url: '',
  //   },
  // ]);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['files'],
  //   queryFn: () => fetch('/api/files').then(res => res.json()),
  // });

  // console.log('fetchedData:', data);

  // useEffect(() => {
  //   setGalleryImages(files.files);
  // }, [files]);

  // useEffect(() => {
  //   console.log('Updated galleryImages:', galleryImages);
  // }, [galleryImages]);

  // const getSrc = (name: string) => {
  //   const src = galleryImages
  //     .map(image => image)
  //     .filter(image => image.name === name)[galleryImages.length - 1];
  //   console.log('Top Left Grid:', src);
  //   console.log('gallery:', galleryImages);
  // };

  //   {
  //     "name": "007 dr.jpg",
  //     "size": 1350325,
  //     "key": "uJmLdYiWdZ0ha8OTHMmf0SRDbnUc2FZtg7mvBM6yK1eC4wQH",
  //     "lastModified": 1729558133857,
  //     "serverData": {
  //         "uploadedBy": "infonerd"
  //     },
  //     "url": "https://utfs.io/f/uJmLdYiWdZ0ha8OTHMmf0SRDbnUc2FZtg7mvBM6yK1eC4wQH",
  //     "appUrl": "https://utfs.io/a/i37219nja5/uJmLdYiWdZ0ha8OTHMmf0SRDbnUc2FZtg7mvBM6yK1eC4wQH",
  //     "customId": null,
  //     "type": "image/jpeg",
  //     "fileHash": "fba255a29c55d6095cda5e5c92d739b2"
  // }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <GridCol>
            {/* 
<UploadButton
              className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 ut-allowed-content:text-white"
              endpoint="imageUploader"
              content={{ button: 'Update' }}
              onClientUploadComplete={res => {
                // Do something with the response
                console.log('Files: ', res);
                setGalleryImages([
                  ...galleryImages,
                  { key: res[0].key, name: 'TopLeft', url: res[0].url },
                ]);
                // renameFiles(res, 'LeftTop');
                getSrc('TopLeft');
                alert('Upload Completed');
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
*/}
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
              src="https://drive.google.com/uc?export=view&id=1gd4JjJeXBnu7wbbZXJS4skUkInOVvzTD"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[272.11px]"
              src="https://drive.google.com/uc?export=view&id=1EKyxGWG7AgrVXCiRqqUEqg5Lw7TIKxLm"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[287.47px]"
              src="https://drive.google.com/uc?export=view&id=1idrJ44urGW3MV95IlDCov__QVFpIiBXg"
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
              src="https://drive.google.com/uc?export=view&id=1rt39usHzdsEx_mq3ziGn4eMeKViD3Ds7"
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
              src="https://drive.google.com/uc?export=view&id=17LUH9L6awPAJ7IfIm-W4C3aDkdhP670h"
            />
          </GridCol>
          <GridCol>
            <ImageFallback
              className="h-[249.98px]"
              src="https://drive.google.com/uc?export=view&id=1ZBRawzjXRZmqwvgBF2BrE5-48CKkDKUj"
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <ImageFallback
              className="h-[202.86px]"
              src="https://drive.google.com/uc?export=view&id=1yHhFk_IgmlndDjGXOcanBxdtf_5jMSN9"
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
