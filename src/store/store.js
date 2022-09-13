import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

//--------------------
//Store 
//--------------------

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
