import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard/DashboardList";
import Category from "./pages/category/CategoryList";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
