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
import { SkeletonTable } from "./SkeletonTable";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { setLogOut, setOpenModal } from "../redux/slices/isLoggedInSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { setDeleteItemData } from "../redux/slices/dataSlice";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import { ModalPopup } from "./ModalPopup";

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
  console.log(data);


  return (
    <>
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
      {data.length === 0 ? (
        <SkeletonTable />
      ) : (
        <TableContainer component={Paper}>
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
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="primary"
                      onClick={() => dispath(setDeleteItemData(cell.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {cell.id}
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
                      {cell.companySigDate}
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
                  <TableCell color="primary" align="center">employeeSigDate</TableCell>
                  {data.map((cell, i) => (
                    <TableCell key={i} align="right">
                      {cell.employeeSigDate}
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

      <Box padding={1} display={"flex"} justifyContent={"start"} alignItems={"center"} gap={0.5}>
        Добавить документ
        <RoundButton variant="contained" color="primary" onClick={()=>dispath(setOpenModal(true))}>
          <AddIcon />
        </RoundButton>
      </Box>
      <ModalPopup ></ModalPopup>
    </>
  );
};
