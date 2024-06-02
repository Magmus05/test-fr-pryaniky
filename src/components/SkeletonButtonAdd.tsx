import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

export const SkeletonButtonAdd: React.FC = () => {
  return (
    <Box
      padding={1}
      display={"flex"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={0.5}
    >
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton variant="circular" width={35} height={35} />
    </Box>
  );
};
