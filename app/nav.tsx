'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav
      className={`flex justify-center bg-gray-800 ${pathname === '/' ? 'hidden' : 'block'}`}
    >
      <div className="flex max-w-[1440px] flex-col gap-10 py-5 sm:py-20">
        <h1 className="text-center text-2xl font-semibold uppercase text-white">
          The InfoNerds
        </h1>
        <ul className={`hidden items-center justify-between gap-20 sm:flex`}>
          <li>
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/work'}>Work</NavLink>
          </li>
          <li>
            <NavLink href={'/contact'}>Contact</NavLink>
          </li>
        </ul>
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
        'text-5xl transition-all',
        pathname === props.href ? 'text-gray-200' : 'text-gray-400',
      )}
    />
  );
};
