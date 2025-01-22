"use client";

import React, { FC } from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants/navigation";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
        <MuiLink href="https://facebook.com" target="_blank" rel="noopener">
          <Facebook />
        </MuiLink>
        <MuiLink href="https://twitter.com" target="_blank" rel="noopener">
          <Twitter />
        </MuiLink>
        <MuiLink href="https://instagram.com" target="_blank" rel="noopener">
          <Instagram />
        </MuiLink>
        <MuiLink href="https://linkedin.com" target="_blank" rel="noopener">
          <LinkedIn />
        </MuiLink>
      </Box>
      <Box sx={{ mb: 2 }}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              marginInline: "8px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {item}
          </Link>
        ))}
      </Box>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Nikki Rae. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;