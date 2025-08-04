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
import CheckoutPage from "./pages/dashboard/CheckoutPage";
import Categories from "./pages/category/Categories";
import TermsAndConditions from "./pages/product/Terms";
import CartDrawer from "./pages/cart/CartDrawer";
import Footer from "./components/Footer";
import SuccessPage from "./pages/dashboard/SuccessPage";
import OrderDetailsModal from "./pages/dashboard/OrderDetails";
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
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/cart" element={<CartDrawer />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/orderdetail" element={ <OrderDetailsModal/>} />
            </Routes>
            <Toaster position="top-right" />
            <Footer />
          </BrowserRouter>
        </CompareProvider>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
