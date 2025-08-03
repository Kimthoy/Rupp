import React, { useState, useRef } from "react";
import { useCart } from "../../context/CartContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [showInvoice, setShowInvoice] = useState(false);
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

  const invoiceRef = useRef(null);
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const total = subtotal;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowInvoice(true);
    setTimeout(async () => {
      const input = invoiceRef.current;
      if (input) {
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("invoice.pdf");
      }

      setShowInvoice(false);
      alert("Order placed successfully! Invoice downloaded.");
      navigate("/");
    }, 500);
  };

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
            className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
          >
            Place Order
          </button>

          <p className="bg-red-100 px-4 py-2 text-red-600 mt-4 font-light text-sm rounded-xl">
            <span className="font-semibold">Please take a note:</span> Products
            purchased cannot be returned. Please read our terms and conditions
            before purchasing.
          </p>
        </div>
      </form>

      {showInvoice && (
        <div
          ref={invoiceRef}
          className="p-6 mt-12 bg-white shadow-lg w-[600px] absolute left-[-9999px] top-0"
        >
          <h2 className="text-2xl font-bold mb-4">Invoice</h2>
          <p>
            <strong>Name:</strong> {form.name}
          </p>
          <p>
            <strong>Email:</strong> {form.email}
          </p>
          <p>
            <strong>Phone:</strong> {form.phone}
          </p>
          <p>
            <strong>Address:</strong> {form.address}, {form.city}, {form.zip},{" "}
            {form.country}
          </p>
          <hr className="my-4" />
          <h3 className="text-lg font-semibold mb-2">Items:</h3>
          {cartItems.map((item, idx) => (
            <div key={idx} className="text-sm flex justify-between">
              <span>
                {item.name} x {item.quantity || 1}
              </span>
              <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
            </div>
          ))}
          <hr className="my-4" />
          <p>
            <strong>Total:</strong> ${total.toFixed(2)}
          </p>
          <p className="mt-4 text-sm">Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
