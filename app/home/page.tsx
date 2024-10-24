import Link from 'next/link';
import { ArrowRightFromLineIcon } from 'lucide-react';
import SocialMedia from '../social-media';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TheInfoNerds | Home',
  description: 'Information and Entertainment Personified.',
};

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
        <SocialMedia />
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
