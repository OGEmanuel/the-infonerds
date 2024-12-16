import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type LogoProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
};

const Logo = ({ src, alt, className, imageClassName }: LogoProps) => {
  return (
    <div className={cn('relative h-20 w-20', className)}>
      <Image src={src} alt={alt} fill className={cn(imageClassName)} />
    </div>
  );
};

export default Logo;
