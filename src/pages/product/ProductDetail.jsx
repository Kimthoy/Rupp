import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockData } from "../../data/mockData";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockData.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <p className="text-center py-10">Product not found</p>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link
        to="/cart"
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
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-800">
            ${product.price}
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies.
          </p>
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
