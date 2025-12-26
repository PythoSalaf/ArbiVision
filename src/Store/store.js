import { configureStore } from "@reduxjs/toolkit";
import { duneApi } from "../feature/DuneSlice";
import { covalentApi } from "../feature/CovalentSlice";
export const store = configureStore({
  reducer: {
    [duneApi.reducerPath]: duneApi.reducer,
    [covalentApi.reducerPath]: covalentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(duneApi.middleware)
      .concat(covalentApi.middleware),
});
