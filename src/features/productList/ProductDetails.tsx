import { useParams } from "react-router-dom";
import "../../styles/main.scss";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <main className="product-details-page">
      <h1 id="product-details-heading">Product Details</h1>
      <div className="product-details-card">
        <h1 className="product-name">iPhone 15 Pro</h1>

        <p className="product-price">$999</p>

        <p className="product-id">Product ID: {id}</p>

        <button
          className="buy-now-button"
          aria-label="Buy iPhone 15 Pro"
          onClick={() => window.alert("Thank you for buying product !!!")}
        >
          Buy Now
        </button>
      </div>
    </main>
  );
};

export default ProductDetails;
