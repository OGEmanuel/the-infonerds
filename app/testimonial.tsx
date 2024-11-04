import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Testimonial = () => {
  return (
    <div className="flex grid-cols-3 flex-col px-4 sm:px-8 md:grid lg:px-16">
      <TestimonialCard
        client="Layi Wasabi"
        job="Content Creator"
        className="rotate-[10deg] hover:z-10 md:translate-x-[40%] md:translate-y-[25%]"
      >
        The Infonerds exceeded my expectations with their professionalism and
        creativity. They captured every moment beautifully, delivering
        high-quality photos and videos that we&apos;ll treasure forever. I
        highly recommend them for anyone seeking exceptional photography and
        videography services!
      </TestimonialCard>
      <TestimonialCard
        client="Peller"
        job="Content Creator"
        className="z-10 col-[3_/_span_1] row-[3_/_span_1] -rotate-6 bg-[#18181b] hover:z-20 md:-translate-x-[15%] md:-translate-y-[25%] md:hover:z-10"
      >
        Working with The Infonerds was an absolute delight. Their attention to
        detail and innovative approach to capturing our corporate event set them
        apart. The team&apos;s ability to blend candid moments with professional
        shots gave us exactly what we needed for our marketing materials. Simply
        outstanding!
      </TestimonialCard>
      <TestimonialCard
        client="Layi Wasabi"
        job="Content Creator"
        className="z-10 col-[1_/_span_1] row-[3_/_span_1] rotate-6 bg-[#171717] sm:rotate-[10deg] md:-translate-y-[25%] md:translate-x-[40%]"
      >
        From the initial consultation to the final delivery, The Infonerds
        showed why they&apos;re leaders in their field. They weren&apos;t just
        photographers and videographers &ndash; they were storytellers who
        understood our vision perfectly. The way they documented our product
        launch was beyond impressive!
      </TestimonialCard>
      <TestimonialCard
        client="Layi Wasabi"
        job="Content Creator"
        className="col-[3_/_span_1] -rotate-6 bg-[#1c1917] hover:z-10 md:-translate-x-[6%] md:translate-y-[25%]"
      >
        As someone who&apos;s usually camera-shy, I was amazed at how
        comfortable The Infonerds made me feel during our branding photoshoot.
        Their friendly approach and clear direction resulted in authentic,
        professional content that perfectly represents our brand. They&apos;re
        truly masters of their craft!
      </TestimonialCard>
      <TestimonialCard
        client="Layi Wasabi"
        job="Content Creator"
        className="col-[2_/_span_1] rotate-[10deg] bg-[#111827] hover:z-20"
      >
        The Infonerds brought energy and expertise to our conference coverage.
        Their quick turnaround time and ability to capture both the big moments
        and small details was remarkable. The final media package exceeded our
        expectations &ndash; they delivered content that we&apos;ll be proud to
        use across all our platforms
      </TestimonialCard>
    </div>
  );
};

export default Testimonial;

const TestimonialCard = ({
  children,
  className,
  client,
  job,
}: {
  children: ReactNode;
  className?: string;
  client: string;
  job: string;
}) => {
  return (
    <div
      className={cn(
        `flex flex-col gap-2 rounded-xl bg-[#1e1e1e] p-8 text-base leading-7 text-white transition-all duration-300 ease-in-out hover:rotate-0 md:p-4 md:text-sm md:leading-normal lg:p-8 lg:text-base xl:leading-7`,
        className,
      )}
    >
      <p className="text-justify italic">{`"${children}"`}</p>
      <p>
        <span className="font-medium">{client}</span> - {job}
      </p>
    </div>
  );
};
