import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import categoryApi from "../redux/features/products/categoryApi";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CategoryModal = ({
  updateCategory,
  addCategory,
  categoryId,
  setId,
}: any) => {
  const [name, setName] = useState("");

  const { data, isError } = categoryApi.useGetSingleCategoryQuery(categoryId);

  useEffect(() => {
    setName(data?.data?.name);
  }, [data]);

  const handleSubmit = (e: FormEvent) => {
    const target: any = e.target;
    const info = {
      name: name,
    };

    if (categoryId) {
      updateCategory({ _id: data?.data?._id, info });
    } else {
      addCategory(info);
    }
    target.reset();
  };

  const handlerCancel = () => {
    setId("");
    setName("");
  };

  if (isError) {
    toast.error("Something went wrong!");
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl flex justify-center">
            {categoryId ? "Update Category" : "Add Category"}
          </h3>
          <div className="my-4">
            <form onSubmit={handleSubmit} method="dialog">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Category Name"
                name="title"
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

export default CategoryModal;
