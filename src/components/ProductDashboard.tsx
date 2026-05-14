import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../store/productApi";
import SearchProduct from "./searchProduct";
import "../styles/main.scss";
import Pagination from "./Pagination";

const ProductDashboard = () => {
  const { search, currentPage, limit } = useSelector(
    (state: any) => state.productDashboard
  );
  const skip: number = (currentPage - 1) * limit;
  const { data, isLoading, error } = useGetProductsQuery({
    search,
    limit,
    skip
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error fetching products</h2>;
  }

  return (
    <div>
      <h1 className="header">Product Dashboard</h1>
      <div className="header">
        <SearchProduct />
      </div>
      <div className="product-grid">
        {data?.products?.map((product: any) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} width="100" />

            <h3>{product.title}</h3>

            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <Pagination total={data?.total || 0} />
    </div>
  );
};

export default ProductDashboard;
