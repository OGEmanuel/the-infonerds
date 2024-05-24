import FBIcon from "@/public/icons/FBIcon";
import IGIcon from "@/public/icons/IGIcon";
import LogoIcon from "@/public/icons/LogoIcon";
import XIcon from "@/public/icons/XIcon";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between border-b !border-[#F3F4F6] py-6 pr-40">
      <Link href={"/"} className="pl-6">
        <LogoIcon />
      </Link>
      <div className="flex items-center gap-[11px]">
        <div className="flex rounded-xl border !border-[#9CA3AF] bg-sm-gradient p-1">
          <Link href={"/"}>
            <IGIcon />
          </Link>
          <Link href={"/"}>
            <XIcon />
          </Link>
          <Link href={"/"}>
            <FBIcon />
          </Link>
        </div>
        <Link
          href={"#"}
          className="bg-btn-gradient rounded-xl p-4 font-medium text-white"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
