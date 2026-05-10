import React from "react";
import { Product } from "../types/product";

type Props = {
  product: Product;
  onClick: (product: Product) => void;
};

const ProductCard = ({ product, onClick }: Props) => {
  const handleClick = () => {
    onClick(product);
  };
  return (
    <div className="product-card" onClick={handleClick}>
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        srcSet={`
                ${product.image}&w=200 200w,
                ${product.image}&w=400 400w,
                ${product.image}&w=800 800w
              `}
        sizes=" (max-width: 768px) 200px, (max-width: 1200px) 400px, 800px"
      />
      <h3>{product.title}</h3>
      <p> ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default React.memo(ProductCard);
