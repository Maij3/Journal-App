import { useState, useRef } from "react";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";
import { setIsOpen } from "../../store/menu";

//Navbar

export const Navbar = ({ drawerWidth = 240 }) => {
  //useDispach
  const dispatch = useDispatch();

  //onLogout
  const onLogout = () => {
    dispatch(startLogout());
  };

  //openDrawer
  const openDrawer = () => {
    dispatch(setIsOpen());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { xl: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { xs: "block", sm: "block", xl: "none" } }}
          onClick={openDrawer}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            Notes
          </Typography>
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
