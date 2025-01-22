"use client";

import React, { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LightMode, DarkMode } from "@mui/icons-material";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { useTheme } from "@/hooks/useTheme";

const Header: FC = () => {
  const { toggleTheme, mode, theme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {NAV_ITEMS.map((text) => (
          <ListItem key={text}>
            <Link
              href={`/${text.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                width: "100%",
              }}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const menu = (
    <>
      {NAV_ITEMS.map((text) => (
        <MenuItem key={text}>
          <Link
            href={`/${text.toLowerCase()}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {text}
          </Link>
        </MenuItem>
      ))}
    </>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
          component={Link}
          href="/"
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: '#fff'}}
          >
            Nikki Rae
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menu}
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              aria-label="toggle dark mode"
            >
              {mode === "light" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;