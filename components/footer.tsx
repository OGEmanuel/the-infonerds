import { NavLink } from '@/app/nav';
import SocialMedia from '@/app/social-media';
import LogoIcon from '@/public/icons/LogoIcon';
import useThemeStore from '@/store/theme-control';
import Link from 'next/link';
import Logo from './logo';
import blackLogo from '@/public/images/logo-black.png';
import whiteLogo from '@/public/images/logo-white.png';

const Footer = () => {
  const { theme } = useThemeStore();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="h-[30rem] sm:h-80"></div>
      <div
        className={`fixed bottom-0 left-0 right-0 flex h-[30rem] w-full flex-col items-center justify-center gap-3 ${theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#1e1e1e]'} sm:h-80 sm:flex-row sm:gap-6`}
      >
        <Logo
          src={theme === 'light' ? blackLogo : whiteLogo}
          alt="Nerd Not Noob Logo"
        />
        <div
          className={`flex flex-col items-center justify-center gap-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          <ul className="flex gap-6">
            <li className="w-20 text-center sm:w-40">
              <NavLink href={'/home'}>Home</NavLink>
            </li>
            <li className="w-20 text-center sm:w-40">
              <NavLink href={'/'}>Gallery</NavLink>
            </li>
            <li className="w-20 text-center sm:w-40">
              <NavLink href={'/contact'}>Bookings</NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-1">
            <p className="flex gap-2 text-center text-sm font-medium lowercase">
              <span>Nerd Not Noob</span> <span>&#169; {year}</span>
            </p>
          </div>
          <SocialMedia />
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium italic">
              ...a subsidiary of{' '}
              <Link href="/" className="font-bold underline">
                the INFO nerds
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
