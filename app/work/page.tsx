import AlbumLinks from '../(albums)/AlbumLinks';
import wedding from '@/public/images/wedding-album.png';
import wedding2 from '@/public/images/wedding-2.png';
import homeComing from '@/public/images/home-coming.png';
import concert from '@/public/images/concert.png';

const Work = () => {
  return (
    <main className="flex items-center justify-center p-4 text-white sm:p-16">
      <div className="grid w-full max-w-[1440px] grid-cols-[repeat(auto-fit,_minmax(10rem,_25rem))] justify-center gap-4">
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
    </main>
  );
};

export default Work;
