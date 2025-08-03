import React from "react";
import { FaHeart, FaRandom, FaEye } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCompare } from "../context/CompareContext";
const ProductCard = ({ product, onAddToCart = () => {} }) => {
  const { addToWishlist } = useWishlist();
  const { addToCompare } = useCompare();
  return (
    <div className="shadow-xl rounded-xl">
      <div className="relative overflow-hidden rounded-xl   group">
        <div className="absolute rounded-xl inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 z-10" />

        <img
          src={product.image}
          alt={product.name}
          className="w-full   h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-out z-20">
          <button
            onClick={() => {
              addToWishlist(product);
              toast.success(`${product.name} added to wishlist!`);
            }}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform hover:scale-110"
          >
            <FaHeart className="text-gray-700 text-sm" />
          </button>

          <button
            onClick={() => {
              addToCompare(product);
              toast.success(`${product.name} added to compare!`);
            }}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform hover:scale-110"
          >
            <FaRandom className="text-gray-700 text-sm" />
          </button>

          <Link to={`/product/${product.id}`}>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transform hover:scale-110">
              <FaEye className="text-gray-700 text-sm " />
            </button>
          </Link>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="absolute sm:text-sm text-xs text-md bottom-4 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white hover:bg-black text-black px-2 py-2 shadow hover:text-white transition-all duration-300 ease-out z-20"
        >
          ADD TO CART
        </button>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-gray-800 font-semibold mt-1 sm:text-lg text-xs">
          {product.name}
        </h3>
        <p className="text-gray-800 font-semibold mt-1 sm:text-lg text-xs">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
