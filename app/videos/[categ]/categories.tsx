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
  FullData,
  Motion,
  Proposals,
  RealEstate,
  RegularVideo,
  Short,
  Styles,
  Weddings,
} from './data';
import useThemeStore from '@/store/theme-control';

// Type for our selected video state
type SelectedVideo = Short | RegularVideo | null;

enum AlbumCategories {
  WEDDINGS = 'weddings',
  CONCERTS = 'concerts-and-events',
  CORPORATE = 'corporate-events-and-brand-activations',
  BTS = 'behind-the-scenes',
  DOCUMENTARIES = 'documentaries',
  STYLES = 'styles-and-lifestyle',
  MOTION_GRAPHICS = 'motion-graphics',
  REAL_ESTATE = 'real-estate',
  PROPOSALS = 'proposals-and-pre-weddings',
  COMMERCIALS = 'tv-commercials-and-brand-ads',
}

const Categories = ({ page }: { page: string }) => {
  const { theme } = useThemeStore();
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

  if (Category !== Weddings) {
    const randomizedMapping = Category.videos
      .sort(() => Math.random() - 0.5) // Randomize the order
      .map((_, i) => i * 2); // Apply your mapping logic
  }

  return (
    <div>
      {/* Regular Videos Grid */}
      {Category.videos.length > 0 && (
        <div className="mt-3">
          <h2
            className={`mb-4 text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'} `}
          >
            Videos
          </h2>
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
                  <div
                    className={`absolute bottom-2 right-2 rounded ${theme === 'light' ? 'bg-white/80 text-black' : 'bg-black/80 text-white'} px-2 py-1 text-sm`}
                  >
                    {video.duration}
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-lg ${theme === 'light' ? 'bg-white/30' : 'bg-black/30'} opacity-0 transition-opacity group-hover:opacity-100`}
                  >
                    <Play
                      className={`h-12 w-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    />
                  </div>
                </div>
                <h3
                  className={`mt-2 line-clamp-2 text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  {video.title}
                </h3>
                {/* <p className="text-sm text-gray-500">{video.views} views</p> */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shorts Section */}
      {Category.shorts.length > 0 && (
        <div className="mt-8">
          <h2
            className={`mb-4 text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
          >
            Shorts
          </h2>
          <div className="grid grid-cols-2 gap-4 overflow-x-auto pb-4 sm:flex">
            {Category.shorts.map(short => (
              <div
                key={short.id}
                className="relative flex-none cursor-pointer sm:w-[180px]"
                onClick={() => setSelectedVideo(short)}
              >
                <div className="relative h-[320px] sm:w-[180px]">
                  <Image
                    src={getYouTubeThumbnail(short.id)}
                    alt={short.title}
                    fill
                    className="rounded-xl object-cover"
                    sizes="180px"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-xl ${theme === 'light' ? 'bg-white/30' : 'bg-black/30'} opacity-0 transition-opacity hover:opacity-100`}
                  >
                    <Play
                      className={`h-12 w-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    />
                  </div>
                </div>
                <h3
                  className={`mt-2 line-clamp-2 text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  {short.title}
                </h3>
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
          } ${theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#1e1e1e]'} overflow-hidden p-0`}
        >
          {selectedVideo?.type === 'short' ? (
            // Shorts player
            <div className="flex h-full flex-col">
              <div
                className={`relative flex-1 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedVideo?.id}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div
                className={`${theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#1e1e1e]'} p-4 dark:bg-gray-900`}
              >
                <h3 className="font-semibold">{selectedVideo.title}</h3>
              </div>
            </div>
          ) : (
            // Regular video player
            <div className="flex flex-col">
              <DialogHeader className="p-4">
                <DialogTitle
                  className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  {selectedVideo?.title}
                </DialogTitle>
              </DialogHeader>
              <div
                className={`aspect-video w-full ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
              >
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
