import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
  const [select, setSelect] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentType === "cod") {
      toast("Congrats! You selected Cash on Delivery!");
    } else {
      toast("Congrats! Your payment successful!");
    }
    navigate("/");
  };

  return (
    <div className="my-8">
      <h1 className="flex justify-center text-3xl font-bold text-[#111111] mb-6">
        Select Payment Type
      </h1>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-start items-center">
            <input
              onClick={() => {
                setSelect(!select);
                setPaymentType("online");
              }}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <p className="p-2">Online</p>
          </div>
          <div className="flex justify-start items-center">
            <input
              onClick={() => {
                setSelect(!select);
                setPaymentType("cod");
              }}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <p className="p-2">Cash On Delivery (COD)</p>
          </div>
          <div className="mt-4">
            <button
              onClick={handlePayment}
              disabled={!select && true}
              className="btn bg-[#0080ff] text-white text-xl font-bold"
            >
              Payment
            </button>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Payment;
