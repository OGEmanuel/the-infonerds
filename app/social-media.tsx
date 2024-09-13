import FBIcon from "@/public/icons/FBIcon";
import IGIcon from "@/public/icons/IGIcon";
import XIcon from "@/public/icons/XIcon";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-[11px]">
      <div className="flex rounded-xl border !border-[#9CA3AF] bg-sm-gradient p-1">
        <Link href={'/'}>
          <IGIcon />
        </Link>
        <Link href={'/'}>
          <XIcon />
        </Link>
        <Link href={'/'}>
          <FBIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
