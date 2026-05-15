import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../store/productApi";
import SearchProduct from "./searchProduct";
import "../styles/main.scss";
import Pagination from "./Pagination";

const ProductDashboard = () => {
  const { search, currentPage, limit } = useSelector(
    (state: any) => state.productDashboard
  );
  const skip = (currentPage - 1) * limit;
  const { data, isLoading, error } = useGetProductsQuery({
    search,
    limit,
    skip
  });

  if (isLoading) {
    return (
      <div role="status" aria-live="polite" className="loading-state">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="error-state">
        Error fetching products.
      </div>
    );
  }

  return (
    <main aria-labelledby="product-dashboard-heading">
      <h1 id="product-dashboard-heading" className="header">
        Product Dashboard
      </h1>

      <section className="header" aria-label="Search Products">
        <SearchProduct />
      </section>

      <section aria-label="Product Listing">
        <div className="product-grid" role="list">
          {data?.products?.map((product: any) => (
            <article
              key={product.id}
              className="product-card"
              role="listitem"
              tabIndex={0}
              aria-label={`Product ${product.title}`}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                loading="lazy"
                width="100%"
              />

              <h2>{product.title}</h2>

              <p aria-label={`Price ${product.price} dollars`}>
                ${product.price}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Pagination total={data?.total || 0} />
    </main>
  );
};

export default ProductDashboard;
