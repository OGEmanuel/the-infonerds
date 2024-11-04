import Gallery from './gallery';
import Clientelle from './clientelle';
import Testimonial from './testimonial';
import FrozenMoments from './fozen-moments';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TheInfoNerds | Gallery',
  description: 'Information and Entertainment Personified.',
};

const Work = async () => {
  return (
    <section className="flex w-full max-w-[1440px] flex-col gap-16 text-white ">
      <Gallery />
      <div
        className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16"
        id="categories"
      >
        <h2 className="text-3xl font-medium text-white">Categories</h2>
        <FrozenMoments />
      </div>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-medium text-white">Clientelle</h2>
        <Clientelle />
      </div>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-medium text-white">Testimonials</h2>
        <Testimonial />
      </div>
    </section>
  );
};

export default Work;
