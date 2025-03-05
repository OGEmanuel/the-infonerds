'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react';
import { NavLink } from './nav';
import { useState } from 'react';
import useThemeStore from '@/store/theme-control';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeStore();
  return (
    <div className="grid">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon
            className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
          />
        </SheetTrigger>
        <SheetContent
          side={'right'}
          className={`flex w-full items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}
        >
          <ul className={`flex flex-col items-center justify-between gap-10`}>
            <li>
              <button onClick={() => setOpen(!open)}>
                <NavLink href={'/home'}>Home</NavLink>
              </button>
            </li>
            <li>
              <button onClick={() => setOpen(!open)}>
                <NavLink href={'/'}>Gallery</NavLink>
              </button>
            </li>
            <li>
              <button onClick={() => setOpen(!open)}>
                <NavLink href={'/bookings'}>Bookings</NavLink>
              </button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
