import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchProduct from "./searchProduct";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn()
}));

jest.mock("../slices/productDashboardSlice", () => ({
  setSearch: jest.fn((payload) => ({
    type: "setSearch",
    payload
  }))
}));

describe("Search Product Component", () => {
  test("verify search input is rendered", () => {
    render(<SearchProduct />);

    expect(
      screen.getByPlaceholderText("Search product by name")
    ).toBeInTheDocument();
  });

  test("verify accessible label is rendered", () => {
    render(<SearchProduct />);

    expect(
      screen.getByLabelText("Search products by name")
    ).toBeInTheDocument();
  });

  test("verify description text is rendered", () => {
    render(<SearchProduct />);

    expect(
      screen.getByText("Type product name to filter products")
    ).toBeInTheDocument();
  });

  test("verify input value is updated", () => {
    render(<SearchProduct />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "Phone"
      }
    });

    expect((input as HTMLInputElement).value).toBe("Phone");
  });
});
