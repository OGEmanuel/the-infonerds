import FBIcon from '@/public/icons/FBIcon';
import IGIcon from '@/public/icons/IGIcon';
import XIcon from '@/public/icons/XIcon';
import ThreadIcon from '@/public/icons/thread-icon';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-[11px]">
      <div className="flex rounded-xl border !border-[#9CA3AF] bg-sm-gradient p-1">
        <Link
          href={'https://www.instagram.com/nerdnotnoob?igsh=NDgybnc5zjlleTFy'}
          target="_blank"
        >
          <IGIcon />
        </Link>
        <Link href={'/'} target="_blank">
          <XIcon />
        </Link>
        <Link href={'/'} target="_blank">
          <FBIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
