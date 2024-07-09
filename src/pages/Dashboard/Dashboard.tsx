const Dashboard = () => {
  return (
    <div>
      <h1 className="flex justify-center text-[#111111] sm:text-3xl text-xl font-bold p-2">
        Product and Category Management
      </h1>

      <div className="sm:container">
        <div className="flex justify-end mt-4">
          <button className="btn bg-[#0080ff] text-white sm:text-xl font-bold hover:text-[#111111]">
            Add Product
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
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Zemlak, Daniel and Leannon</td>
                  <td>$: 30</td>
                  <td>Fruits</td>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
