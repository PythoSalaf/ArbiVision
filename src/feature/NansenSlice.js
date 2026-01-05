import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nansenApi = createApi({
  reducerPath: "nansenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nansen.ai/v1",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", import.meta.env.VITE_NANSEN_API_KEY);
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Tokenscreener"],
  endpoints: (builder) => ({
    getTokenScreener: builder.query({
      query: ({
        chains = ["arbitrum"],
        timeframe = "5m",
        page = 1,
        perPage = 10,
        tokenAge = { min: 1, max: 365 },
        onlySmartMoney = true,
        orderBy = [{ field: "chain", direction: "ASC" }],
      }) => ({
        url: "/token-screener",
        method: "POST",
        body: {
          chains,
          timeframe,
          pagination: {
            page,
            per_page: perPage,
          },
          filters: {
            token_age_days: {
              min: tokenAge.min,
              max: tokenAge.max,
              only_smart_money: onlySmartMoney,
            },
          },
          order_by: orderBy,
        },
      }),
      providesTags: ["Tokenscreener"],
    }),
  }),
});

export const { useGetTokenScreenerQuery } = nansenApi;
