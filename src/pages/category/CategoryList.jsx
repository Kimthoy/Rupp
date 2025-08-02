import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const Category = () => {
  const { category } = useParams();

 const categoryImages = {
   women:
     "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
   men: "https://images.pexels.com/photos/3775533/pexels-photo-3775533.jpeg?auto=compress&cs=tinysrgb&w=600",
   kids: "https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg?auto=compress&cs=tinysrgb&w=600",
   accessories:
     "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600",
 };

 const products = [
   {
     name: `${category} Item 1`,
     image: categoryImages[category],
     price: 49.99,
   },
   {
     name: `${category} Item 2`,
     image: categoryImages[category],
     price: 59.99,
   },
 ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold capitalize mb-6">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Category;
