import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useRef } from "react";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import CartDrawer from "../pages/cart/CartDrawer";
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
  const closeRef = useRef(null);
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          Modave
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">
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

        {/* Icons */}
        <div className="flex gap-5">
          <IoMdSearch className="cursor-pointer w-5  h-5 hover:text-red-500" />
          <Link to="/account">
            <FaRegUser className="hover:text-red-500 w-5  h-5" />
          </Link>
          <Link to="/wishlist">
            <FaRegHeart className="hover:text-red-500 w-5  h-5" />
          </Link>

          <MdShoppingCartCheckout
            className="hover:text-red-500 w-5  h-5"
            onClick={() => setIsCartOpen(true)}
          />
        </div>
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          ref={closeRef}
        />
      </div>
    </div>
  );
};

export default Header;
