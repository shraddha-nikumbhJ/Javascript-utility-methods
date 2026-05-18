import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

// MOCK NAVIGATION
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn()
}));

describe("ProductCard Component", () => {
  const mockNavigate = jest.fn();
  const mockOnClick = jest.fn();
  const mockProduct = {
    id: 1,
    title: "iPhone 15",
    price: 999,
    image: "https://picsum.photos/200"
  };

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders product title", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("iPhone 15")).toBeInTheDocument();
  });

  test("renders formatted price", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("$999.00")).toBeInTheDocument();
  });

  test("renders product image", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("iPhone 15");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.image);
  });

  test("renders accessible button role", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders aria-label correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(
      screen.getByLabelText(/view details for iphone 15/i)
    ).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    render(<ProductCard product={mockProduct} onClick={mockOnClick} />);
    const card = screen.getByRole("button");
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalledWith(mockProduct);
  });

  test("navigates to product details page on click", () => {
    render(<ProductCard product={mockProduct} />);

    const card = screen.getByRole("button");
    fireEvent.click(card);
    expect(mockNavigate).toHaveBeenCalledWith("/product/1");
  });

  test("handles Enter key press", () => {
    render(<ProductCard product={mockProduct} onClick={mockOnClick} />);

    const card = screen.getByRole("button");
    fireEvent.keyDown(card, {
      key: "Enter"
    });
    expect(mockOnClick).toHaveBeenCalledWith(mockProduct);
    expect(mockNavigate).toHaveBeenCalledWith("/product/1");
  });

  test("handles Space key press", () => {
    render(<ProductCard product={mockProduct} onClick={mockOnClick} />);

    const card = screen.getByRole("button");

    fireEvent.keyDown(card, {
      key: " "
    });

    expect(mockOnClick).toHaveBeenCalledWith(mockProduct);

    expect(mockNavigate).toHaveBeenCalledWith("/product/1");
  });

  test("renders image with lazy loading", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("iPhone 15");
    expect(image).toHaveAttribute("loading", "lazy");
  });

  test("renders responsive image srcSet", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("iPhone 15");
    expect(image).toHaveAttribute("srcset");
  });
});
