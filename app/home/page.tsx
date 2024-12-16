import Link from 'next/link';
import { ArrowRightFromLineIcon } from 'lucide-react';
import SocialMedia from '../social-media';
import { Metadata } from 'next';
import Image from 'next/image';
import Logo from '@/components/logo';
import SectionWrapper from './section-wrapper';

export const metadata: Metadata = {
  title: 'Nerd Not Noob | Home',
  description: 'Information and Entertainment Personified.',
};

export default function Home() {
  return (
    <SectionWrapper>
      <div className="flex h-max flex-col items-center justify-center gap-5">
        {/* <div className="relative h-auto w-auto">
          <Image src="/images/logo.png" alt="logo" width={180} height={180} />
        </div> */}
        <Logo />
        <div className="flex flex-col gap-3 text-center">
          <h1 className={`text-3xl font-semibold sm:text-6xl`}>
            Nerd Not Noob
          </h1>
          <p className="font-medium">
            Information and Entertainment Personified.
          </p>
        </div>
        <SocialMedia />
        <div>
          <Link
            href={'/'}
            className="flex items-center gap-3 text-2xl hover:underline"
          >
            Gallery
            <ArrowRightFromLineIcon />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
