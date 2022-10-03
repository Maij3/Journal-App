import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
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
} from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import avatar from "../../assets/img/avatar.png";
//SideBar
export const SideBar = ({ drawerWidth }) => {

  const { displayName, photoURL } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open 
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
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
