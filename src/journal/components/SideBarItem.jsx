import { useMemo } from "react";
import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title , body , id , date , imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 17 ? body.substring(0, 17) + "..." : body;
  }, [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote } >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container sx={{ flexDirection:"column" }}>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
