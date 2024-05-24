import { Inter } from "next/font/google";
import CardsIcon from "@/public/icons/CardsIcon";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <h1 className="pt-[7.5rem] font-KaiseiFont text-4xl font-medium leading-[3rem] text-[#1F2937]">
      <span className="flex items-end">
        <span className="block">
          Hi, We are{" "}
          <span className={`${inter.className} font-semibold`}>
            The Infonerds
          </span>
        </span>
        <span className="-mb-4">
          <CardsIcon />
        </span>
      </span>
      <span className={`${inter.className} block font-semibold`}>
        A photographer and videographer agency
      </span>
      <span className={`${inter.className}`}>
        creating great{" "}
        <span className="bg-red-gradient bg-clip-text font-InriaFont font-bold italic text-transparent">
          memories
        </span>{" "}
        for people
      </span>
    </h1>
  );
};

export default Header;
