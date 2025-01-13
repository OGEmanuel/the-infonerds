'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';
import { MobileNav } from './mobile-nav';
import useThemeStore from '@/store/theme-control';
import Logo from '@/components/logo';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import blackLogo from '@/public/images/logo-black.png';
import whiteLogo from '@/public/images/logo-white.png';
import { Button } from '@/components/ui/button';

const Nav = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();
  return (
    <nav
      className={`relative flex items-center ${theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#1e1e1e]'} px-4 lg:justify-center lg:px-0 ${pathname === '/home' ? 'hidden' : 'block'}`}
    >
      <div className="flex max-w-[1440px] basis-full flex-col items-center gap-10 py-5 sm:py-10 lg:basis-auto lg:py-20">
        <Logo
          src={theme === 'light' ? blackLogo : whiteLogo}
          alt="Nerd Not Noob Logo"
        />
        <ul className={`hidden items-center justify-between gap-20 lg:flex`}>
          <li className="w-40 text-center">
            <NavLink href={'/home'}>Home</NavLink>
          </li>
          <li className="w-40 text-center">
            <NavLink href={'/'}>Gallery</NavLink>
          </li>
          <li className="w-40 text-center">
            <NavLink href={'/contact'}>Bookings</NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="absolute left-5 top-5 flex items-center gap-1">
        {theme !== 'light' && (
          <Button size={'icon'} onClick={toggleTheme}>
            <SunIcon />
          </Button>
        )}
        {theme === 'light' && (
          <Button
            size={'icon'}
            onClick={toggleTheme}
            className="bg-white hover:bg-white/80"
          >
            <MoonIcon className="text-black" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Nav;

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, 'className'>,
) => {
  const pathname = usePathname();
  const { theme } = useThemeStore();

  return (
    <Link
      {...props}
      className={cn(
        'text-2xl transition-all lg:text-4xl',
        pathname === props.href
          ? `${theme === 'light' ? 'text-black' : 'text-white'}`
          : `${theme === 'light' ? 'text-black/40' : 'text-white/40'}`,
      )}
    />
  );
};
