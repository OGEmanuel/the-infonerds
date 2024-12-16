'use client';

import useThemeStore from '@/store/theme-control';
import { ReactNode } from 'react';

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();
  return (
    <section
      className={`flex h-screen items-center justify-center ${theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
