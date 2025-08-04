import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockData } from "../../data/mockData";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  
  const sizes = ["S", "M", "L", "XL"];

  const product = mockData.find((p) => p.id === id);
  if (!product) return <p className="text-center py-10">Product not found</p>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size.");
      return;
    }

    addToCart({ ...product, quantity, size: selectedSize });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link
        to="/"
        className="inline-block mb-6 text-sm text-blue-600 font-medium hover:underline"
      >
        ← Back to Cart
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow"
        />

        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-[#006699]">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-800">
            ${product.price}
          </p>
          <p className="text-[#006699] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies.
          </p>

          {/* Size Selection */}
          <div>
            <label className="block mb-2 font-medium">Select Size</label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center gap-4">
            <label className="font-medium">Quantity</label>
            <div className="flex items-center border rounded">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
