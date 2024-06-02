import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,

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

  },
});

export const { setIsLoggedIn, setLogOut} =
  isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
