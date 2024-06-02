import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setData: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    setDeleteItemData: (state, action: PayloadAction<string | undefined>) => {
      // console.log(action.payload);
      state.data = state.data.filter((item) => item.id !== action.payload);
    },

    setAddItemData: (state, action: PayloadAction<IData>) => {
      state.data.push(action.payload)
    },
    setEditItemData: (state, action: PayloadAction<IData>) => {
      state.data = state.data.map((item)=> item.id === action.payload.id? action.payload : item)
    },
  },
});

export const { setData, setDeleteItemData, setAddItemData, setToken, setEditItemData } =
  dataSlice.actions;

export default dataSlice.reducer;
