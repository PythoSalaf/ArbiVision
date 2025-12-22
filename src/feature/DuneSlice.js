import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const duneApi = createApi({
  reducerPath: "duneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sim.dune.com/v1/evm",
    prepareHeaders: (headers) => {
      headers.set("X-Sim-Api-Key", import.meta.env.VITE_SIM_DUNE_API_KEY);
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Balance"],
  endpoints: (builder) => ({
    accountBalance: builder.query({
      query: (address) => `/balances/${address}?chain_ids=42161`,
      providesTags: ["Balance"],
    }),
  }),
});

export const { useAccountBalanceQuery } = duneApi;
