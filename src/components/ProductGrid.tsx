import ProductCard from "./ProductCard";
import "../styles/product.css";

type Product = {
  id: string | number;
  image: string;
  title: string;
  price: number;
};

type Props = {
  products: Product[];
};

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductGrid;
