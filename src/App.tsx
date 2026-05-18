import { Routes, Route } from "react-router-dom";
import { HomePage } from "./features/HomePage";
import ProductDetails from "./features/productList/ProductDetails";
import ProductDashboard from "./features/dashboard/ProductDashboard";
import ProductGrid from "./features/productList/ProductGridVirtualized";
import products from "./features/productList/api/products";

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
