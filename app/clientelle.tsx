'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import truecallerDark from '@/public/truecaller-marquee-logo-dark.svg';
import betkingDark from '@/public/betking-marquee-logo-dark.svg';
import oppoDark from '@/public/oppo-marquee-logo-dark.svg';
import duoDark from '@/public/duo-marquee-logo-dark.svg';
import shuttlersDark from '@/public/shuttlers-marquee-logo-dark.svg';

const Marquee = () => {
  const scrollersRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const scrollersDarkRef = useRef<HTMLDivElement>(null);
  const scrollerDarkInnerRef = useRef<HTMLDivElement>(null);

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
      className={`mx-auto flex max-w-[1440px] flex-col gap-8 px-4 text-center md:px-10 lg:px-20`}
    >
      <div ref={scrollersDarkRef} className={`scroller mx-auto max-w-[1144px]`}>
        <div
          ref={scrollerDarkInnerRef}
          className={`scroller__inner mx-auto flex flex-wrap gap-[7.5rem] py-4`}
        >
          <Image src={truecallerDark} alt="logo" />
          <Image src={betkingDark} alt="logo" />
          <Image src={oppoDark} alt="logo" />
          <Image src={duoDark} alt="logo" />
          <Image src={shuttlersDark} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
