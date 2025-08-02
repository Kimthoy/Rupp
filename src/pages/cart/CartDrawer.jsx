import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const CartDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose}>
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="p-4 bg-green-50">
          <div className="w-full h-2 bg-white border rounded-full relative">
            <div className="h-2 bg-green-600 w-3/4 rounded-full"></div>
            <div className="absolute top-[-6px] left-[72%] w-5 h-5 rounded-full border-2 border-green-600 bg-white flex items-center justify-center">
              🚚
            </div>
          </div>
          <p className="text-green-700 text-sm mt-2">
            Congratulations! You've got free shipping!
          </p>
        </div>

        {/* Cart item */}
        <div className="flex items-center gap-4 p-4 border-b">
          <img
            src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Item"
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex-1">
            <h4 className="font-medium">Faux-leather trousers</h4>
            <p className="text-sm text-gray-500">XL / Blue</p>
            <p className="text-sm mt-1">1 x $79.99</p>
          </div>
          <button className="text-red-600 text-sm font-medium">Remove</button>
        </div>

        {/* Tabs */}
        <div className="flex justify-around border-b py-2 text-sm text-gray-700">
          <span>📝 Note</span>
          <span>🚚 Shipping</span>
          <span>🏷️ Coupon</span>
        </div>

        {/* Subtotal and actions */}
        <div className="p-4 mt-auto border-t">
          <div className="flex justify-between font-medium mb-3">
            <span>Subtotal</span>
            <span>$79.99</span>
          </div>
          <label className="flex items-start text-sm mb-4 gap-2">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree with{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </span>
          </label>
          <div className="flex gap-3">
            <button className="flex-1 border px-4 py-2 rounded">
              View Cart
            </button>
            <button className="flex-1 bg-black text-white px-4 py-2 rounded">
              Check Out
            </button>
          </div>
          <p className="text-center text-sm mt-3 text-gray-500">
            OR CONTINUE SHOPPING
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
