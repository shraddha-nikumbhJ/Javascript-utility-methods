import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ width: "350px", margin: "30px auto" }}>
          {" "}
          <Story />{" "}
        </div>
      </MemoryRouter>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof ProductCard>;
export const Default: Story = {
  args: {
    product: {
      id: 1,
      title: "iPhone 15 Pro",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200"
    }
  }
};
export const LongTitle: Story = {
  args: {
    product: {
      id: 2,
      title: "Very Long Product Title Example To Test UI Responsiveness",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200"
    }
  }
};
export const ExpensiveProduct: Story = {
  args: {
    product: {
      id: 3,
      title: "MacBook Pro",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200"
    }
  }
};
