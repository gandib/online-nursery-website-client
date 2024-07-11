import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ErrorElement from "../pages/ErrorElement";
import Products from "../pages/Products/Products";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDetail from "../pages/ProductDetails/ProductDetail";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
