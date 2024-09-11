'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { NavLink } from './nav';
import { useState } from 'react';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon className="text-white" />
        </SheetTrigger>
        <SheetContent
          side={'right'}
          className="flex w-full items-center justify-center bg-gray-800"
        >
          <ul className={`flex flex-col items-center justify-between gap-10`}>
            <li>
              <button onClick={() => setOpen(!open)}>
                <NavLink href={'/home'}>Home</NavLink>
              </button>
            </li>
            <li>
              <button onClick={() => setOpen(!open)}>
                <NavLink href={'/'}>Work</NavLink>
              </button>
            </li>
            <li>
              <button onClick={() => setOpen(!open)}>
                <NavLink href={'/contact'}>Contact</NavLink>
              </button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
