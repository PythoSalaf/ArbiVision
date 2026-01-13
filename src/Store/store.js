import { configureStore } from "@reduxjs/toolkit";
import { duneApi } from "../feature/DuneSlice";
import { covalentApi } from "../feature/CovalentSlice";
import { chainbaseApi } from "../feature/ChainbaseSlice";
import { mobulaApi } from "../feature/MobulaSlice";
export const store = configureStore({
  reducer: {
    [duneApi.reducerPath]: duneApi.reducer,
    [covalentApi.reducerPath]: covalentApi.reducer,
    [chainbaseApi.reducerPath]: chainbaseApi.reducer,
    [mobulaApi.reducerPath]: mobulaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(duneApi.middleware)
      .concat(covalentApi.middleware)
      .concat(chainbaseApi.middleware)
      .concat(mobulaApi.middleware)
});
