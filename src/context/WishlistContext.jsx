import React, { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    // Avoid duplicates
    if (!wishlist.find((item) => item.name === product.name)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (name) => {
    setWishlist(wishlist.filter((item) => item.name !== name));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
