import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/dashboard/api/products";
import productDashboardReducer from "../features/dashboard/slices/productDashboardSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    productDashboard: productDashboardReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
});
