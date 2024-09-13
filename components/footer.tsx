import { NavLink } from '@/app/nav';
import SocialMedia from '@/app/social-media';
import LogoIcon from '@/public/icons/LogoIcon';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="h-60"></div>
      <div className="fixed bottom-0 left-0 right-0 flex h-60 flex-col items-center justify-center gap-6 bg-[#1e1e1e]">
        <div className="flex gap-6">
          <NavLink href={'/home'}>Home</NavLink>
          <NavLink href={'/'}>Gallery</NavLink>
          <NavLink href={'/contact'}>Bookings</NavLink>
        </div>
        <div className="flex items-center gap-6">
          <p className="flex flex-col gap-2 text-center text-sm font-medium text-white">
            <span>The Infonerds</span> <span>&#169; {year}</span>
          </p>
          <LogoIcon />
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
