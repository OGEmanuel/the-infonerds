import Categories from './categories';

const Category = ({ params }: { params: { categ: string } }) => {
  return (
    <section className="flex flex-col gap-6 p-4 sm:p-8 lg:p-16">
      <h1 className="text-4xl font-medium uppercase text-white">
        {params.categ}
      </h1>
      <Categories />
    </section>
  );
};

export default Category;
