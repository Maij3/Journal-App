
import { CircularProgress, Grid } from "@mui/material";

export const CheckingJournal = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#FFF", padding: 4 }}
    >
      <Grid item  >
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  );
};
