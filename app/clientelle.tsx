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
import qoraWhite from '@/public/icons/qoray-white.svg';
import qoraBlack from '@/public/icons/qoray-black.svg';
import tffaBlack from '@/public/icons/tfa-black.svg';
import tffaWhite from '@/public/icons/tfa-white.svg';
import cocacolaBlack from '@/public/icons/cocacola-black.svg';
import cocacolaWhite from '@/public/icons/cocacola-white.svg';
import forkeepsBlack from '@/public/icons/forkeeps-black.svg';
import forkeepsWhite from '@/public/icons/forkeeps-white.svg';
import gtcoBlack from '@/public/icons/GTCO-black.svg';
import gtcoWhite from '@/public/icons/GTCO-white.svg';
import tecnoBlack from '@/public/icons/tecno-black.svg';
import tecnoWhite from '@/public/icons/tecno-white.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
    <div className={`grid-stack grid justify-center text-center`}>
      <div
        ref={scrollersRef}
        className={cn(
          `scroller grid-area-stack`,
          theme === 'light' && 'invisible',
        )}
      >
        <div
          ref={scrollerInnerRef}
          className={`scroller__inner flex flex-wrap gap-[5rem]`}
        >
          <Image src={tecnoWhite} alt="Tecno" width={100} height={100} />
          <Image src={cocacolaWhite} alt="Cocacola" width={100} height={100} />
          <Image src={whoWhite} alt="WHO" width={100} height={100} />
          <Image src={gtcoWhite} alt="GTCO" width={100} height={100} />
          <Image src={verveWhite} alt="Verve" width={100} height={100} />
          <Image src={infinixWhite} alt="Infinix" width={100} height={100} />
          <Image src={cadburyWhite} alt="Cadbury" width={100} height={100} />
          <Image src={danoWhite} alt="Dano" width={100} height={100} />
          <Image src={qoraWhite} alt="Qora" width={100} height={100} />
          <Image src={tffaWhite} alt="tffa" width={100} height={100} />
          <Image src={forkeepsWhite} alt="ForKeeps" width={100} height={100} />
        </div>
      </div>
      <div
        ref={scrollersDarkRef}
        className={cn(
          `scroller grid-area-stack`,
          theme === 'dark' && 'invisible',
        )}
      >
        <div
          ref={scrollerDarkInnerRef}
          className={`scroller__inner flex flex-wrap gap-[5rem]`}
        >
          <Image src={tecnoBlack} alt="Tecno" width={100} height={100} />
          <Image src={cocacolaBlack} alt="Cocacola" width={100} height={100} />
          <Image src={whoBlack} alt="WHO" width={100} height={100} />
          <Image src={gtcoBlack} alt="GTCO" width={100} height={100} />
          <Image src={verveBlack} alt="Verve" width={100} height={100} />
          <Image src={infinixBlack} alt="Infinix" width={100} height={100} />
          <Image src={cadburyBlack} alt="Cadbury" width={100} height={100} />
          <Image src={danoBlack} alt="Dano" width={100} height={100} />
          <Image src={qoraBlack} alt="Qora" width={100} height={100} />
          <Image src={tffaBlack} alt="tffa" width={100} height={100} />
          <Image src={forkeepsBlack} alt="ForKeeps" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
