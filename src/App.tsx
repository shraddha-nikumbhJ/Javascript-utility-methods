import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductDashboard from "./components/ProductDashboard";

export const App = () => {
  // console.log(process.env.APP_NAME);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/db" element={<ProductDashboard />} />
    </Routes>
  );
};
