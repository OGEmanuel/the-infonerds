'use client';

import Logo from '@/components/logo';
import useThemeStore from '@/store/theme-control';
import { useEffect, useRef } from 'react';
import cadburyBlack from '@/public/images/Cadbury Black.png';
import cadburyWhite from '@/public/images/Cadbury White.png';
import danoBlack from '@/public/images/Dano Black.png';
import danoWhite from '@/public/images/Dano White.png';
import infinixBlack from '@/public/images/Infinix Black.png';
import infinixWhite from '@/public/images/Infinix White.png';
import verveBlack from '@/public/images/Verve Black.png';
import verveWhite from '@/public/images/Verve White.png';
import whoBlack from '@/public/images/WHO Black.png';
import whoWhite from '@/public/images/WHO White.png';
import qoraWHite from '@/public/images/Qoray white.png';
import qoraBlack from '@/public/images/Qoray black.png';
import tffaBlack from '@/public/images/tffa black.png';
import tffaWhite from '@/public/images/tffa white.png';
import Image from 'next/image';

const Marquee = () => {
  const scrollersRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const scrollersDarkRef = useRef<HTMLDivElement>(null);
  const scrollerDarkInnerRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeStore();

  const addAnimation = () => {
    if (scrollersRef.current) {
      scrollersRef.current.setAttribute('data-animated', 'true');
      if (scrollerInnerRef.current) {
        const scrollerContent = Array.from(scrollerInnerRef.current.children);

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as HTMLDivElement).setAttribute(
            'aria-hidden',
            'true',
          );
          scrollerInnerRef.current?.appendChild(duplicatedItem);
        });
      }
    }

    if (scrollersDarkRef.current) {
      scrollersDarkRef.current.setAttribute('data-animated', 'true');
      if (scrollerDarkInnerRef.current) {
        const scrollerContent = Array.from(
          scrollerDarkInnerRef.current.children,
        );

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as HTMLDivElement).setAttribute(
            'aria-hidden',
            'true',
          );
          scrollerDarkInnerRef.current?.appendChild(duplicatedItem);
        });
      }
    }
  };

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (scrollerDarkInnerRef.current) {
        scrollerDarkInnerRef.current.classList.add('animate-scroll');
      }
      if (scrollerInnerRef.current)
        scrollerInnerRef.current.classList.add('animate-scroll');
      addAnimation();
    }
  }, []);

  return (
    <div
      className={`flex flex-col gap-8 overflow-hidden px-4 text-center sm:px-8 lg:px-16`}
    >
      <div ref={scrollersDarkRef} className={`scroller mx-auto max-w-[1144px]`}>
        <div
          ref={scrollerDarkInnerRef}
          className={`scroller__inner mx-auto flex flex-wrap gap-[5rem] py-4`}
        >
          <Image
            src={
              theme === 'light'
                ? '/images/WHO Black.png'
                : '/images/WHO White.png'
            }
            alt="WHO"
            width={200}
            height={200}
          />
          <Image
            src={
              theme === 'light'
                ? '/images/Cadbury Black.png'
                : '/images/Cadbury White.png'
            }
            alt="Cadbury"
            width={200}
            height={200}
          />
          <Image
            src={
              theme === 'light'
                ? '/images/Infinix Black.png'
                : '/images/Infinix White.png'
            }
            alt="Infinix"
            width={200}
            height={200}
          />
          <Image
            src={
              theme === 'light'
                ? '/images/Verve Black.png'
                : '/images/Verve White.png'
            }
            alt="Verve"
            width={200}
            height={200}
          />
          <Image
            src={
              theme === 'light'
                ? '/images/Dano Black.png'
                : '/images/Dano White.png'
            }
            alt="Dano"
            width={200}
            height={200}
          />
          <Image
            src={
              theme === 'light'
                ? '/images/Qoray black.png'
                : '/images/Qoray white.png'
            }
            alt="Qora"
            width={200}
            height={200}
          />
          <Image
            src={
              theme === 'light'
                ? '/images/tffa black.png'
                : '/images/tffa white.png'
            }
            alt="tffa"
            width={200}
            height={200}
          />
          {/* <Image
            src={
              theme === 'light'
                ? '/images/Forkeeps Black.png'
                : '/images/Forkeeps White.png'
            }
            alt="Forkeeps"
            width={200}
            height={200}
          /> */}
          {/* <Logo
            src={theme === 'light' ? whoBlack : whoWhite}
            alt="WHO"
            imageClassName="object-cover object-center"
            className="h-5 w-5"
          /> */}
          {/* <Logo
            src={theme === 'light' ? cadburyBlack : cadburyWhite}
            alt="Cadbury"
            imageClassName="object-cover object-center"
            className="h-5 w-5"
          /> */}
          {/* <Logo
            src={theme === 'light' ? verveBlack : verveWhite}
            alt="Verve"
            imageClassName="object-cover object-center"
            className="h-5 w-5"
          /> */}
          {/* <Logo
            src={theme === 'light' ? infinixBlack : infinixWhite}
            alt="Infinix"
            imageClassName="object-cover object-center"
            className="h-5 w-5"
          /> */}
          {/* <Logo
            src={theme === 'light' ? danoBlack : danoWhite}
            alt="Dano Milk"
            imageClassName="object-cover object-center"
            className="h-5 w-5"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
