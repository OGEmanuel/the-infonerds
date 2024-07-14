import { Toast } from '@/components/ui/toast';
import Albums from './(albums)/albums';
import { ContactForm } from './contact/form';
import Header from './header';
import Highlights from './highlights';
import Nav from './nav';
import Link from 'next/link';
import IGIcon from '@/public/icons/IGIcon';
import XIcon from '@/public/icons/XIcon';
import FBIcon from '@/public/icons/FBIcon';
import { ArrowRightFromLineIcon } from 'lucide-react';
import LogoIcon from '@/public/icons/LogoIcon';

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-max flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-6xl">
            The InfoNerds
          </h1>
          <p className="font-medium text-white">
            Information and Entertainment Personified.
          </p>
        </div>
        <div className="flex items-center gap-[11px]">
          <div className="flex rounded-xl border !border-[#9CA3AF] bg-sm-gradient p-1">
            <Link href={'/'}>
              <IGIcon />
            </Link>
            <Link href={'/'}>
              <XIcon />
            </Link>
            <Link href={'/'}>
              <FBIcon />
            </Link>
          </div>
        </div>
        <div>
          <Link
            href={'/work'}
            className="flex items-center gap-3 text-2xl text-white hover:underline"
          >
            Works
            <ArrowRightFromLineIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
