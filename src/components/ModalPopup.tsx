import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppSelector, useAppDispatch } from "../redux/srore";
import { setOpenModal } from "../redux/slices/openModalSlice";
import { FormForEditItem } from "./FormForEditItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalPopupProps {
  element: React.ReactNode;
}

export const ModalPopup: React.FC<ModalPopupProps> = ({ element }) => {
  const dispath = useAppDispatch();
  const openModal = useAppSelector((state) => state.openModalSlice.openModal);
  const component = useAppSelector((state) => state.openModalSlice.component);

  return (
    <Modal
      open={openModal}
      onClose={() => dispath(setOpenModal(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{component === "edit" ? <FormForEditItem/> : element} </Box>
    </Modal>
  );
};
