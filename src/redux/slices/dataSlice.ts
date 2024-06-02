import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types/types";

type dataSliceType = {
  data: IData[];
  token: string;
};
const initialState: dataSliceType = {
  data: [],
  token: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setDeleteItemData: (state, action) => {
      console.log(action.payload);
      state.data = state.data.filter((item) => item.id !== action.payload);
    },

    setAddItemData: (state, action) => {
      state.data.push(action.payload)
    },
  },
});

export const { setData, setDeleteItemData, setAddItemData, setToken } =
  dataSlice.actions;

export default dataSlice.reducer;
