import BojIcon from "@/public/icons/BojIcon";
import CancelIcon from "@/public/icons/CancelIcon";
import LogoIcon from "@/public/icons/LogoIcon";

const Footer = () => {
  return (
    <footer className="border border-[#F3F4F6] py-16 md:ml-[10rem]">
      <div className="flex w-11/12 justify-between">
        <div className="flex items-center gap-4">
          <LogoIcon />
          <div>
            <p className="text-xl font-medium text-[#1F2937]">The Infonerds</p>
            <p className="text-[#4B5563]">
              Information and Entertainment Personified.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#4B5563]">BUILT BY</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[6px]">
              <BojIcon />
              <p>Abolaji Olunuga</p>
            </div>
            <CancelIcon />
            <p>Emmanuel Ogunmola</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
