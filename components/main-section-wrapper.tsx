'use client';

import useThemeStore from '@/store/theme-control';
import { ReactNode } from 'react';

const MainSectionWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();

  return (
    <section
      className={`flex w-full max-w-[1440px] flex-col gap-16 ${theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      {children}
    </section>
  );
};

export default MainSectionWrapper;
