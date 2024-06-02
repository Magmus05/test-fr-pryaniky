import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">
              {" "}
              <Skeleton  animation="wave" height={50}/>
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" height={50}/>
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" height={50}/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
            <TableCell align="right">
              {" "}
              <Skeleton animation="wave" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
