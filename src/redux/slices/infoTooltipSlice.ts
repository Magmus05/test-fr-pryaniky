import { createSlice } from "@reduxjs/toolkit";
import { IinfotooltipSlice } from "../../types/Types";

const initialState: IinfotooltipSlice = {
  isOpen: false,
  title: "",
  name: "",
};

const infoTooltip = createSlice({
  name: "infoTooltip",
  initialState,
  reducers: {
    setInfoTooltip: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
      state.name = action.payload.name;
    },
  },
});

export const { setInfoTooltip } = infoTooltip.actions;

export default infoTooltip.reducer;
