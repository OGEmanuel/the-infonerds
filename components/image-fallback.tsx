import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

const ImageFallback = ({
  className,
  src,
}: {
  className: string;
  src: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Skeleton className="h-full w-full animate-pulse" />
  ) : (
    <Image
      className={cn(
        'h-full max-w-full rounded-lg object-cover object-top',
        className,
      )}
      src={src}
      width={500}
      height={500}
      alt={'gallery'}
      onLoad={() => {
        setIsLoading(false);
      }}
      onError={e => {
        e.currentTarget.src = '/images/fallback-img.jpg';
      }}
    />
  );
};

export default ImageFallback;
