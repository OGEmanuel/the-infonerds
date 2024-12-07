import { NavLink } from '@/app/nav';
import SocialMedia from '@/app/social-media';
import LogoIcon from '@/public/icons/LogoIcon';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="h-80"></div>
      <div className="fixed bottom-0 left-0 right-0 flex h-80 w-full items-center justify-center gap-6 bg-[#1e1e1e]">
        <div className="relative h-auto w-auto">
          <Image src="/images/logo.png" alt="logo" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            <NavLink href={'/home'}>Home</NavLink>
            <NavLink href={'/'}>Gallery</NavLink>
            <NavLink href={'/contact'}>Bookings</NavLink>
          </div>
          <div className="flex items-center gap-1">
            <p className="flex gap-2 text-center text-sm font-medium text-white">
              <span>NerdNotNoob</span> <span>&#169; {year}</span>
            </p>
          </div>
          <SocialMedia />
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium italic text-white">
              ...a subsidiary of{' '}
              <Link href="/" className="font-bold underline">
                The INFO nerds
              </Link>
            </p>
            <LogoIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
