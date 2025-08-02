import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mockData } from "../../data/mockData";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";

const CategoryList = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const filteredProducts = mockData
    .filter((p) => p.category === category)
    .filter((p) => p.price >= 20 && p.price <= 100)
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold capitalize mb-6">{category}</h2>

      {/* Optional: Add a search bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 px-4 py-2 border rounded w-full md:w-1/2"
      />

      {filteredProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
