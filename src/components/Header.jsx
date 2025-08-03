import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaRandom,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import MegaMenu from "./MegaMenu";
import CartDrawer from "../pages/cart/CartDrawer";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useCompare } from "../context/CompareContext";

const categoryMenus = [
  {
    title: "Women",
    category: "women",
    subcategories: ["Tops", "Dresses", "Shoes"],
  },
  {
    title: "Men",
    category: "men",
    subcategories: ["Shirts", "Pants", "Shoes"],
  },
  {
    title: "Kids",
    category: "kids",
    subcategories: ["Baby", "Boys", "Girls"],
  },
  {
    title: "Accessories",
    category: "accessories",
    subcategories: ["Bags", "Jewelry", "Sunglasses"],
  },
];

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cartItems = [] } = useCart();
  const { compareItems } = useCompare();

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#006699]">
          Modave
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#006699] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[#006699]">
          <Link to="/" className="hover:text-red-500 font-medium">
            Home
          </Link>
          {categoryMenus.map((cat, idx) => (
            <MegaMenu
              key={idx}
              title={cat.title}
              category={cat.category}
              subcategories={cat.subcategories}
            />
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          <Link to="/account">
            <FaRegUser className="hover:text-red-500 w-5 h-5 text-[#006699]" />
          </Link>
          <Link to="/compare" className="relative">
            <FaRandom className="hover:text-red-500 w-5 h-5 text-[#006699]" />
            {compareItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {compareItems.length}
              </span>
            )}
          </Link>
          <Link to="/wishlist" className="relative">
            <FaRegHeart className="hover:text-red-500 w-5 h-5 text-[#006699]" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          <div className="relative">
            <MdShoppingCartCheckout
              onClick={() => setIsCartOpen(true)}
              className="hover:text-red-500 w-5 h-5 text-[#006699] cursor-pointer"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 border-t">
          <Link
            to="/"
            className="block text-[#006699] hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {categoryMenus.map((cat, idx) => (
            <MegaMenu
              key={idx}
              title={cat.title}
              category={cat.category}
              subcategories={cat.subcategories}
            />
          ))}
          <div className="flex gap-9 mt-4">
            <Link to="/account">
              <FaRegUser className="text-[#006699] w-5 h-5" />
            </Link>
            <Link to="/compare">
              <FaRandom className="text-[#006699] w-5 h-5" />
            </Link>
            <Link to="/wishlist">
              <FaRegHeart className="text-[#006699] w-5 h-5" />
            </Link>
            <MdShoppingCartCheckout
              className="text-[#006699] w-5 h-5 cursor-pointer"
              onClick={() => {
                setIsCartOpen(true);
                setMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
