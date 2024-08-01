import { useState } from "react";
import ProductDashboard from "./ProductDashboard";
import CategoryDashboard from "./CategoryDashboard";

const Dashboard = () => {
  const [page, setPage] = useState("product");
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* <ProductDashboard /> */}
      <div className="col-span-3 bg-slate-300 p-4">
        <div className="">
          <button
            onClick={() => setPage("product")}
            className="btn w-full text-xl font-bold my-4"
          >
            Product Management
          </button>
          <button
            onClick={() => setPage("category")}
            className="btn w-full text-xl font-bold "
          >
            Category Management
          </button>
        </div>
      </div>
      <div className="col-span-9  p-4">
        {page === "product" ? <ProductDashboard /> : <CategoryDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
