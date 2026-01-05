import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chainbaseApi = createApi({
  reducerPath: "chainbaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chainbase.online/v1",
    prepareHeaders: (headers) => {
      headers.set("X-API-Key", import.meta.env.VITE_CHAINBASE_API_KEY);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["TopTokenHolders"],
  endpoints: (builder) => ({
    getTopTokenHolder: builder.query({
      query: ({ address, page = 1, limit = 10 }) =>
        `/token/top-holders?chain_id=42161&contract_address=${address}&page=${page}&limit=${limit}`,
      providesTags: ["TopTokenHolders"],
    }),
  }),
});

export const { useGetTopTokenHolderQuery } = chainbaseApi;
