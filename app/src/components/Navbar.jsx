import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, SvgIcon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Logo() {
  return (
    <Typography variant="h3" sx={{
      fontFamily: "'Oswald', sans-serif"
    }}>HOME COOK</Typography>
  );
}

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  )
}