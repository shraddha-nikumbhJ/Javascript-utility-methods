import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductGrid from "./ProductGridVirtualized";

jest.mock("react-virtualized", () => ({
  AutoSizer: ({ children }: any) =>
    children({
      width: 1200,
      height: 800
    }),

  Grid: ({ cellRenderer, columnCount, rowCount }: any) => {
    const cells = [];

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        cells.push(
          cellRenderer({
            columnIndex,
            rowIndex,
            key: `${rowIndex}-${columnIndex}`,
            style: {}
          })
        );
      }
    }

    return <div data-testid="grid">{cells}</div>;
  }
}));

jest.mock("./ProductCard", () => ({
  __esModule: true,

  default: ({ product }: any) => (
    <div data-testid="product-card">{product.title}</div>
  )
}));

describe("ProductGrid Component", () => {
  const mockProducts = [
    {
      id: 1,
      title: "Phone",
      price: 1000,
      image: "img1"
    },

    {
      id: 2,
      title: "Laptop",
      price: 2000,
      image: "img2"
    },

    {
      id: 3,
      title: "Tablet",
      price: 3000,
      image: "img3"
    },

    {
      id: 4,
      title: "Watch",
      price: 4000,
      image: "img4"
    }
  ];

  test("verify ProductGrid component is rendered", () => {
    render(<ProductGrid products={mockProducts} />);

    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });

  test("verify all products are rendered", () => {
    render(<ProductGrid products={mockProducts} />);

    const cards = screen.getAllByTestId("product-card");

    expect(cards.length).toBe(4);
  });

  test("verify correct product titles are rendered", () => {
    render(<ProductGrid products={mockProducts} />);

    expect(screen.getByText("Phone")).toBeInTheDocument();

    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  test("verify no cards are rendered when products array is empty", () => {
    render(<ProductGrid products={[]} />);

    const cards = screen.queryAllByTestId("product-card");

    expect(cards.length).toBe(0);
  });

  test("verify virtualized wrapper exists", () => {
    const { container } = render(<ProductGrid products={mockProducts} />);

    expect(container.querySelector(".virtualized-wrapper")).toBeInTheDocument();
  });

  test("verify lazy loaded ProductCard is rendered", async () => {
    render(<ProductGrid products={mockProducts} />);

    expect(await screen.findByText("Phone")).toBeInTheDocument();
  });
});
