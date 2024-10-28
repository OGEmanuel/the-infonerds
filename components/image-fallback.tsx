import { cn } from '@/lib/utils';
import Image from 'next/image';

const ImageFallback = ({
  className,
  src,
}: {
  className: string;
  src: string;
}) => {

  return (
    <Image
      className={cn(
        'h-full max-w-full rounded-lg object-cover object-top',
        className,
      )}
      src={src}
      width={500}
      height={500}
      alt={'gallery'}
      onError={e => {
        e.currentTarget.src = '/images/fallback-img.jpg';
      }}
    />
  );
};

export default ImageFallback;
