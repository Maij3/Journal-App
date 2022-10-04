import { useMemo } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks";
import { startForgotYourPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
};

export const ForgotYouPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startForgotYourPassword({ email }));
    setTimeout(() => {
      navigate(-1);
    }, 800);
  };
  return (
    <AuthLayout title="Forgot You Password">
      <form
        onSubmit={onSubmit}
        className="anima;te__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid
              item
              xs={12}
              sx={{ mt: 3 }}
              display={!!errorMessage ? "" : "none"}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Send
              </Button>
            </Grid>
            <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create an account ?
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
