import { ReactNode } from 'react';

const AlbumLinksWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default AlbumLinksWrapper;
