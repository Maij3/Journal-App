import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    left: false,
  },
  reducers: {
    setMenuBar: (state) => {
      state.left = true;
    },
  },
});

export const { setMenuBar } = menuSlice.actions;
