import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );

    const customerInfo = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      zip: form.zip,
      country: form.country,
    };

    const orderData = {
      items: cartItems,
      total: totalAmount,
      customer: customerInfo,
    };

    navigate("/success", { state: orderData });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const total = subtotal;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Process Checkout</h1>
      <p className="text-sm rounded-xl mb-4">
        Please fill in your information correctly to process your purchase.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="space-y-4">
            {[
              "name",
              "email",
              "phone",
              "address",
              "city",
              "zip",
              "country",
            ].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-left">
            <p className="text-gray-900 font-semibold text-lg">
              Total: <span className="float-right">${total.toFixed(2)}</span>
            </p>
          </div>

          <button
            type="submit"
            className={`mt-6 w-full py-3 rounded transition ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-black hover:bg-gray-900"
            } text-white`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Place Order"}
          </button>

          <p className="bg-red-100 px-4 py-2 text-red-600 mt-4 font-light text-sm rounded-xl">
            <span className="font-semibold">Please take a note:</span> Products
            purchased cannot be returned. Please read our terms and conditions
            before purchasing.
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
