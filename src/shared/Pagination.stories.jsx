import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import Pagination from "./Pagination";
import productDashboardReducer from "../features/dashboard/slices/productDashboardSlice";

const createMockStore = (currentPage = 1, limit = 10) => {
  return configureStore({
    reducer: {
      productDashboard: productDashboardReducer
    },

    preloadedState: {
      productDashboard: {
        currentPage,
        limit
      }
    }
  });
};

const meta = {
  title: "Components/Pagination",

  component: Pagination,

  decorators: [
    (Story, context) => {
      const store = createMockStore(
        context.args.currentPage,
        context.args.limit
      );

      return (
        <Provider store={store}>
          <div
            style={{
              padding: "40px",
              display: "flex",
              justifyContent: "center",
              background: "#f5f7fb",
              minHeight: "200px"
            }}
          >
            <Story />
          </div>
        </Provider>
      );
    }
  ],

  parameters: {
    layout: "centered"
  },

  argTypes: {
    total: {
      control: "number"
    },

    currentPage: {
      control: "number"
    },

    limit: {
      control: "number"
    }
  }
};

export default meta;

export const FirstPage = {
  args: {
    total: 100,
    currentPage: 1,
    limit: 10
  }
};

export const MiddlePage = {
  args: {
    total: 100,
    currentPage: 5,
    limit: 10
  }
};

export const LastPage = {
  args: {
    total: 100,
    currentPage: 10,
    limit: 10
  }
};

export const SmallData = {
  args: {
    total: 20,
    currentPage: 1,
    limit: 10
  }
};

export const LargeData = {
  args: {
    total: 1000,
    currentPage: 25,
    limit: 10
  }
};
