import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn()
}));

describe("HomePage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    render(
      // <MemoryRouter>
      <HomePage />
      // </MemoryRouter>
    );
  };

  test("renders homepage main section", () => {
    renderComponent();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders hero heading", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /modern react product platform/i })
    ).toBeInTheDocument();
  });

  test("renders Open Dashboard button", () => {
    renderComponent();

    expect(
      screen.getByRole("button", { name: /open dashboard/i })
    ).toBeInTheDocument();
  });

  test("renders Project Features section", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /project features/i })
    ).toBeInTheDocument();
  });

  test("renders Product Listing feature card", () => {
    renderComponent();

    expect(
      screen.getByText(/responsive virtualized product listing/i)
    ).toBeInTheDocument();
  });

  test("renders Product Dashboard feature card", () => {
    renderComponent();

    expect(
      screen.getByText(/search, pagination, accessibility/i)
    ).toBeInTheDocument();
  });

  test("renders Technology Stack section", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /technology stack/i })
    ).toBeInTheDocument();
  });

  test("renders technology badges", () => {
    renderComponent();

    expect(screen.getByText("React 19")).toBeInTheDocument();

    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    expect(screen.getByText("Vite")).toBeInTheDocument();

    expect(screen.getByText("Redux Toolkit")).toBeInTheDocument();
  });

  test("renders footer text", () => {
    renderComponent();

    expect(
      screen.getByText(/built using modern react frontend architecture/i)
    ).toBeInTheDocument();
  });

  test("homepage is accessible via main landmark", () => {
    renderComponent();

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
