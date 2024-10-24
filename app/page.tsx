import AlbumLinks from './(albums)/AlbumLinks';
import wedding from '@/public/images/wedding-album.png';
import wedding2 from '@/public/images/wedding-2.png';
import homeComing from '@/public/images/home-coming.png';
import concert from '@/public/images/concert.png';
import Gallery from './gallery';
import Clientelle from './clientelle';
import Testimonial from './testimonial';
import { utapi } from './api/server/uploadthing';

const Work = async () => {
  // const files = await utapi.listFiles();
  // // console.log(files);

  // const plainFiles = JSON.parse(JSON.stringify(files));

  // files={plainFiles}

  return (
    <section className="flex flex-col items-center justify-center gap-16 p-4 text-white sm:p-8 lg:p-16">
      <Gallery  />
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-medium text-white">Categories</h1>
        <div className="grid w-full max-w-[1440px] justify-center gap-4 sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)]">
          <AlbumLinks
            src={wedding}
            title="Oladipo & Wunmi Wedding Cermony"
            desc="Content videos, Photography, and Videography"
          />
          <AlbumLinks
            src={homeComing}
            title="Home Coming Abuja ‘22"
            desc="Content videos and Photography"
          />
          <AlbumLinks src={concert} title="30BG Concert" desc="Photography" />
          <AlbumLinks
            src={wedding2}
            title="Mr&Mrs Adefola’s Wedding "
            desc="Content videos and Photography"
          />
        </div>
      </div>
      <Clientelle />
      <Testimonial />
    </section>
  );
};

export default Work;
