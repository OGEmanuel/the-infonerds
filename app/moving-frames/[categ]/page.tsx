import CategoryBreadcumb from '@/components/breadcrumb';
import Categories from './categories';

const Category = ({ params }: { params: { categ: string } }) => {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="container p-4 sm:p-8 lg:p-16">
        <CategoryBreadcumb params={params} />
        <Categories page={params.categ} />
      </div>
    </section>
  );
};

export default Category;
