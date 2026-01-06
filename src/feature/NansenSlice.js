import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nansenApi = createApi({
  reducerPath: "nansenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nansen.ai/api/v1",
    prepareHeaders: (headers) => {
      headers.set("apiKey", "U5SDLzkRkCa2yJa0Y2zVqJJSAqRRkHWf");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Tokenscreener"],
  endpoints: (builder) => ({
    getTokenScreener: builder.query({
      query: ({
        chains = ["arbitrum"],
        timeframe = "10m",
        page = 1,
        per_Page = 10,
        tokenAge = { min: 1, max: 365 },
        orderBy = [{ field: "chain", direction: "ASC" }],
      }) => ({
        url: "/token-screener",
        method: "POST",
        body: {
          chains,
          timeframe,
          pagination: {
            page,
            per_page: per_Page,
          },
          filters: {
            token_age_days: {
              min: tokenAge.min,
              max: tokenAge.max,
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
