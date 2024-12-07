import { ReactNode } from 'react';
import AlbumLinksWrapper from './album-links-wrapper';
import { CameraIcon, VideoIcon } from 'lucide-react';

const CategoryWrapper = ({
  children,
  title,
  description,
  id,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  id: string;
}) => {
  return (
    <section className="flex flex-col gap-6" id={id}>
      <div className="text-white">
        <div className="flex items-center gap-2">
          {title.toLowerCase().includes('video') ? (
            <VideoIcon className="h-10 w-10" />
          ) : (
            <CameraIcon className="h-10 w-10" />
          )}
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <p className="italics text-xs">{description}</p>
      </div>
      <AlbumLinksWrapper>{children}</AlbumLinksWrapper>
    </section>
  );
};

export default CategoryWrapper;
