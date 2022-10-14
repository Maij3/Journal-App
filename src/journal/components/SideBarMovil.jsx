import {
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import avatar from "/assets/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import { setIsClose } from "../../store/menu";

export const SideBarMovil = ({ drawerWidth }) => {
  const dispatch = useDispatch();

  const { displayName, photoURL } = useSelector((state) => state.auth);

  const { notes } = useSelector((state) => state.journal);

  const { isOpen, isVariant, isFade } = useSelector((state) => state.menu);

  const onClose = () => {
    dispatch(setIsClose());
  };

  const deleteBlankNotes = notes?.filter((note) => {
    return note.title != "";
  });

  return (
    <Drawer
      open={isOpen}
      anchor="left"
      onClose={onClose ? onClose : null}
      transitionDuration={{ enter: 800, exit: 800 }}
      sx={{
        display: { sx: "block", sm: "block", xl: "none" },
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
  );
};
