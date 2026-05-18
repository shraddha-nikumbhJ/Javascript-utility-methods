import { Grid, AutoSizer } from "react-virtualized";
import { lazy, Suspense, useCallback } from "react";
import "../../styles/main.scss";
import { Product } from "../../types/product";
const ProductCard = lazy(() => import("./ProductCard"));

type Props = {
  products: Product[];
};

const GAP = 12;

const ProductGrid = ({ products }: Props) => {
  const handleSelect = useCallback((product: Product) => {
    console.log(product);
  }, []);

  // RESPONSIVE COLUMN COUNT
  const getColumnCount = (width: number) => {
    if (width < 576) return 1;

    if (width < 768) return 2;

    if (width < 992) return 3;

    return 4;
  };

  const cellRenderer = ({
    columnIndex,
    key,
    rowIndex,
    style,
    columnCount
  }: {
    columnIndex: number;
    key: string;
    rowIndex: number;
    style: React.CSSProperties;
    columnCount: number;
  }) => {
    const productIndex = rowIndex * columnCount + columnIndex;

    const product = products[productIndex];

    if (!product) return null;

    return (
      <div
        key={key}
        style={{
          ...style,
          padding: GAP,
          boxSizing: "border-box"
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <ProductCard product={product} onClick={handleSelect} />
        </Suspense>
      </div>
    );
  };

  return (
    <div
      className="virtualized-wrapper"
      style={{ width: "100%", height: "100vh" }}
    >
      <h1 id="product-list-heading" className="header">
        Product List
      </h1>
      <AutoSizer>
        {({ width, height }) => {
          const columnCount = getColumnCount(width);

          const columnWidth = width / columnCount;

          const CARD_HEIGHT = 350;

          const rowCount = Math.ceil(products.length / columnCount);

          return (
            <Grid
              width={width}
              height={height}
              columnWidth={columnWidth}
              columnCount={columnCount}
              rowHeight={CARD_HEIGHT}
              rowCount={rowCount}
              cellRenderer={(props) =>
                cellRenderer({
                  ...props,
                  columnCount
                })
              }
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default ProductGrid;
