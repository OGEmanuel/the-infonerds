'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import useThemeStore from '@/store/theme-control';
import { usePathname, useRouter } from 'next/navigation';

const CategoryBreadcumb = ({ params }: { params: { categ: string } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useThemeStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    router.push(href);

    setTimeout(() => {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`${pathname.includes('frozen-moments') ? '/#frozen-moments' : '/#moving-frames'}`}
            className={`${theme === 'light' ? 'text-black/40 hover:text-black/80' : 'text-white/40 hover:text-white/80'}`}
            onClick={handleClick}
          >
            Gallery
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            className={`text-2xl font-medium uppercase ${theme === 'light' ? 'text-black' : 'text-white'}`}
          >
            {params.categ}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CategoryBreadcumb;
