import {sendPasswordResetEmail} from "firebase/auth";
import {FirebaseAuth} from "../../firebase/config";
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice";

//CheckingAuthentication

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

//StartGoogleSignIn

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    //Dispatch checkingCredentials
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    delete result.ok;
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    console.log({ result });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
  };
};

export const startForgotYourPassword = ({ email }) => {
  return async (dispatch) => {
    console.log(email)
    await sendPasswordResetEmail(FirebaseAuth, email);
  };
};
