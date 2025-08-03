import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useRef } from "react";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";
import { FaRandom } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
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
  const closeRef = useRef(null);
  const { wishlist } = useWishlist();
  const { cartItems = [] } = useCart();
  const { compareItems } = useCompare();
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-[#006699]">
          Modave
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-red-500 font-medium text-[#006699]"
          >
            Home
          </Link>
          <div className="text-[#006699] flex flex-1">
            {categoryMenus.map((cat, idx) => (
              <MegaMenu
                key={idx}
                title={cat.title}
                category={cat.category}
                subcategories={cat.subcategories}
              />
            ))}
          </div>
        </nav>
        <div className="flex gap-5">
          <Link to="/account">
            <FaRegUser className="hover:text-red-500 w-6  h-6 text-[#006699]" />
          </Link>
          <div className="relative">
            <Link to="/compare">
              <FaRandom className="hover:text-red-500 w-6 h-6 text-[#006699]" />
            </Link>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {compareItems.length}
            </span>
          </div>
          <div className="relative">
            <Link to="/wishlist">
              <FaRegHeart className="hover:text-red-500 w-6 h-6 text-[#006699]" />
            </Link>
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2  bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </div>
          <div className="relative">
            <MdShoppingCartCheckout
              className="hover:text-red-500 w-6 h-6 text-[#006699]"
              onClick={() => setIsCartOpen(true)}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
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
