import Gallery from './gallery';
import Clientelle from './clientelle';
import Testimonial from './testimonial';
import FrozenMoments from './frozen-moments';
import { Metadata } from 'next';
import MovingFrames from './moving-frames';
import MainSectionWrapper from '@/components/main-section-wrapper';
import MailingList from './mailing-list';

export const metadata: Metadata = {
  title: 'Photography & Videography Gallery | Nerd Not Noob',
  description:
    'Showcasing stunning photography and videography.  Explore our portfolio of captivating images and videos.  Nerd Not Noob - capturing moments that last a lifetime.',
  keywords: [
    'photography gallery',
    'videography gallery',
    'professional photography',
    'professional videography',
    'Nigeria photography',
    'Nigeria videography',
    'portfolio',
    'photographer',
    'videographer',
  ],
  openGraph: {
    title: 'Photography & Videography Gallery | Nerd Not Noob',
    description:
      'Showcasing stunning photography and videography. Explore our portfolio of captivating images and videos.',
    images:
      'https://res.cloudinary.com/dyx1sh27d/image/upload/v1745244963/logo_znitqm.png',
    url: 'https://www.nerdnotnoob.com/',
    siteName: 'Nerd Not Noob',
  },
};

const Work = () => {
  return (
    <MainSectionWrapper>
      <Gallery />
      <div
        className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16"
        id="categories"
      >
        <MovingFrames />
        <FrozenMoments />
      </div>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-medium">Clientelle</h2>
        <Clientelle />
      </div>
      <div className="flex w-full items-center justify-center">
        <MailingList />
      </div>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-medium">Testimonials</h2>
        <Testimonial />
      </div>
    </MainSectionWrapper>
  );
};

export default Work;
