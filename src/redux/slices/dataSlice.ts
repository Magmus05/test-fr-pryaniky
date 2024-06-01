import { createSlice } from "@reduxjs/toolkit";
import {IData} from "../../types/types"

type dataSliceType = {
  data: IData[]
}
const initialState: dataSliceType = {
  data: []
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {      
      state.data = action.payload;
    },

    setDeleteItemData: (state, action) => {      
      console.log(action.payload);
      state.data = state.data.filter((item)=> item.id !== action.payload)
    },

  },


});

export const { setData, setDeleteItemData } = dataSlice.actions;

export default dataSlice.reducer;
