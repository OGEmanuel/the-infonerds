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
          <p className="text-2xl font-medium">Quora E.V.</p>
          <p className="text-2xl font-medium">TFAA</p>
          {/* <p className="text-2xl font-medium">WHO</p> */}
          <Logo
            src={theme === 'light' ? whoBlack : whoWhite}
            alt="WHO"
            imageClassName="object-cover object-center"
            className="h-32 w-60"
          />
          <Logo
            src={theme === 'light' ? cadburyBlack : cadburyWhite}
            alt="Cadbury"
            imageClassName="object-cover object-center"
            className="w-60"

            // className="h-10 w-10"
          />
          {/* <p className="text-2xl font-medium">Cadbury</p> */}
          <Logo
            src={theme === 'light' ? verveBlack : verveWhite}
            alt="Verve"
            imageClassName="object-cover object-center"
            className="w-60"

            // className="h-10 w-10"
          />
          {/* <p className="text-2xl font-medium">Verve</p> */}
          <Logo
            src={theme === 'light' ? infinixBlack : infinixWhite}
            alt="Infinix"
            imageClassName="object-cover object-center"
            className="w-60"

            // className="h-10 w-10"
          />
          {/* <p className="text-2xl font-medium">Infinix Nigeria</p> */}
          <Logo
            src={theme === 'light' ? danoBlack : danoWhite}
            alt="Dano Milk"
            imageClassName="object-cover object-center"
            className="w-60"

            // className="h-10 w-10"
          />
          {/* <p className="text-2xl font-medium">Dano Milk</p> */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
