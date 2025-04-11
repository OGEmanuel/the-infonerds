'use client';

import ImgFallback, { ErrorMessage } from '@/components/img-fallback';
import useThemeStore from '@/store/theme-control';
import { CameraIcon, VideoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';

const AlbumLinks = ({
  src,
  title,
  desc,
  link,
  gallery,
}: {
  src: string;
  title: string;
  desc?: string;
  link: string;
  gallery: 'photos' | 'video';
}) => {
  const { theme } = useThemeStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Link href={link} className="flex flex-col gap-5">
      <div className="shadow-[0_4px_6px_rgba(255,_255,_255,_0.1),_0_10px_15px_rgba(255,_255,_255,_0.08) group relative h-full w-full overflow-hidden rounded-lg">
        {loading && <ImgFallback />}
        <Image
          src={src}
          alt="Album Cover"
          className="h-full w-full object-cover object-center transition-transform group-hover:scale-125"
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
      <div>
        <div className="flex items-center gap-2">
          {gallery === 'photos' && (
            <CameraIcon
              className={`h-5 w-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}
            />
          )}
          {gallery === 'video' && (
            <VideoIcon
              className={`h-5 w-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}
            />
          )}
          <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>
            {title}
          </p>
        </div>
        {desc && <p className="text-[#6B7280]">{desc}</p>}
      </div>
    </Link>
  );
};

export default AlbumLinks;
