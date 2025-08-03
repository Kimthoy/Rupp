import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../../data/mockData";

const Categories = () => {
  const grouped = Object.values(
    mockData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          name: item.category.charAt(0).toUpperCase() + item.category.slice(1),
          image: item.image,
          count: 1,
          path: `/category/${item.category}`,
        };
      } else {
        acc[item.category].count += 1;
      }
      return acc;
    }, {})
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">All Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {grouped.map((cat, idx) => (
          <Link
            to={cat.path}
            key={idx}
            className="text-center border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} items</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
