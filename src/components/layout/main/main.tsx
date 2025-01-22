"use client";

import React, { FC, ReactNode } from "react";
import { Container, Toolbar, Box } from "@mui/material";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ height: "100%" }}>{children}</Container>
    </Box>
  );
};

export default Main;