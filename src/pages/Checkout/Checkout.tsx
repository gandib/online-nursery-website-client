/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import orderApi from "../../redux/features/products/orderApi";
import { setQuantityAfterOrder } from "../../redux/features/productCartSlice";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { products } = useAppSelector((state) => state.cartProduct);
  const navigate = useNavigate();
  const [addOrder] = orderApi.useAddOrderMutation();
  const dispatch = useAppDispatch();

  const userInfo = {
    name,
    phone,
    address,
  };

  let cartTotalPrice = 0;
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    cartTotalPrice = cartTotalPrice! + element.totalPrice!;
  }

  let giveInfo = false;
  if (userInfo?.name && userInfo?.phone && userInfo?.address) {
    giveInfo = true;
  }

  const handleOrder = async () => {
    for (let index = 0; index < products.length; index++) {
      const product = products[index];

      const data = {
        productId: product._id,
        quantity: product.newQuantity,
        name: userInfo?.name,
        phone: userInfo?.phone,
        address: userInfo?.address,
      };

      if (product.quantity !== 0) {
        try {
          const res = await addOrder(data).unwrap();
          dispatch(setQuantityAfterOrder(product));
          toast.success(res.message);
          navigate("/payment");
        } catch (error: any) {
          toast.error(error?.data?.message);
        }
      } else {
        toast.error("Product is out of stock!");
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-8">
      {/* user details */}
      <div>
        <div className="card bg-base-100 w-full shadow-xl flex justify-center items-center">
          <div className="card-body">
            <h2 className="card-title">Personal Information</h2>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input input-bordered w-full max-w-10/12"
            />
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>

      {/* payment section */}
      <div className="bg-slate-100 p-8 border rounded">
        <h1 className="text-xl sm:text-3xl font-semi-bold">Your Order</h1>
        <div className="flex justify-between items-center p-4">
          <p className="text-xl font-bold text-[#111111]">Product</p>
          <p className="text-xl font-bold text-[#111111]">SubTotal</p>
        </div>
        <div className="">
          {products.map((product) => (
            <div
              className="flex justify-between items-center px-2 sm:px-4"
              key={product._id}
            >
              <p className="text-lg sm:text-xl  text-[#111111]">
                {product.title} X {product.newQuantity}
              </p>
              <p className="text-xl text-[#111111]">{product.totalPrice}</p>
            </div>
          ))}
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold text-[#111111]">Total</h1>
            <p className="text-xl text-[#111111]">{cartTotalPrice}</p>
          </div>
        </div>
        <div>
          <button
            disabled={!giveInfo && true}
            onClick={handleOrder}
            className="btn bg-[#0080ff] text-white font-bold text-xl w-full"
          >
            Choose Payment Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
