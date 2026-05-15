import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <main aria-labelledby="product-details-heading">
      <h1 id="product-details-heading">Product Details</h1>

      <section aria-label="Product Information">
        <p>
          <strong>Product ID:</strong>{" "}
          <span aria-label={`Product ID ${id}`}>{id}</span>
        </p>
      </section>
    </main>
  );
};

export default ProductDetails;
