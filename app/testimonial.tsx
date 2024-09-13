import Image from 'next/image';
import display from '@/public/images/concert.png';

const Testimonial = () => {
  return (
    <div className="flex w-full max-w-[44rem] flex-col gap-3 rounded-xl bg-[#6B7280]/40 p-6 shadow-md shadow-white/40">
      <div className="flex w-max items-end gap-4">
        <div className="relative h-12 w-12 rounded-full">
          <Image alt="display" src={display} fill className="rounded-full" />
        </div>
        <p className="font-medium text-[#f8f8f8]">Steve Jobs</p>
      </div>
      <p className="italic text-[#e0f2fe]">
        The Infonerds exceeded my expectations with their professionalism and
        creativity. They captured every moment beautifully, delivering
        high-quality photos and videos that we&apos;ll treasure forever. I
        highly recommend them for anyone seeking exceptional photography and
        videography services!
      </p>
    </div>
  );
};

export default Testimonial;
