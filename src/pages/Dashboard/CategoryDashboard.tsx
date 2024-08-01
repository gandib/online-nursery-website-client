/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TCategory } from "../Products/Products";
import Modal from "../../components/Modal";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import categoryApi from "../../redux/features/products/categoryApi";
import CategoryModal from "../../components/CategoryModal";

const CategoryDashboard = () => {
  const [id, setId] = useState("");

  const [deleteCategory] = categoryApi.useDeleteCategoryMutation();
  const [createCategory] = categoryApi.useAddCategoryMutation();
  const [editCategory] = categoryApi.useUpdateCategoryMutation();
  const { data: categories, isLoading } =
    categoryApi.useGetAllCategoriesQuery(undefined);

  const handlerDelete = (categoryId: string) => {
    setId(categoryId);
    (document.getElementById("my_modal_1") as HTMLDialogElement).showModal();
  };

  const handlerAddProduct = () => {
    setId("");
    (document.getElementById("my_modal_3") as HTMLDialogElement).showModal();
  };

  const handlerUpdate = (categoryId: string) => {
    setId(categoryId);
    (document.getElementById("my_modal_3") as HTMLDialogElement).showModal();
  };

  const confirmDelete = async () => {
    try {
      const res = await deleteCategory(id).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const addCategory = async (data: TCategory) => {
    try {
      const res = await createCategory(data).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const updateCategory = async (data: TCategory) => {
    try {
      const res = await editCategory(data).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h1 className="flex justify-center text-[#111111] sm:text-3xl text-xl font-bold p-2">
        Category Management
      </h1>

      <div className="sm:container">
        <div className="flex justify-end mt-4">
          <button
            onClick={handlerAddProduct}
            className="btn bg-[#0080ff] text-white sm:text-xl font-bold hover:text-[#111111]"
          >
            Add Category
          </button>
        </div>

        {/* table*/}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {categories?.data?.map((category: TCategory) => (
                  <tr key={category?._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>{category.name}</td>
                    <th>
                      <button
                        onClick={() => handlerUpdate(category?._id)}
                        className="btn bg-[#0080ff]"
                      >
                        <FaEdit />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handlerDelete(category?._id)}
                        className="btn btn-error"
                      >
                        <FaTrash />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <Modal confirmDelete={confirmDelete} />
      <CategoryModal
        updateCategory={updateCategory}
        categoryId={id}
        setId={setId}
        addCategory={addCategory}
      />
    </div>
  );
};

export default CategoryDashboard;
