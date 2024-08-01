import { toast } from "react-toastify";
import categoryApi from "../redux/features/products/categoryApi";
import { TCategory } from "../pages/Products/Products";

const CategorySection = () => {
  const { data, isError } = categoryApi.useGetAllCategoriesQuery(undefined);

  if (isError) {
    toast("Something went wrong!");
  }

  return (
    <section id="category" className="my-12">
      <h1 className="text-4xl font-bold text-[#111111] mb-6">Categories</h1>
      <div className="card bg-base-100 w-full ">
        <div className="card-body flex justify-center items-center">
          {data?.data?.map((category: TCategory) => (
            <h2
              key={category._id}
              className="card-title text-2xl text-[#111111]"
            >
              {category.name}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
