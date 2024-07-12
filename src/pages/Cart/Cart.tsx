import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  addPrice,
  decreasePrice,
  removeProduct,
} from "../../redux/features/productCartSlice";
import { useNavigate } from "react-router-dom";
import useBeforeUnload from "../../utils/useBeforeUnload";

type TProduct = {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
  isDeleted: boolean;
  totalPrice?: number;
  newQuantity?: number;
};

const Cart = () => {
  const { products } = useAppSelector((state) => state.cartProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //   const cartTotalPrice = products.reduce((prev, current) => {
  //     prev.totalPrice + current.totalPrice;
  //   });

  let cartTotalPrice = 0;
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    cartTotalPrice = cartTotalPrice! + element.totalPrice!;
  }

  console.log(cartTotalPrice);

  useBeforeUnload(
    "If you refresh the page, any data in your cart may be lost. Are you sure you want to proceed?"
  );

  return (
    <div className="my-8">
      <h1 className="text-xl font-semibold">Cart</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products.map((product: TProduct) => (
                <tr key={product?._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-square h-14 w-14">
                          <img src={product?.image} alt={product?.title} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>$ {product.price}</td>
                  <td>
                    <div className="flex justify-center items-center bg-slate-200 p-2 rounded-full">
                      <button
                        onClick={() => {
                          if (product.newQuantity! > 1) {
                            dispatch(decreasePrice(product));
                          }
                        }}
                        className="w-12 h-12 mr-4 bg-[#0080ff] text-white flex justify-center items-center"
                        style={{ borderRadius: "100%" }}
                      >
                        <FaMinus />
                      </button>
                      <p className="mr-4 text-lg">{product.newQuantity}</p>
                      <button
                        onClick={() => {
                          if (product.newQuantity! < product.quantity) {
                            dispatch(addPrice(product));
                          }
                        }}
                        className="w-12 h-12 bg-[#0080ff] text-white flex justify-center items-center"
                        style={{ borderRadius: "100%" }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>
                    <p className="">${product.totalPrice}</p>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(removeProduct(product._id))}
                      className="btn btn-error"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* checkout section */}
        <div className="bg-slate-100 p-8 border rounded">
          <h1 className="text-3xl font-semi-bold">Cart Totals</h1>
          <div className="flex justify-between items-center p-4">
            <p className="text-xl font-bold text-[#111111]">Total</p>
            <p className="text-xl text-[#111111]">{cartTotalPrice}</p>
          </div>
          <div>
            <button
              onClick={() => navigate("/checkout")}
              className="btn bg-[#0080ff] text-white font-bold text-xl w-full"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
