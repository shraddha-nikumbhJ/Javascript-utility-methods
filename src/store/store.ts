import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import productDashboardReducer from "../slices/productDashboardSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    productDashboard: productDashboardReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
});
