'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';
import { MobileNav } from './mobile-nav';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav
      className={`flex items-center bg-[#1e1e1e] px-4 lg:justify-center lg:px-0 ${pathname === '/home' ? 'hidden' : 'block'}`}
    >
      <div className="flex max-w-[1440px] basis-full flex-col gap-10 py-5 sm:py-10 lg:basis-auto lg:py-20">
        <h1 className="text-center text-2xl font-semibold uppercase text-white">
          NerdNotNoob
        </h1>
        <ul className={`hidden items-center justify-between gap-20 lg:flex`}>
          <li>
            <NavLink href={'/home'}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/'}>Gallery</NavLink>
          </li>
          <li>
            <NavLink href={'/contact'}>Bookings</NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, 'className'>,
) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        'text-2xl transition-all lg:text-4xl',
        pathname === props.href ? 'text-white' : 'text-white/40',
      )}
    />
  );
};
