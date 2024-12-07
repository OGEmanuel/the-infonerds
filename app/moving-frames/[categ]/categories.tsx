'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import {
  BTS as B_T_S,
  Commercials,
  Concerts,
  Corporate,
  Documentaries,
  Motion,
  Proposals,
  RealEstate,
  RegularVideo,
  Short,
  Styles,
  Weddings,
} from './data';

// Type for our selected video state
type SelectedVideo = Short | RegularVideo | null;

enum AlbumCategories {
  WEDDINGS = 'weddings',
  CONCERTS = 'concerts',
  CORPORATE = 'corporate',
  BTS = 'bts',
  DOCUMENTARIES = 'documentaries',
  STYLES = 'styles',
  MOTION_GRAPHICS = 'motion-graphics',
  REAL_ESTATE = 'real-estate',
  PROPOSALS = 'proposals',
  COMMERCIALS = 'commercials',
}

const Categories = ({ page }: { page: string }) => {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo>(null);
  const {
    WEDDINGS,
    CONCERTS,
    CORPORATE,
    BTS,
    DOCUMENTARIES,
    STYLES,
    MOTION_GRAPHICS,
    REAL_ESTATE,
    PROPOSALS,
    COMMERCIALS,
  } = AlbumCategories;

  let Category = B_T_S;

  if (page === BTS) {
    Category = B_T_S;
  } else if (page === DOCUMENTARIES) {
    Category = Documentaries;
  } else if (page === STYLES) {
    Category = Styles;
  } else if (page === MOTION_GRAPHICS) {
    Category = Motion;
  } else if (page === REAL_ESTATE) {
    Category = RealEstate;
  } else if (page === PROPOSALS) {
    Category = Proposals;
  } else if (page === COMMERCIALS) {
    Category = Commercials;
  } else if (page === CONCERTS) {
    Category = Concerts;
  } else if (page === CORPORATE) {
    Category = Corporate;
  } else if (page === WEDDINGS) {
    Category = Weddings;
  }

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (
    videoId: string,
    quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'hq',
  ) => {
    return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
  };

  return (
    <div>
      {/* Shorts Section */}
      {Category.shorts.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Shorts</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Category.shorts.map(short => (
              <div
                key={short.id}
                className="relative w-[180px] flex-none cursor-pointer"
                onClick={() => setSelectedVideo(short)}
              >
                <div className="relative h-[320px] w-[180px]">
                  <Image
                    src={getYouTubeThumbnail(short.id)}
                    alt={short.title}
                    fill
                    className="rounded-xl object-cover"
                    sizes="180px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="mt-2 line-clamp-2 text-sm font-medium">
                  {short.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Videos Grid */}
      {Category.videos.length > 0 && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Videos</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Category.videos.map(video => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={getYouTubeThumbnail(video.id, 'maxres')}
                    alt={video.title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-sm text-white">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="mt-2 line-clamp-2 text-sm font-medium text-white">
                  {video.title}
                </h3>
                {/* <p className="text-sm text-gray-500">{video.views} views</p> */}
              </div>
            ))}
          </div>
        </div>
      )}

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent
          className={`${
            selectedVideo?.type === 'short'
              ? 'h-[80vh] max-h-[900px] sm:max-w-[450px]'
              : 'sm:max-w-[80vw]'
          } bg-[#1e1e1e] p-0`}
        >
          {selectedVideo?.type === 'short' ? (
            // Shorts player
            <div className="flex h-full flex-col">
              <div className="relative flex-1 bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedVideo?.id}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-[#1e1e1e] p-4 dark:bg-gray-900">
                <h3 className="font-semibold">{selectedVideo.title}</h3>
              </div>
            </div>
          ) : (
            // Regular video player
            <div className="flex flex-col">
              <DialogHeader className="p-4">
                <DialogTitle className="text-white">
                  {selectedVideo?.title}
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedVideo?.id}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* {selectedVideo && 'views' in selectedVideo && (
                <div className="p-4 bg-white dark:bg-gray-900">
                  <p className="text-sm text-gray-500">{selectedVideo.views} views</p>
                </div>
              )} */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Categories;
