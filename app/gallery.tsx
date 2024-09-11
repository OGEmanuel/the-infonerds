import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
