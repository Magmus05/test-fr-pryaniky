import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types/types";

type openModalSliceType={
  openModal: boolean,
  component: string,
  item: IData
}

const initialState:openModalSliceType = {
  openModal: false,
  component: "",
  item: {} as IData
};

const openModalSlice = createSlice({
  name: "openModal",
  initialState,

  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
      state.component = "";
    },
    setOpenModalEdit: (state, action) => {
      state.openModal = action.payload.openModal;
      state.component = action.payload.component;
      state.item = action.payload.item;
    },
  },
});

export const { setOpenModal, setOpenModalEdit } =
openModalSlice.actions;

export default openModalSlice.reducer;
