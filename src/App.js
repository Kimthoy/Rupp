import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard/DashboardList";
import Category from "./pages/category/CategoryList";
import Wishlist from "./pages/dashboard/Wishlist";
import Topbar from "./components/Topbar";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/product/ProductDetail";
import { CompareProvider } from "./context/CompareContext";
import ComparePage from "./pages/product/ComparePage";
import Account from "./pages/account/Account";
function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <CompareProvider>
          <BrowserRouter>
            <Topbar />
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/category/:category" element={<Category />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Toaster position="top-right" />
          </BrowserRouter>
        </CompareProvider>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
