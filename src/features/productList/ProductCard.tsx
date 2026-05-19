import React from "react";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import "../../styles/main.scss";

type Props = {
  product: Product;
  onClick?: (product: Product) => void;
};

const ProductCard = ({ product, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.(product);
    navigate(`/products/${product.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="product-card"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.title}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        srcSet={`
          ${product.image}&w=200 200w,
          ${product.image}&w=400 400w,
          ${product.image}&w=800 800w
        `}
        sizes="
          (max-width: 768px) 200px,
          (max-width: 1200px) 400px,
          800px
        "
      />
      <h3>{product.title}</h3>

      <p aria-label={`Price ${product.price} dollars`}>
        ${product.price.toFixed(2)}
      </p>
    </article>
  );
};

export default React.memo(ProductCard);
