import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mobulaApi = createApi({
  reducerPath: "mobulaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mobula.io/api",
    prepareHeaders: (headers) => {
      headers.set("X-API-Key", import.meta.env.VITE_MOBULA_API_KEY);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTokenOHLCVHistory: builder.query({
      query: ({ address, chainId, period }) => ({
        url: "/2/token/ohlcv-history",
        params: { address, chainId, period },
      }),

      // 🔑 THIS IS THE IMPORTANT PART
      transformResponse: (response) => {
        return response.data.map((candle) => ({
          time: new Date(candle.t * 1000).toISOString().slice(0, 10),
          open: candle.o,
          close: candle.c,
          low: candle.l,
          high: candle.h,
        }));
      },
    }),
  }),
});

export const {
  useGetTokenOHLCVHistoryQuery,
} = mobulaApi;
