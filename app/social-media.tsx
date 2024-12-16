'use client';

import FBIcon from '@/public/icons/FBIcon';
import IGIcon from '@/public/icons/IGIcon';
import XIcon from '@/public/icons/XIcon';
import YTLogo from '@/public/icons/yt-logo';
import useThemeStore from '@/store/theme-control';
import Link from 'next/link';

const SocialMedia = () => {
  const { theme } = useThemeStore();
  return (
    <div className="flex items-center gap-[11px]">
      <div
        className={`flex rounded-xl border border-[#9CA3AF] ${theme === 'light' ? 'bg-sm-gradient-light' : 'bg-sm-gradient'} p-1`}
      >
        <Link
          href={'https://www.instagram.com/nerdnotnoob?igsh=NDgybnc5zjlleTFy'}
          target="_blank"
        >
          <IGIcon fill={theme === 'light' ? 'black' : 'white'} />
        </Link>
        <Link
          href={'https://x.com/nerdnotnoob?t=vU6ei79mnIUsP8fvZJI9Cg&s=09'}
          target="_blank"
        >
          <XIcon fill={theme === 'light' ? 'black' : 'white'} />
        </Link>
        <Link href={'https://www.facebook.com/nerdnotnoob'} target="_blank">
          <FBIcon fill={theme === 'light' ? 'black' : 'white'} />
        </Link>
        <Link href={'https://www.youtube.com/@nerdnotnoob'} target="_blank">
          <YTLogo fill={theme === 'light' ? 'black' : 'white'} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
