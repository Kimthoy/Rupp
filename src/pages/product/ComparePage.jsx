import React from "react";
import { useCompare } from "../../context/CompareContext";
import ProductCard from "../../components/ProductCard";

const ComparePage = () => {
  const { compareItems, clearCompare } = useCompare();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Compare Products</h2>
        <button
          onClick={clearCompare}
          className="text-sm bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Compare
        </button>
      </div>

      {compareItems.length === 0 ? (
        <p>No products in compare list.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {compareItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparePage;
