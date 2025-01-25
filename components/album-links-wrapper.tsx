import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const AlbumLinksWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3',
        'grid-flow-row auto-rows-fr', // Key to maintaining equal heights
        className,
      )}
    >
      {children}
    </div>
    // <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
    //   {children}
    // </div>
  );
};

export default AlbumLinksWrapper;
