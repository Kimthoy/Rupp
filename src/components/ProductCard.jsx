import React from "react";
import { FaHeart, FaRandom, FaEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-out">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform hover:scale-110">
            <FaHeart className="text-gray-700 text-sm" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform hover:scale-110">
            <FaRandom className="text-gray-700 text-sm" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform hover:scale-110">
            <FaEye className="text-gray-700 text-sm" />
          </button>
        </div>

        <button className="absolute text-md bottom-4 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white hover:bg-black text-black  px-2 py-2  shadow hover:text-white transition-all duration-300 ease-out">
          ADD TO CART
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="text-gray-800 font-semibold mt-1">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
