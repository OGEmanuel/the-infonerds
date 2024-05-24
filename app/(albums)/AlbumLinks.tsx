import Image, { StaticImageData } from "next/image";

const AlbumLinks = ({
  src,
  title,
  desc,
}: {
  src: StaticImageData;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={src} alt="Album Cover" />
      <div>
        <p className="text-xl font-medium text-[#1F2937]">{title}</p>
        <p className="text-[#6B7280]">{desc}</p>
      </div>
    </div>
  );
};

export default AlbumLinks;
