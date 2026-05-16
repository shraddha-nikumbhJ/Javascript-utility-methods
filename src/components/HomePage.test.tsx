import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "./HomePage";
import { Product } from "../types/product";

jest.mock("../data/products", () => [
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
  }
]);

jest.mock("./ProductGridVirtualized", () => ({
  __esModule: true,

  default: ({ products }: { products: Product[] }) => (
    <div data-testid="product-grid">
      Product Grid
      {products.length}
    </div>
  )
}));

jest.mock("./ErrorBoundry", () => ({
  __esModule: true,

  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="error-boundary">{children}</div>
  )
}));

describe("HomePage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders HomePage component", () => {
    render(<HomePage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders product listing heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /product listing/i })
    ).toBeInTheDocument();
  });

  test("renders ProductGrid component", () => {
    render(<HomePage />);
    expect(screen.getByTestId("product-grid")).toBeInTheDocument();
  });

  test("wraps content inside ErrorBoundary", () => {
    render(<HomePage />);

    expect(screen.getByTestId("error-boundary")).toBeInTheDocument();
  });

  test("renders accessible main landmark", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("main", { name: /product listing page/i })
    ).toBeInTheDocument();
  });

  test("renders products section", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("region", { name: /product listing/i })
    ).toBeInTheDocument();
  });
});
