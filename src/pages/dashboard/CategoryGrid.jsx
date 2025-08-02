import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../../data/mockData";
import ProductCard from "../../components/ProductCard";

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

const CategoryGrid = ({ onAddToCart }) => {
  return (
    <div className="space-y-10">
      {categories.map((cat, i) => {
        const filtered = mockData
          .filter((p) => p.category === cat.path)
          .slice(0, 3);

        return (
          <div key={i}>
            <Link
              to={`/category/${cat.path}`}
              className="block mb-4 group rounded overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="text-center py-2 font-semibold text-gray-800 bg-white">
                {cat.name}
              </div>
            </Link>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryGrid;
