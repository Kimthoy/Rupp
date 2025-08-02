import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ title, category, subcategories }) => {
  return (
    <div className="group relative">
      <button className="px-4 py-2 hover:text-red-500 font-medium">
        {title}
      </button>

      <div className="absolute hidden group-hover:block bg-white shadow-xl border top-full left-0 p-6 z-50 min-w-[200px]">
        <h4 className="text-sm font-bold mb-3 text-gray-800">
          {title} Categories
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {subcategories.map((sub, i) => (
            <li key={i}>
              <Link
                to={`/category/${category}?sub=${sub.toLowerCase()}`}
                className="hover:text-red-500"
              >
                {sub}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
