import Gallery from './gallery';
import Clientelle from './clientelle';
import Testimonial from './testimonial';
import FrozenMoments from './frozen-moments';
import { Metadata } from 'next';
import MovingFrames from './moving-frames';
import MainSectionWrapper from '@/components/main-section-wrapper';

export const metadata: Metadata = {
  title: 'Nerd Not Noob | Gallery',
  description: 'Information and Entertainment Personified.',
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
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-medium">Testimonials</h2>
        <Testimonial />
      </div>
    </MainSectionWrapper>
  );
};

export default Work;
