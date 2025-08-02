import React from "react";
import { Link } from "react-router-dom";

const categories = [
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
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((cat, i) => (
        <Link
          key={i}
          to={`/category/${cat.path}`}
          className="group block rounded overflow-hidden shadow hover:shadow-lg transition"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/300x300?text=Image+Not+Found";
            }}
          />
          <div className="text-center py-2 font-semibold text-gray-800 bg-white">
            {cat.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
