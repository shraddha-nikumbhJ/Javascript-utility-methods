import products from "../data/products";
import ErrorBoundary from "./ErrorBoundry";
import ProductGrid from "./ProductGridVirtualized";

export const HomePage = () => {
  return (
    <ErrorBoundary>
      <div>
        <ProductGrid products={products} />
      </div>
    </ErrorBoundary>
  );
};
