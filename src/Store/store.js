import { configureStore } from "@reduxjs/toolkit";
import { duneApi } from "../feature/DuneSlice";
export const store = configureStore({
  reducer: {
    [duneApi.reducerPath]: duneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(duneApi.middleware),
});
