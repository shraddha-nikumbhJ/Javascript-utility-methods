import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductDashboard from "./components/ProductDashboard";
import ProductGrid from "./components/ProductGridVirtualized";
import products from "./data/products";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products" element={<ProductGrid products={products} />} />
      <Route path="/dashboard" element={<ProductDashboard />} />
    </Routes>
  );
};
