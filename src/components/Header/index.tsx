import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
