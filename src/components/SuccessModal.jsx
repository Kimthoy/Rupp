import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SuccessModal = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const orderId =
    state.orderId || "ORD" + Math.floor(Math.random() * 900000 + 100000);
  const orderData = state;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <CheckCircle className="text-blue-500 mx-auto mb-4" size={64} />

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mb-6">
          Your order <span className="font-medium text-black">#{orderId}</span>{" "}
          has been confirmed and will be processed shortly.
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full mb-3"
          onClick={() => navigate("/orderdetail", { state: orderData })}
        >
          View Order Details
        </button>

        <button
          className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded w-full"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
