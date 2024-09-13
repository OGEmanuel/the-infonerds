import { Toast } from '@/components/ui/toast';
import Albums from '../(albums)/albums';
import { ContactForm } from '../contact/form';
import Header from '../header';
import Highlights from '../highlights';
import Nav from '../nav';
import Link from 'next/link';
import IGIcon from '@/public/icons/IGIcon';
import XIcon from '@/public/icons/XIcon';
import FBIcon from '@/public/icons/FBIcon';
import { ArrowRightFromLineIcon } from 'lucide-react';
import LogoIcon from '@/public/icons/LogoIcon';
import SocialMedia from '../social-media';

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex h-max flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-6xl">
            The InfoNerds
          </h1>
          <p className="font-medium text-white">
            Information and Entertainment Personified.
          </p>
        </div>
        <SocialMedia/>
        <div>
          <Link
            href={'/'}
            className="flex items-center gap-3 text-2xl text-white hover:underline"
          >
            Works
            <ArrowRightFromLineIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
