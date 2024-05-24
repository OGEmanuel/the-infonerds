import SparklesIcon from "@/public/icons/SparklesIcon";
import Image from "next/image";
import highlight1 from "@/public/images/highlight-1.png";
import highlight2 from "@/public/images/highlight-2.png";
import highlight3 from "@/public/images/highlight-3.png";

const Highlights = () => {
  return (
    <section className="mb-[11.56rem] mt-[7.5rem] items-center gap-2">
      <div className="mb-6 flex gap-2">
        <SparklesIcon />
        <h2 className="text-xl font-medium text-[#1F2937]">Highlights</h2>
      </div>
      <div className="flex items-center gap-2 overflow-auto">
        <Image src={highlight1} alt="highlight-1" />
        <Image src={highlight2} alt="highlight-2" />
        <Image src={highlight3} alt="highlight-3" />
      </div>
    </section>
  );
};

export default Highlights;
