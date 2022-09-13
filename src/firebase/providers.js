import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

//---------------------
//Google Provider
//---------------------

const googleProvider = new GoogleAuthProvider();

//---------------------
//Sing in With Google
//---------------------

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //--------------------
      //User Info
      //--------------------
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    //------------------
    //Error Code
    //------------------
    console.log(error);
    const errorCode = error.code;

    //------------------
    //Error Message
    //------------------

    const errorMessage = error.message;
    console.log("Error Message", errorMessage);

    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

//------------------------------
//Registrar Usuario en Firebase
//------------------------------

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    //Respuesta de la Creacion del usuario
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    //TODO: Actializar el displayName en Firebase

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error.message);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  //signInWithEmailAndPassword
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
    //console.log(resp.user);
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
