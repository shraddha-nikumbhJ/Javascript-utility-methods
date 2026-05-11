import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, limit = 10, skip = 0 }) => {
        if (search) {
          return `/products/search?q=${search}&limit=${limit}&skip=${skip}`;
        }
        return `/products?limit=${limit}&skip=${skip}`;
      }
    })
  })
});
export const { useGetProductsQuery } = productApi;
