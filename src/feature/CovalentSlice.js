import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const covalentApi = createApi({
  reducerPath: "covalentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.covalenthq.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_COVALENT_API_KEY}`
      );
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["CovalentBalance"],
  endpoints: (builder) => ({
    getBalances: builder.query({
      query: ({ chain = "arbitrum-mainnet", address }) =>
        `/${chain}/address/${address}/balances_v2/`,
      providesTags: ["CovalentBalance"],
    }),
    getTransactionHistory: builder.query({
      query: ({ chain = "arbitrum-mainnet", address }) =>
        `/${chain}/address/${address}/transactions_v3/page/0/`,
    }),
  }),
});

export const {
  useGetBalancesQuery,
  useLazyGetBalancesQuery,
  useGetTransactionHistoryQuery,
  useLazyGetTransactionHistoryQuery,
} = covalentApi;
