'use client';

import useThemeStore from '@/store/theme-control';
import { useEffect, useRef } from 'react';
import cadburyBlack from '@/public/icons/cadbury-black.svg';
import cadburyWhite from '@/public/icons/cadbury-white.svg';
import danoBlack from '@/public/icons/dano-black.svg';
import danoWhite from '@/public/icons/dano-white.svg';
import infinixBlack from '@/public/icons/infinix-black.svg';
import infinixWhite from '@/public/icons/Infinix-white.svg';
import verveBlack from '@/public/icons/verve-black.svg';
import verveWhite from '@/public/icons/verve-white.svg';
import whoBlack from '@/public/icons/WHO-Black.svg';
import whoWhite from '@/public/icons/WHO-white.svg';
import qoraWHite from '@/public/icons/qoray-white.svg';
import qoraBlack from '@/public/icons/qoray-black.svg';
import tffaBlack from '@/public/icons/tfa-black.svg';
import tffaWhite from '@/public/icons/tfa-white.svg';
import cocacolaBlack from '@/public/icons/cocacola-black.svg';
import cocacolaWhite from '@/public/icons/cocacola-white.svg';
import forkeepsBlack from '@/public/icons/forkeeps-black.svg';
import forkeepsWhite from '@/public/icons/forkeeps-white.svg';
import gtcoBlack from '@/public/icons/GTCO-black.svg';
import gtcoWhite from '@/public/icons/GTCO-white.svg';
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
    <div className={`flex flex-col justify-center gap-8 text-center`}>
      <div ref={scrollersDarkRef} className={`scroller w-full max-w-[1440px]`}>
        <div
          ref={scrollerDarkInnerRef}
          className={`scroller__inner mx-auto flex flex-wrap gap-[7.5rem] py-4`}
        >
          <Image
            src={theme === 'light' ? cocacolaBlack : cocacolaWhite}
            alt="Cocacola"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? whoBlack : whoWhite}
            alt="WHO"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? gtcoBlack : gtcoWhite}
            alt="GTCO"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? verveBlack : verveWhite}
            alt="Verve"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? infinixBlack : infinixWhite}
            alt="Infinix"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? cadburyBlack : cadburyWhite}
            alt="Cadbury"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? danoBlack : danoWhite}
            alt="Dano"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? qoraBlack : qoraWHite}
            alt="Qora"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? tffaBlack : tffaWhite}
            alt="tffa"
            width={200}
            height={200}
          />
          <Image
            src={theme === 'light' ? forkeepsBlack : forkeepsWhite}
            alt="ForKeeps"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
