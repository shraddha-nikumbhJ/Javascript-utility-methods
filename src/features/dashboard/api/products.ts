import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("API Base URL:", BASE_URL);

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        search,
        limit = Number(import.meta.env.VITE_DEFAULT_PAGE_LIMIT),
        skip = 0
      }) => {
        if (search) {
          return `/products/search?q=${search}&limit=${limit}&skip=${skip}`;
        }
        return `/products?limit=${limit}&skip=${skip}`;
      }
    })
  })
});
export const { useGetProductsQuery } = productApi;
