'use client';

import { useEffect, useRef } from 'react';

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
      className={`flex flex-col gap-8 overflow-hidden px-4 text-center sm:px-8 lg:px-16`}
    >
      <div ref={scrollersDarkRef} className={`scroller mx-auto max-w-[1144px]`}>
        <div
          ref={scrollerDarkInnerRef}
          className={`scroller__inner mx-auto flex flex-wrap gap-[5rem] py-4`}
        >
          <p className="text-2xl font-medium">Quora E.V.</p>
          <p className="text-2xl font-medium">TFAA</p>
          <p className="text-2xl font-medium">WHO</p>
          <p className="text-2xl font-medium">Cadbury</p>
          <p className="text-2xl font-medium">Verve</p>
          <p className="text-2xl font-medium">Infinix Nigeria</p>
          <p className="text-2xl font-medium">Dano Milk</p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
