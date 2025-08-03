import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import SuggestedCategories from "./SuggestedCategories";
import CustomerReviews from "./CustomerReviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";
import { mockData, categories } from "../../data/mockData";

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsCartOpen(true);
    toast.success(`${product.name} added to cart!`);
  };

  const featured = mockData.slice(0, 8);
  const sliderData = mockData.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Slider */}
      <div className="mb-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-xl overflow-hidden"
        >
          {sliderData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-96 md:h-[500px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out scale-100 hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-8 left-6 md:left-10 text-white z-10">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow">
                    {product.name}
                  </h2>
                  <p className="text-sm md:text-base mb-4 max-w-md hidden md:block">
                    Discover our latest collection of{" "}
                    {product.name.toLowerCase()} with comfort and style.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-bold mb-4 text-[#006699]">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories.map((cat, index) => (
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

      {/* Promo Section */}
      <div className="bg-blue-100 rounded-xl p-6 text-center mb-12">
        <h3 className="text-xl font-semibold mb-2">Summer Sale</h3>
        <p className="text-[#006699] mb-3">Up to 40% off selected items</p>
        <Link
          to="/category/women"
          className="inline-block  bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <h2 className="text-2xl text-[#006699] font-bold mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Category Suggestions & Reviews */}
      <SuggestedCategories />
      <CustomerReviews
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />

      {/* Newsletter */}
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
