'use client';

import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import blackLogo from '@/public/images/logo-black.png';
import whiteLogo from '@/public/images/logo-white.png';
import useThemeStore from '@/store/theme-control';

type LogoProps = {
  src?: StaticImageData;
  alt?: string;
  className?: string;
  imageClassName?: string;
};

const Logo = ({ src, alt = 'Logo', className, imageClassName }: LogoProps) => {
  const { theme } = useThemeStore();
  return (
    <div className={cn('relative h-20 w-20', className)}>
      <Image
        src={!src ? (theme === 'light' ? blackLogo : whiteLogo) : src}
        alt={alt}
        fill
        className={cn(imageClassName)}
      />
    </div>
  );
};

export default Logo;
