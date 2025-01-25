'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import useThemeStore from '@/store/theme-control';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useSwipeable } from 'react-swipeable';

const Testimonial = () => {
  const { theme } = useThemeStore();
  const [tab, setTab] = useState(0);

  const testimonials = [
    {
      client: 'Layi Wasabi',
      job: 'Actor/Comedian',
      text: "Working with Nerd Not Noob always feels effortless. They just get my vision every time and know how to bring it to life in a way that's even better than I imagined. It's always a joy to have them on my projects—professional, creative, super reliable and punctual!",
      mobileStyle: `transition-all ${tab === 0 ? 'translate-x-0' : 'rotate-y-180 absolute -translate-x-[100%] opacity-0'}`,
    },
    {
      client: 'Damola Salam',
      job: 'Music Executive',
      text: "Nerd Not Noob understand the industry's needs and consistently deliver visuals that perfectly complement the project. Their creativity and professionalism make them my go-to team every time!",
      mobileStyle: `transition-all ${theme === 'light' ? 'bg-[#f9fafb]' : 'bg-[#18181b]'} ${tab === 1 && 'translate-x-0'} ${tab > 1 && '-translate-x-[100%]'} ${tab < 1 && 'translate-x-[100%]'} ${tab !== 1 && 'absolute opacity-0'}`,
      desktopStyle: theme === 'light' ? 'bg-[#f9fafb]' : 'bg-[#18181b]',
    },
    {
      client: 'Osagie Omon',
      job: 'Founder, Forkeeps',
      text: 'Nerd Not Noob brings a unique blend of professionalism and creativity to every project. Their ability to tell compelling stories through visuals is remarkable, and their work consistently exceeds expectations. Truly a pleasure to work with!',
      mobileStyle: `transition-all ${theme === 'light' ? 'bg-[#f3f4f6]' : 'bg-[#171717]'} ${tab === 2 && 'translate-x-0'} ${tab > 2 && '-translate-x-[100%]'} ${tab < 2 && 'translate-x-[100%]'} ${tab !== 2 && '-rotate-y-180 absolute opacity-0'}`,
      desktopStyle: theme === 'light' ? 'bg-[#f3f4f6]' : 'bg-[#171717]',
    },
    {
      client: 'Haniyah Bakare',
      job: 'UGC Creator',
      text: "Every time I work with Nerd Not Noob, I feel like my ideas are truly understood and brought to life in the most creative way. They're not just professionals—they're collaborators who make the process fun and seamless. The quality they deliver always blows me away!",
      mobileStyle: `transition-all ${theme === 'light' ? 'bg-[#f4f4f5]' : 'bg-[#1c1917]'} ${tab === 3 && 'translate-x-0'} ${tab > 3 && '-translate-x-[100%]'} ${tab < 3 && 'translate-x-[100%]'} ${tab !== 3 && 'absolute opacity-0'}`,
      desktopStyle: theme === 'light' ? 'bg-[#f4f4f5]' : 'bg-[#1c1917]',
    },
    {
      client: 'DJ Kaywise',
      job: 'DJ/Record Producer',
      text: "Nerd Not Noob is simply the best! Their ability to create visuals that match the energy and vibe of my music is unmatched. Every project we've worked on together has been a hit, and I can always count on them to deliver excellence.",
      mobileStyle: `transition-all ${theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#111827]'} ${tab === 4 && 'translate-x-0'} ${tab > 4 && '-translate-x-[100%]'} ${tab < 4 && 'translate-x-[100%]'} ${tab !== 4 && 'absolute opacity-0'}`,
      desktopStyle: theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#111827]',
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setTab(prevTab => Math.min(prevTab + 1, testimonials.length - 1)),
    onSwipedRight: () => setTab(prevTab => Math.max(prevTab - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="flex flex-col gap-6">
      <ScrollArea className="hidden w-full rounded-md border sm:block">
        <div className="flex w-max gap-4 p-4">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.client}
              client={testimonial.client}
              job={testimonial.job}
              className={testimonial.desktopStyle}
            >
              {testimonial.text}
            </TestimonialCard>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div
        className="relative hidden h-96 items-center justify-center max-sm:flex"
        {...handlers}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.client}
            client={testimonial.client}
            job={testimonial.job}
            className={testimonial.mobileStyle}
          >
            {testimonial.text}
          </TestimonialCard>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 hidden justify-center gap-6 max-sm:flex">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setTab(index)}
            className={`w-10 rounded p-1 ${tab === index ? `${theme === 'light' ? 'bg-black' : 'bg-white'}` : 'bg-gray-400'}`}
            role="tab"
          ></button>
        ))}
      </div>
    </section>
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
  const { theme } = useThemeStore();
  return (
    <div
      className={cn(
        `flex w-80 flex-col gap-2 rounded-xl p-8 text-base leading-7 transition-all duration-300 ease-in-out hover:rotate-0 md:p-4 md:text-sm md:leading-normal lg:p-8 lg:text-base xl:leading-7 ${theme === 'light' ? 'bg-[#f9f9f9] text-black' : 'bg-[#1e1e1e] text-white'}`,
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
