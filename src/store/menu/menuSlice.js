import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
    isVariant: "permanent",
    isFade: true
  },
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = true;
      state.isVariant = "temporary"
      state.isFade = true;
    },
    setIsClose: (state) => {
      state.isOpen = false;
      state.isVariant = "permanent"
      state.isFade = false;
    },
  },
});

export const { setIsOpen, setIsClose } =
  menuSlice.actions;
