/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactPaginate from "react-paginate";
import Card from "../../components/Card";
import { FormEvent, useState } from "react";
import productApi from "../../redux/features/products/productApi";
import debounce from "lodash.debounce";
import categoryApi from "../../redux/features/products/categoryApi";
import { toast } from "react-toastify";

export type TCategory = {
  _id: string;
  name: string;
  isDeleted: boolean;
};

export type TProduct = {
  _id: string;
  title: string;
  category: TCategory;
  description: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
  isDeleted: boolean;
};

const Products = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("-_id");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const query = {
    limit: 9,
    sort,
    category: filter,
    searchTerm: search,
  };

  const { data, isLoading, isError } = productApi.useGetAllProductsQuery(query);
  const { data: categories } = categoryApi.useGetAllCategoriesQuery(undefined);

  const handlePageClick = (e: { selected: number }) => {
    setPage(e.selected + 1);
  };

  const [click, setClick] = useState(false);

  const menuClick = () => {
    setClick(!click);
  };

  //  for debounce api call
  const debouncedSetQuery = debounce(setSearch, 2000);

  const handleSearch = (e: FormEvent) => {
    const { value }: any = e.target;
    debouncedSetQuery(value);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (isError) {
    toast.error("Something went wrong!");
  }

  return (
    <div className="mt-6">
      <h1 className="text-5xl font-bold text-[#111111] mb-6">Products</h1>
      <div className="flex justify-between">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search here"
          className="input input-bordered  w-full max-w-xs mb-5"
        />
        <div className="flex">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              onClick={menuClick}
              className="btn m-1 bg-[#7dbffc] text-white sm:text-xl font-bold"
            >
              Sort by
            </div>

            <ul
              tabIndex={0}
              onClick={menuClick}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow ${
                click ? "z-[1]" : ""
              }`}
            >
              <li>
                <button onClick={() => setSort("-_id")}>Sort by default</button>
              </li>
              <li>
                <button onClick={() => setSort("price")}>
                  Sort by price: low to high
                </button>
              </li>
              <li>
                <button onClick={() => setSort("-price")}>
                  Sort by price: high to low
                </button>
              </li>
              <li>
                <button onClick={() => setSort("-title")}>Sort by name</button>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              onClick={menuClick}
              className="btn m-1 bg-[#0080ff] text-white sm:text-xl font-bold"
            >
              Filter by
            </div>

            <ul
              tabIndex={0}
              onClick={menuClick}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow ${
                click ? "z-[1]" : ""
              }`}
            >
              <li>
                <button onClick={() => setFilter("")}>Filter by default</button>
              </li>
              {categories?.data?.map((category: TCategory) => (
                <li key={category._id}>
                  <button onClick={() => setFilter(category.name)}>
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data?.data?.map((product: TProduct) => (
          <Card
            title={product?.title}
            image={product?.image}
            price={product?.price}
            rating={product?.rating}
            key={product?._id}
            _id={product?._id}
            category={product?.category}
            description={""}
            quantity={product?.quantity}
            isDeleted={product?.isDeleted}
          />
        ))}
      </div>

      <ReactPaginate
        // breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={data?.meta?.totalPage}
        previousLabel="<<"
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        containerClassName={`join gap-2 ${
          page > 999 ? "gap-3" : "gap-2"
        } flex justify-center my-12`}
        activeClassName="bg-blue-500 text-white"
        pageClassName="join-item btn btn-square"
        breakClassName="join-item btn btn-square hidden"
        nextClassName="join-item btn "
        previousClassName="join-item btn "
        pageLinkClassName={`${
          page <= 9
            ? "px-5 py-4"
            : page > 9
            ? "px-[18px] py-4"
            : page > 19
            ? "px-[14px] py-4"
            : page > 99
            ? " py-4"
            : ""
        }`}
        activeLinkClassName="bg-blue-500"
        forcePage={page - 1}
      />
    </div>
  );
};

export default Products;
