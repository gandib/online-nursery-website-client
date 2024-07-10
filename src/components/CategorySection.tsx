import productApi from "../redux/features/products/productApi";

const CategorySection = () => {
  const { data } = productApi.useGetAllCategoriesQuery(undefined);

  console.log(data?.data[0]?.categories);

  return (
    <section id="category" className="my-12">
      <h1 className="text-4xl font-bold text-[#111111] mb-6">Categories</h1>
      <div className="card bg-base-100 w-full ">
        <div className="card-body flex justify-center items-center">
          {data?.data[0]?.categories?.map((category: string, index: number) => (
            <h2 key={index} className="card-title text-2xl text-[#111111]">
              {index + 1}: {category}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
