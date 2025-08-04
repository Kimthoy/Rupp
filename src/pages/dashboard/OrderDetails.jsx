import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetailsModal = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const { items, customer, total } = state;
  const shipping = 2;
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const tax = +(subtotal * 0.1).toFixed(2);
  const grandTotal = subtotal + tax + shipping;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
        <button
          className="absolute top-3 right-4 text-xl font-bold"
          onClick={() => navigate("/")}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">Receipt Invoice</h2>

        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>

        <div className="bg-gray-100 p-4 rounded text-sm">
          <div className="flex justify-between border-b pb-1 mb-1">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-1 mb-1">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-1 mb-1">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base mt-2">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6 text-gray-600 text-xs text-center border-t pt-2">
          Khmer 23 Shop. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
