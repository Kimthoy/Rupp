import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Promotion",
    image:
      "https://images.pexels.com/photos/7679866/pexels-photo-7679866.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 12,
    path: "/category/promotion",
  },
  {
    name: "Clothing",
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 12,
    path: "/category/clothing",
  },
  {
    name: "Shoes",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 12,
    path: "/category/shoes",
  },
  {
    name: "Bags",
    image:
      "https://images.pexels.com/photos/1667072/pexels-photo-1667072.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 12,
    path: "/category/bags",
  },
  {
    name: "New In",
    image:
      "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 12,
    path: "/category/new-in",
  },
];

const SuggestedCategories = () => {
  return (
    <div className="my-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categories you might like</h2>
        <Link
          to="/categories"
          className="text-sm font-medium underline hover:text-blue-600"
        >
          View All Collection
        </Link>
      </div>

      <div className="overflow-x-auto flex gap-6 scrollbar-hide">
        {categories.map((cat, index) => (
          <Link
            to={cat.path}
            key={index}
            className="flex-shrink-0 w-36 text-center"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-36 h-36 object-cover rounded-full mx-auto border-2 border-gray-200 hover:border-black transition"
            />
            <div className="mt-2 font-medium">{cat.name}</div>
            <div className="text-sm text-gray-500">{cat.count} items</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedCategories;
