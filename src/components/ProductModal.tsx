import { FormEvent, useEffect, useState } from "react";
import productApi from "../redux/features/products/productApi";
import { toast } from "react-toastify";
import categoryApi from "../redux/features/products/categoryApi";
import { TCategory } from "../pages/Products/Products";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductModal = ({ updateProduct, addProduct, productId, setId }: any) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");

  const { data, isError } = productApi.useGetSingleProductQuery(productId);
  const { data: categories } = categoryApi.useGetAllCategoriesQuery(undefined);

  useEffect(() => {
    setTitle(data?.data?.title);
    setCategory(data?.data?.category?._id);
    setDescription(data?.data?.description);
    setPrice(data?.data?.price);
    setRating(data?.data?.rating);
    setImage(data?.data?.image);
    setQuantity(data?.data?.quantity);
  }, [data]);

  const handleSubmit = (e: FormEvent) => {
    const target: any = e.target;
    const info = {
      title: title,
      category: selectCategory,
      description: target.description.value,
      price: Number(target.price.value),
      rating: Number(target.rating.value),
      image: target.image.value,
      quantity: Number(target.quantity.value),
    };
    console.log(info);
    console.log(selectCategory, category);

    if (productId) {
      updateProduct({ _id: data?.data?._id, info });
    } else {
      addProduct(info);
    }
    target.reset();
  };

  const handlerCancel = () => {
    setId("");
    setTitle("");
    setCategory("");
    setDescription("");
    setPrice("");
    setRating("");
    setImage("");
    setQuantity("");
  };

  if (isError) {
    toast.error("Something went wrong!");
  }

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl flex justify-center">
            {productId ? "Update Product" : "Add Product"}
          </h3>
          <div className="my-4">
            <form onSubmit={handleSubmit} method="dialog">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title"
                name="title"
                className="input input-bordered w-full max-w-10/12 mb-1"
              />
              {/* <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                placeholder="Category"
                name="category"
                className="input input-bordered w-full max-w-10/12 mb-1"
              /> */}

              <select className="select select-bordered w-full  max-w-10/12 mb-1">
                {!category && (
                  <option disabled selected>
                    Select a Category
                  </option>
                )}
                {category && (
                  <option disabled selected>
                    {data?.data?.category?.name}
                  </option>
                )}
                {categories?.data?.map((item: TCategory) => (
                  <option
                    onClick={() => setSelectCategory(item?._id)}
                    key={item?._id}
                  >
                    {item?.name}
                  </option>
                ))}
              </select>
              <textarea
                // type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                name="description"
                className="textarea textarea-bordered h-24 w-full max-w-10/12 mb-1"
              />
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Price"
                name="price"
                className="input input-bordered w-full max-w-10/12 mb-1"
              />
              <input
                type="number"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full max-w-10/12 mb-1"
              />
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                placeholder="Image Link"
                name="image"
                className="input input-bordered w-full max-w-10/12 mb-1"
              />
              <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full max-w-10/12 mb-1"
              />
              <div className="flex justify-center modal-action">
                <button className="btn font-bold w-full bg-[#0080ff] text-white text-xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <button
                onClick={() => handlerCancel()}
                className="btn mx-8 font-bold"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductModal;
