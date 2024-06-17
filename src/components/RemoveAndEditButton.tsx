import { Box, IconButton } from "@mui/material";
import { GridDeleteIcon } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

type Props = {
  handleRemoveItem: (id: string) => void;
  handleEditDataItem: (id: string) => void;
  id: string;
};

export const RemoveAndEditButton: React.FC<Props> = ({
  handleRemoveItem,
  handleEditDataItem,
  id,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="delete"
        size="small"
        color="primary"
        sx={{
          padding: "0",
        }}
        onClick={() => handleRemoveItem(id)}
      >
        <GridDeleteIcon />
      </IconButton>
      <IconButton
        sx={{
          padding: "0",
        }}
        color="primary"
        aria-label="редактировать"
        size="small"
        onClick={() => handleEditDataItem(id)}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
};
