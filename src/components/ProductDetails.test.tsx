import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn()
}));

describe("ProductDetails Component", () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({
      id: "101"
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("verify  Product Details heading is rendered", () => {
    render(<ProductDetails />);

    expect(
      screen.getByRole("heading", { name: /product details/i })
    ).toBeInTheDocument();
  });

  test("verify correct product id is rendered", () => {
    render(<ProductDetails />);

    expect(screen.getByText("101")).toBeInTheDocument();
  });

  test("verify main landmark is rendered", () => {
    render(<ProductDetails />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("verify product information section is rendered", () => {
    render(<ProductDetails />);

    expect(
      screen.getByRole("region", { name: /product information/i })
    ).toBeInTheDocument();
  });

  test("verify accessible product id label is rendered", () => {
    render(<ProductDetails />);

    expect(screen.getByLabelText("Product ID 101")).toBeInTheDocument();
  });

  test("verify renders without crashing when id is undefined", () => {
    (useParams as jest.Mock).mockReturnValue({});

    render(<ProductDetails />);

    expect(
      screen.getByRole("heading", { name: /product details/i })
    ).toBeInTheDocument();
  });
});
