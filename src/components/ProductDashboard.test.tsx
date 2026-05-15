import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDashboard from "./ProductDashboard";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../store/productApi";

// MOCK REDUX
jest.mock("react-redux", () => ({
  useSelector: jest.fn()
}));

// MOCK RTK QUERY
jest.mock("../store/productApi", () => ({
  useGetProductsQuery: jest.fn()
}));

// MOCK CHILD COMPONENTS
jest.mock("./searchProduct", () => () => (
  <div data-testid="search-product">Search Product</div>
));

jest.mock("./Pagination", () => ({
  __esModule: true,

  default: ({ total }: any) => (
    <div data-testid="pagination">Pagination {total}</div>
  )
}));

describe("ProductDashboard Component", () => {
  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          search: "",
          currentPage: 1,
          limit: 10
        }
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null
    });

    render(<ProductDashboard />);

    expect(screen.getByRole("status")).toHaveTextContent(/loading products/i);
  });

  test("renders error state", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: true
    });

    render(<ProductDashboard />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      /error fetching products/i
    );
  });

  test("renders products correctly", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        total: 2,
        products: [
          {
            id: 1,
            title: "Phone",
            price: 1000,
            images: ["img1"]
          },
          {
            id: 2,
            title: "Laptop",
            price: 2000,
            images: ["img2"]
          }
        ]
      }
    });

    render(<ProductDashboard />);
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  test("renders dashboard heading", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        total: 0,
        products: []
      }
    });

    render(<ProductDashboard />);

    expect(
      screen.getByRole("heading", { name: /product dashboard/i })
    ).toBeInTheDocument();
  });

  test("renders SearchProduct component", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        total: 0,
        products: []
      }
    });

    render(<ProductDashboard />);

    expect(screen.getByTestId("search-product")).toBeInTheDocument();
  });

  test("renders Pagination component", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        total: 50,
        products: []
      }
    });

    render(<ProductDashboard />);

    expect(screen.getByTestId("pagination")).toHaveTextContent("Pagination 50");
  });

  test("renders product list items", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        total: 2,
        products: [
          {
            id: 1,
            title: "Phone",
            price: 1000,
            images: ["img1"]
          },
          {
            id: 2,
            title: "Laptop",
            price: 2000,
            images: ["img2"]
          }
        ]
      }
    });
    render(<ProductDashboard />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(2);
  });

  // IMAGE ACCESSIBILITY TEST
  test("renders accessible product images", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        total: 1,
        products: [
          {
            id: 1,
            title: "Phone",
            price: 1000,
            images: ["img1"]
          }
        ]
      }
    });
    render(<ProductDashboard />);
    expect(screen.getByAltText("Phone")).toBeInTheDocument();
  });
});
