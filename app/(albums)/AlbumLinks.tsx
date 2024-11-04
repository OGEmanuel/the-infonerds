'use client';

import ImgFallback from '@/components/img-fallback';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const AlbumLinks = ({
  src,
  title,
  desc,
  link,
}: {
  src: string;
  title: string;
  desc?: string;
  link: string;
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link href={link} className="flex flex-col gap-5">
      <div className="shadow-[0_4px_6px_rgba(255,_255,_255,_0.1),_0_10px_15px_rgba(255,_255,_255,_0.08) group relative h-full w-full overflow-hidden rounded-lg">
        {loading && <ImgFallback />}
        <Image
          src={src}
          alt="Album Cover"
          className="h-full w-full object-cover object-top transition-transform group-hover:scale-125"
          width={500}
          height={500}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div>
        <p className="text-white">{title}</p>
        {desc && <p className="text-[#6B7280]">{desc}</p>}
      </div>
    </Link>
  );
};

export default AlbumLinks;
