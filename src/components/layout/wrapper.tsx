"use client";

import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import ThemeProvider from "@/hooks/useTheme";
import { theme } from "@/styles/theme";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider palette={theme}>
      <Box>{children}</Box>
    </ThemeProvider>
  );
};

export default Wrapper;
