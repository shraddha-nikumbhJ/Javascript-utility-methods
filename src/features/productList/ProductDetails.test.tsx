import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "./ProductDetails";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: "101"
  })
}));

describe("ProductDetails Component", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  test("renders Product Details heading", () => {
    render(<ProductDetails />);

    expect(
      screen.getByRole("heading", { name: /product details/i })
    ).toBeInTheDocument();
  });

  test("renders product name", () => {
    render(<ProductDetails />);

    expect(screen.getByText("iPhone 15 Pro")).toBeInTheDocument();
  });

  test("renders product price", () => {
    render(<ProductDetails />);

    expect(screen.getByText("$999")).toBeInTheDocument();
  });

  test("renders product id from route params", () => {
    render(<ProductDetails />);

    expect(screen.getByText(/Product ID: 101/i)).toBeInTheDocument();
  });

  test("renders Buy Now button", () => {
    render(<ProductDetails />);

    expect(
      screen.getByRole("button", { name: /buy iphone 15 pro/i })
    ).toBeInTheDocument();
  });

  test("shows alert when Buy Now button is clicked", () => {
    render(<ProductDetails />);

    const button = screen.getByRole("button", { name: /buy iphone 15 pro/i });

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith(
      "Thank you for buying product !!!"
    );
  });

  test("renders main container", () => {
    render(<ProductDetails />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders product details card", () => {
    const { container } = render(<ProductDetails />);

    expect(
      container.querySelector(".product-details-card")
    ).toBeInTheDocument();
  });
});
