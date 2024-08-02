import { useState } from "react";
import ProductDashboard from "./ProductDashboard";
import CategoryDashboard from "./CategoryDashboard";

const Dashboard = () => {
  const [page, setPage] = useState("product");
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* <ProductDashboard /> */}
      <div className="col-span-3 bg-slate-300 sm:p-4 p-1">
        <div className="">
          <button
            onClick={() => setPage("product")}
            className="btn w-full lg:text-xl md:text-base text-xs font-bold sm:my-4 my-1"
          >
            Product Management
          </button>
          <button
            onClick={() => setPage("category")}
            className="btn w-full lg:text-xl md:text-base text-xs font-bold"
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
