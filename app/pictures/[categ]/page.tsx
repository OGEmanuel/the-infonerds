import Categories from './categories';
import CategoryBreadcumb from '../../../components/breadcrumb';

export const metadata = {
  title: 'Nerd Not Noob | Pictures',
  description: 'Information and Entertainment Personified.',
};

const Category = ({ params }: { params: { categ: string } }) => {
  return (
    <section className="flex w-full max-w-[1440px] flex-col gap-6 p-4 sm:p-8 lg:p-16">
      <CategoryBreadcumb params={params} />
      {/* <div className="m-[3%]"> */}
      <Categories page={params.categ} />
      {/* </div> */}
    </section>
  );
};

export default Category;
