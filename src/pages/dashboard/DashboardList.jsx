import React from "react";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import SuggestedCategories from "./SuggestedCategories";
import CustomerReviews from "./CustomerReviews";
const featuredProducts = [
  {
    name: "Summer Dress",
    image:
      "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 49.99,
  },
  {
    name: "Men's Shirt",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 39.99,
  },
  {
    name: "Kids Jacket",
    image:
      "https://images.pexels.com/photos/3661350/pexels-photo-3661350.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 29.99,
  },
  {
    name: "Leather Bag",
    image:
      "https://images.pexels.com/photos/1667072/pexels-photo-1667072.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 59.99,
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-10">
        <img
          src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hero"
          className="w-full h-96 object-cover rounded-xl"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          {
            name: "Women",
            image:
              "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
            path: "women",
          },
          {
            name: "Men",
            image:
              "https://images.pexels.com/photos/3775533/pexels-photo-3775533.jpeg?auto=compress&cs=tinysrgb&w=600",
            path: "men",
          },
          {
            name: "Kids",
            image:
              "https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg?auto=compress&cs=tinysrgb&w=600",
            path: "kids",
          },
          {
            name: "Accessories",
            image:
              "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600",
            path: "accessories",
          },
        ].map((cat, index) => (
          <Link
            key={index}
            to={`/category/${cat.path}`}
            className="relative group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition"
            />
            <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-3 py-1 text-sm font-medium rounded">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-blue-100 rounded-xl p-6 text-center mb-12">
        <h3 className="text-xl font-semibold mb-2">Summer Sale</h3>
        <p className="text-gray-700 mb-3">Up to 40% off selected items</p>
        <Link
          to="/category/women"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
      <SuggestedCategories />
      <CustomerReviews />
      <div className="bg-gray-100 mt-16 p-6 text-center rounded-xl">
        <h3 className="text-lg font-bold mb-2">Join Our Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">
          Be the first to know about new arrivals and exclusive offers.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
