'use client';

// import { UploadButton } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
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

            <Image
              className="h-[369.2px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              src="https://drive.google.com/uc?export=view&id=112b3oP3RIw_EuQQPRIEUFkYO4cS8kMpy"
              // src={portrait1}
              width={500}
              height={500}
              alt="portrait"
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[240.36px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              src="https://drive.google.com/uc?export=view&id=1gd4JjJeXBnu7wbbZXJS4skUkInOVvzTD"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>

          <GridCol>
            <Image
              className="h-[272.11px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              src="https://drive.google.com/uc?export=view&id=1EKyxGWG7AgrVXCiRqqUEqg5Lw7TIKxLm"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <Image
              className="h-[287.47px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              src="https://drive.google.com/uc?export=view&id=1-iwn4h_yPFgVTrTbJdQ9XQ35vOEPdUG8"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[410.55px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              // src={preWed}
              src="https://drive.google.com/uc?export=view&id=151Cg5RyEUQg1_3dyx3RlKkY5zc_I1j_k"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[183.64px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              src="https://drive.google.com/uc?export=view&id=1rt39usHzdsEx_mq3ziGn4eMeKViD3Ds7"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <Image
              className="h-[408.63px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              // src={wedPort}
              src="https://drive.google.com/uc?export=view&id=1OHIZxYa1khDtRWIbG83BixP9GoKCdx-x"
              // https://drive.google.com/file/d/1OHIZxYa1khDtRWIbG83BixP9GoKCdx-x/view?usp=sharing
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[223.05px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              src="https://drive.google.com/uc?export=view&id=17LUH9L6awPAJ7IfIm-W4C3aDkdhP670h"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[249.98px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              src="https://drive.google.com/uc?export=view&id=1ZBRawzjXRZmqwvgBF2BrE5-48CKkDKUj"
              // https://drive.google.com/file/d/1ZBRawzjXRZmqwvgBF2BrE5-48CKkDKUj/view?usp=sharing
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
        </div>
        <div className="grid gap-4">
          <GridCol>
            <Image
              className="h-[202.86px] max-w-full rounded-lg object-cover object-top"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              // https://drive.google.com/file/d/1yHhFk_IgmlndDjGXOcanBxdtf_5jMSN9/view?usp=sharing
              src="https://drive.google.com/uc?export=view&id=1yHhFk_IgmlndDjGXOcanBxdtf_5jMSN9"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[492.27px] max-w-full rounded-lg object-cover object-top"
              // src={secondPort}
              src="https://drive.google.com/uc?export=view&id=1sFLZpf3pqpw39oV5urzIRsfENhJvstFJ"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              width={500}
              height={500}
              alt=""
            />
          </GridCol>
          <GridCol>
            <Image
              className="h-[186.53px] max-w-full rounded-lg"
              // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              src="https://drive.google.com/uc?export=view&id=1idrJ44urGW3MV95IlDCov__QVFpIiBXg"
              width={500}
              height={500}
              alt=""
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
