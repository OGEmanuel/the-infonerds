import { ReactNode } from 'react';

const AlbumLinksWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid w-full max-w-[1440px] justify-center gap-4 sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)]">
      {children}
    </div>
  );
};

export default AlbumLinksWrapper;
