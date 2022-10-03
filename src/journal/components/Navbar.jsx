import { useState , useRef } from "react";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import {useDispatch} from "react-redux";
import {startLogout} from "../../store/auth";
import {setMenuBar} from "../../store/menu";

//Navbar 


export const Navbar = ({ drawerWidth = 240 }) => {


  //useDispach
  const dispatch = useDispatch();
  
  //onLogout
  const onLogout = () =>{
    dispatch(startLogout());
  }

  const onMenuIsOpen = ()=>{
    dispatch(setMenuBar());
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h6" noWrap component="div">
            Notes
          </Typography>
          <IconButton color="error" onClick={ onLogout }>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
