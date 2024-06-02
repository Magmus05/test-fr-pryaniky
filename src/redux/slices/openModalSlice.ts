import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};

const openModalSlice = createSlice({
  name: "openModal",
  initialState,

  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export const { setOpenModal } =
openModalSlice.actions;

export default openModalSlice.reducer;
