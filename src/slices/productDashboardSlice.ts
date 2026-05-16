import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/product";

// export const fetchProducts = createAsyncThunk(
//   "productDashboard/fetchProducts",
//   async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     return data;
//   }
// );

const productDashboardSlice = createSlice({
  name: "productDashboard",
  initialState: {
    products: [],
    loading: false,
    error: null,
    search: "",
    currentPage: 1,
    itemsPerPage: 6,
    limit: 5,
    skip: 0
  } as ProductState,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }

  //   extraReducers: (builder) => {
  //     builder.addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.products = action.payload;
  //       state.loading = false;
  //     });
  //     builder.addCase(fetchProducts.rejected, (state, action) => {
  //       state.error = action.error.message || "Failed to fetch products";
  //       state.loading = false;
  //     });
  //     builder.addCase(fetchProducts.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     });
  //   }
});

export const { setSearch, setCurrentPage } = productDashboardSlice.actions;

export default productDashboardSlice.reducer;
