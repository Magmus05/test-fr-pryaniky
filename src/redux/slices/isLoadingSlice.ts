import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,

};

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,

  reducers: {
    setisLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },


  },
});

export const { setisLoading} =
isLoadingSlice.actions;

export default isLoadingSlice.reducer;
