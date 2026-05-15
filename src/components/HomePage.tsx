import products from "../data/products";
import ErrorBoundary from "./ErrorBoundry";
import ProductGrid from "./ProductGridVirtualized";

export const HomePage = () => {
  return (
    <main role="main" aria-label="Product listing page">
      <ErrorBoundary>
        <section aria-labelledby="products-heading">
          <h1
            id="products-heading"
            style={{
              textAlign: "center",
              margin: "20px 0"
            }}
          >
            Product Listing
          </h1>

          <ProductGrid products={products} />
        </section>
      </ErrorBoundary>
    </main>
  );
};
