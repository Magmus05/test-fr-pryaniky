import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./slices/dataSlice";
import infoTooltip from "./slices/infoTooltipSlice";
import { useDispatch, useSelector } from "react-redux";
import isLoggedInSlice from "./slices/isLoggedInSlice";
import openModalSlice from "./slices/openModalSlice";
import isLoadingSlice from "./slices/isLoadingSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    infoTooltip,
    isLoggedInSlice,
    openModalSlice,
    isLoadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
