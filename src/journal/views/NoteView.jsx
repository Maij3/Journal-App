import { useMemo, useEffect, useRef } from "react";
import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
//NoteViews

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: note,
    messageSaved,
    messageDelete,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, date, title, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Note Updated", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "inherit",
          width: "100%",
          flexDirection: { xs: "column", sm: "row", xl: "row" },
          alignItems:{ sm:"center" , xl:"center" }
        }}
      >
        <Grid item>
          <Typography
            fontWeight="light"
            sx={{ fontSize: { xs: "20px", sm: "20px", xl: "39px" } }}
          >
            {dateString}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ justifyContent: { xs: "end" }, display: { xs: "flex" } }}
        >
          <input
            type="file"
            multiple
            onChange={onFileInputChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <IconButton
            onClick={() => fileInputRef.current.click()}
            color="primary"
            disabled={isSaving}
          >
            <UploadOutlined />
          </IconButton>
          <Button
            disabled={isSaving}
            onClick={onSaveNote}
            color="primary"
            sx={{ padding: 2 }}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>
      </Box>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un Titulo"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          required
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          required
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Delete
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
