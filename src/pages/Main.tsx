import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector, useAppDispatch } from "../redux/srore";
import { SkeletonTable } from "../components/SkeletonTable";
import { Box, Button, Typography } from "@mui/material";
import { setLogOut } from "../redux/slices/isLoggedInSlice";
import { setOpenModal, setOpenModalEdit } from "../redux/slices/openModalSlice";

import { setDeleteItemData } from "../redux/slices/dataSlice";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import { ModalPopup } from "../components/ModalPopup";
import { FormForAddItem } from "../components/FormForAddItem";

import { removeDataItem } from "../utils/MainApi";
import createToast from "../hooks/createToast";
import { setisLoading } from "../redux/slices/isLoadingSlice";
import { SkeletonButtonAdd } from "../components/SkeletonButtonAdd";

import { RemoveAndEditButton } from "../components/RemoveAndEditButton";

const RoundButton = styled(Button)({
  borderRadius: "50%",
  minWidth: "32px",
  minHeight: "32px",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Main: React.FC = () => {
  const data = useAppSelector((state) => state.dataSlice.data);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.dataSlice.token);
  const isLoading = useAppSelector((state) => state.isLoadingSlice.isLoading);

  const handleRemoveItem = (id: string | undefined) => {
    dispath(setisLoading(true));
    // console.log(id);

    removeDataItem({ token: token, id: id })
      .then((res) => {
        // console.log(res.data);

        if (res.data.error_code === 0) {
          dispath(setDeleteItemData(id));
          createToast("success", "Документ успешно удалён");
          dispath(setisLoading(false));
        } else {
          createToast("error", `Ошибка: ${res.data.error_message}`);
        }
      })
      .catch((err) => {
        createToast("error", `Ошибка: ${err.message}`);
      })
      .finally(() => dispath(setisLoading(false)));
  };

  const handleEditDataItem = (id: string | undefined) => {
    const item = data.find((item) => item.id === id);
    dispath(
      setOpenModalEdit({ openModal: true, component: "edit", item: item })
    );
  };

  return (
    <>
      {/* <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          height: "7px",
        }}
      >
        <LinearProgress sx={{ height: "7px" }} />
      </Box> */}
      <Box
        sx={{ display: "flex", justifyContent: "right", marginBottom: "20px" }}
      >
        <Button
          onClick={() => {
            dispath(setLogOut(false));
            navigate("/sign-in", { replace: true });
          }}
          variant="contained"
        >
          Выйти
        </Button>
      </Box>
      {isLoading ? (
        <SkeletonTable />
      ) : (
        <TableContainer component={Paper} style={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography component="h2" variant="h6">
                    ID документа:
                  </Typography>
                </TableCell>

                {data.map((cell, i) => (
                  <TableCell key={i} align="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <RemoveAndEditButton
                        handleRemoveItem={handleRemoveItem}
                        handleEditDataItem={handleEditDataItem}
                        id={cell.id ? cell.id : ""}
                      />
                      {cell.id}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">companySigDate</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.companySigDate
                        ? new Date(cell.companySigDate).toLocaleDateString(
                            "ru-Ru",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              timeZone: "Europe/Moscow",
                            }
                          )
                        : null}{" "}
                      {cell.companySigDate
                        ? new Date(cell.companySigDate).toLocaleTimeString(
                            "ru-Ru",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              timeZone: "Europe/Moscow",
                            }
                          )
                        : null}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">companySignatureName</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.companySignatureName}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">documentName</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.documentName}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">documentStatus</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.documentStatus}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">documentType</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.documentType}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">employeeNumber</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.employeeNumber}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell color="primary" align="center">
                    employeeSigDate
                  </TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.employeeSigDate
                        ? new Date(cell.employeeSigDate).toLocaleDateString(
                            "ru-Ru",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              timeZone: "Europe/Moscow",
                            }
                          )
                        : null}{" "}
                      {cell.employeeSigDate
                        ? new Date(cell.employeeSigDate).toLocaleTimeString(
                            "ru-Ru",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              timeZone: "Europe/Moscow",
                            }
                          )
                        : null}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">employeeSignatureName</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.employeeSignatureName}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {isLoading ? (
        <SkeletonButtonAdd />
      ) : (
        <Box
          padding={1}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={0.5}
        >
          Добавить документ
          <RoundButton
            variant="contained"
            color="primary"
            onClick={() => dispath(setOpenModal(true))}
          >
            <AddIcon />
          </RoundButton>
        </Box>
      )}
      <ModalPopup element={<FormForAddItem />}></ModalPopup>
    </>
  );
};
