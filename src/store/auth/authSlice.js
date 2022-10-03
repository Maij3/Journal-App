import { createSlice } from "@reduxjs/toolkit";

//AuthSlice 

export const authSlice = createSlice({
  name: "auth",
  //-------------------
  //Initial State
  //-------------------

  initialState: {
    status: "checking", // ckecking , not-authenticated  , authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    //Login State

    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },

    //Logout State

    logout: (state, { payload }) => {
      state.status = "not-authenticated"; // ckecking , not-authenticated  , authenticated
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },

    //checkingCredentials

    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});


export const { login, logout, checkingCredentials } = authSlice.actions;
