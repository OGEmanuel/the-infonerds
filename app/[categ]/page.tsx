import Categories from './categories';
import CategoryBreadcumb from './breadcrumb';

const Category = ({ params }: { params: { categ: string } }) => {
  return (
    <section className="flex w-full flex-col gap-6 p-4 sm:p-8 lg:p-16">
      <CategoryBreadcumb params={params} />
      <Categories page={params.categ} />
    </section>
  );
};

export default Category;
