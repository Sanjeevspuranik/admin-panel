import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            style={{ height: 40, marginRight: 16 }}
          />
          YourAppName
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
