import { Grid, AutoSizer } from "react-virtualized";
import { lazy, Suspense, useCallback } from "react";
//import ProductCard from "./ProductCard";
import "../styles/product.css";
import { Product } from "../types/product";

const ProductCard = lazy(() => import("./ProductCard"));

type Props = {
  products: Product[];
};

const COLUMN_COUNT = 4;
const CARD_WIDTH = 280;
const CARD_HEIGHT = 350;

const ProductGrid = ({ products }: Props) => {
  const rowCount = Math.ceil(products.length / COLUMN_COUNT);

  const handleSelect = useCallback((product: Product) => {
    console.log(product);
  }, []);

  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    const productIndex = rowIndex * COLUMN_COUNT + columnIndex;

    const product = products[productIndex];

    return (
      <div key={key} style={style}>
        <Suspense fallback="Loading...">
          <ProductCard product={product} onClick={handleSelect} />
        </Suspense>
      </div>
    );
  };

  return (
    <>
      <h1 className="header">Product List</h1>
      <div className="virtualized-wrapper">
        <AutoSizer>
          {({ width, height }) => (
            <Grid
              width={width}
              height={height}
              columnWidth={CARD_WIDTH}
              columnCount={COLUMN_COUNT}
              rowHeight={CARD_HEIGHT}
              rowCount={rowCount}
              cellRenderer={cellRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </>
  );
};

export default ProductGrid;
