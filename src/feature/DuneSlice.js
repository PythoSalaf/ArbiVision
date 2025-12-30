import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const duneApi = createApi({
  reducerPath: "duneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sim.dune.com",
    prepareHeaders: (headers) => {
      headers.set("X-Sim-Api-Key", import.meta.env.VITE_SIM_DUNE_API_KEY);
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Balance"],
  endpoints: (builder) => ({
    accountBalance: builder.query({
      query: ({ address }) => `/v1/evm/balances/${address}?chain_ids=42161`,
      providesTags: ["Balance"],
    }),
    getNFTs: builder.query({
      query: ({ address }) => `/v1/evm/collectibles/${address}`,
      providesTags: ["Nfts"],
    }),
    getDefiPosition: builder.query({
      query: ({ address }) => `/beta/evm/defi/positions/${address}?chain_ids=1`,
      providesTags: ["DefiPosition"],
    }),
  }),
});

export const {
  useAccountBalanceQuery,
  useGetDefiPositionQuery,
  useGetNFTsQuery,
  useLazyGetNFTsQuery,
} = duneApi;
