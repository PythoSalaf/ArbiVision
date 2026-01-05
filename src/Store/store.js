import { configureStore } from "@reduxjs/toolkit";
import { duneApi } from "../feature/DuneSlice";
import { covalentApi } from "../feature/CovalentSlice";
import { chainbaseApi } from "../feature/ChainbaseSlice";
import { nansenApi } from "../feature/NansenSlice";
export const store = configureStore({
  reducer: {
    [duneApi.reducerPath]: duneApi.reducer,
    [covalentApi.reducerPath]: covalentApi.reducer,
    [chainbaseApi.reducerPath]: chainbaseApi.reducer,
    [nansenApi.reducerPath]: nansenApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(duneApi.middleware)
      .concat(covalentApi.middleware)
      .concat(chainbaseApi.middleware)
      .concat(nansenApi.middleware),
});
