import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../../data/mockData";

const groupedCategories = Object.values(
  mockData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = {
        name: item.category.charAt(0).toUpperCase() + item.category.slice(1),
        image: item.image,
        path: `/category/${item.category}`,
        count: 1,
      };
    } else {
      acc[item.category].count += 1;
    }
    return acc;
  }, {})
);

const SuggestedCategories = () => {
  return (
    <div className="my-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#006699]">
          Categories you might like
        </h2>
        <Link
          to="/categories"
          className="text-sm font-medium underline hover:text-blue-600 text-[#006699]"
        >
          View All Collection
        </Link>
      </div>

      <div className="overflow-x-auto flex gap-6 scrollbar-hide">
        {groupedCategories.map((cat, index) => (
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
