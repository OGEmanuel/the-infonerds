import AlbumLinks from './(albums)/AlbumLinks';
import wedding from '@/public/images/wedding-album.png';
import wedding2 from '@/public/images/wedding-2.png';
import homeComing from '@/public/images/home-coming.png';
import concert from '@/public/images/concert.png';
import Gallery from './gallery';
import Clientelle from './clientelle';
import Testimonial from './testimonial';
import FrozenMoments from './fozen-moments';
// import { utapi } from './api/server/uploadthing';

const Work = async () => {
  // const files = await utapi.listFiles();
  // // console.log(files);

  // const plainFiles = JSON.parse(JSON.stringify(files));

  // files={plainFiles}

  return (
    <section className="flex flex-col items-center justify-center gap-16 p-4 text-white sm:p-8 lg:p-16">
      <Gallery />
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-medium text-white">Categories</h1>
        <FrozenMoments />
      </div>
      <Clientelle />
      <Testimonial />
    </section>
  );
};

export default Work;
