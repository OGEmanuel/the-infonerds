import Gallery from './gallery';
import Clientelle from './clientelle';
import Testimonial from './testimonial';
import FrozenMoments from './frozen-moments';
import { Metadata } from 'next';
import MovingFrames from './moving-frames';
import MainSectionWrapper from '@/components/main-section-wrapper';
import MailingList from './mailing-list';

export const metadata: Metadata = {
  title: 'Professional Photography & Videography in Nigeria | Nerd Not Noob',
  description:
    'Premium photography and videography services in Nigeria. From weddings to corporate events, we create timeless memories with exceptional artistry. Book your session today.',
  keywords: [
    'professional photographer Nigeria',
    'wedding photography Nigeria',
    'corporate videography Lagos',
    'event photography Nigeria',
    'portrait photographer Lagos',
    'commercial photography Nigeria',
    'videographer Nigeria',
    'photography services Lagos',
    'Nigerian photographer',
    'video production Nigeria',
    'pre-wedding photography',
    'birthday photography Nigeria',
    'business photography Lagos',
    'photography portfolio Nigeria',
    'creative videography',
  ],
  category: 'Photography & Videography Services',
  openGraph: {
    title: 'Photography & Videography Gallery | Nerd Not Noob',
    description:
      'Premium photography and videography services in Nigeria. From weddings to corporate events, we create timeless memories with exceptional artistry. Book your session today.',
    images:
      'https://res.cloudinary.com/dyx1sh27d/image/upload/v1745245687/logo-black_tlgcrd.png',
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
