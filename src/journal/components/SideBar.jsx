import { useState } from "react";
import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Fade,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import avatar from "/assets/avatar.png";
import { setIsClose } from "../../store/menu";
//SideBar
export const SideBar = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const { isOpen, isVariant, isFade } = useSelector((state) => state.menu);
  const onClose = () => {
    dispatch(setIsClose());
  };
  const deleteBlankNotes =  notes?.filter(note =>{ return note.title != "" })


  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: "none", sm: "none", xl: "block" },
      }}
    >
      <Drawer
        variant={isVariant}
        open={isOpen}
        anchor="left"
        onClose={onClose ? onClose : null}
        transitionDuration={ 800 }
        sx={{
          display: { sx: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <img
            src={photoURL ? photoURL : avatar}
            style={{ borderRadius: "50%", margin: "10px auto" }}
            referrerPolicy="no-referrer"
          />
        </Toolbar>
        <Typography
          style={{ textAlign: "center", marginBottom: "10px" }}
          variant="h6"
          noWrap
          component="div"
        >
          {displayName}
        </Typography>
        <Divider />
        <List>
          {deleteBlankNotes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
