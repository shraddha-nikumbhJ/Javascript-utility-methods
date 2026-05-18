import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/dashboard/slices/productDashboardSlice";

// MOCK REDUX
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

// MOCK ACTION
jest.mock("../features/dashboard/slices/productDashboardSlice", () => ({
  setCurrentPage: jest.fn((payload) => ({
    type: "setCurrentPage",
    payload
  }))
}));

describe("Pagination Component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders pagination buttons", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 1,
          limit: 10
        }
      })
    );
    render(<Pagination total={50} />);

    expect(
      screen.getByRole("button", { name: /go to previous page/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /go to next page/i })
    ).toBeInTheDocument();
  });

  test("renders visible page numbers", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 1,
          limit: 10
        }
      })
    );

    render(<Pagination total={50} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("marks current page as active", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 2,
          limit: 10
        }
      })
    );

    render(<Pagination total={50} />);
    const activePage = screen.getByRole("button", { name: /go to page 2/i });
    expect(activePage).toHaveAttribute("aria-current", "page");
  });

  test("disables prev button on first page", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 1,
          limit: 10
        }
      })
    );

    render(<Pagination total={50} />);
    expect(
      screen.getByRole("button", { name: /go to previous page/i })
    ).toBeDisabled();
  });

  test("disables next button on last page", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 5,
          limit: 10
        }
      })
    );

    render(<Pagination total={50} />);
    expect(
      screen.getByRole("button", { name: /go to next page/i })
    ).toBeDisabled();
  });

  test("dispatches page change on page click", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 1,
          limit: 10
        }
      })
    );

    render(<Pagination total={50} />);
    fireEvent.click(screen.getByRole("button", { name: /go to page 2/i }));

    expect(setCurrentPage).toHaveBeenCalledWith(2);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setCurrentPage",
      payload: 2
    });
  });

  test("renders navigation landmark", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 1,
          limit: 10
        }
      })
    );

    render(<Pagination total={50} />);
    expect(
      screen.getByRole("navigation", { name: /pagination navigation/i })
    ).toBeInTheDocument();
  });

  test("renders correctly with single page", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
      callback({
        productDashboard: {
          currentPage: 1,
          limit: 10
        }
      })
    );

    render(<Pagination total={5} />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
