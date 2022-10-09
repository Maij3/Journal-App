import { Grid, Typography, Snackbar, Alert } from "@mui/material";
import { StarOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { setAlertOpen } from "../../store/journal";

export const NothingSelectedView = () => {
  const dispatch = useDispatch();

  const { messageDelete, alertOpen } = useSelector((state) => state.journal);

  const handleClose = () => {
    dispatch(setAlertOpen());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Select or Create a note
        </Typography>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={alertOpen}
        onClose={handleClose}
        autoHideDuration={1500}
        sx={{
          transform:{ xl:"translateX(-12%) !important" }
        }}
        key={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {messageDelete}
        </Alert>
      </Snackbar>
    </Grid>
  );
};
