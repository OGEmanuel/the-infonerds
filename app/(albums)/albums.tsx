import AlbumsIcon from "@/public/icons/AlbumsIcon";
import AlbumLinks from "./AlbumLinks";
import wedding from "@/public/images/wedding-album.png";
import wedding2 from "@/public/images/wedding-2.png";
import homeComing from "@/public/images/home-coming.png";
import concert from "@/public/images/concert.png";

const Albums = () => {
  return (
    <section className="mb-[7.5rem] border-b !border-[#F3F4F6] pb-16">
      <div className="mb-6 flex items-center gap-2">
        <AlbumsIcon />
        <h2 className="text-xl font-medium text-[#1F2937]">Albums</h2>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-16">
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
    </section>
  );
};

export default Albums;
