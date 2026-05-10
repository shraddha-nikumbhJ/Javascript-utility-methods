import ErrorBoundary from "./ErrorBoundry";
// import ProductGrid from "./ProductGrid";
import ProductGrid from "./ProductGridVirtualized";
import products from "../data/products";

export const HomePage = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Welcome to the Home Page</h1>
        <ProductGrid products={products} />
      </div>
    </ErrorBoundary>
  );
};
