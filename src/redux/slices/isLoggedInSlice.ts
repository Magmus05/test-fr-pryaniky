import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  openModal: false,
};

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,

  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLogOut: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.removeItem("token");
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export const { setIsLoggedIn, setLogOut, setOpenModal } =
  isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
