import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    alertOpen: false,
    messageDelete: "",
    messageErrorSave: "",
    notes: [],
    active: null,
    isLoading: true,
  },
  reducers: {
    savingNewNotes: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      //console.log(action.payload)
      state.notes = state.notes.filter((note) => {
        return note.title != "";
      });
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.messageSaved = `${action.payload.title} , Updated successfully`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
      state.isLoading = true;
      state.messageDelete = "";
      state.messageErrorSave="";
      state.alertOpen = false;
    },
    preloaderImage: (state) => {
      state.isLoading = false;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setMessageDeleted: (state, action) => {
      state.messageDelete = `${action.payload.length > 0 ? action.payload :  "Erased Blank Note" } , Deleted Successfully`;
      state.alertOpen = true;
    },
    setMessageErrorSave: (state) =>{
      state.messageErrorSave = "Error the title or the body of the text are empty" 
      state.alertOpen = true;
    },
    setAlertOpen: (state) => {
      state.alertOpen = false;
    },
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNotes,
  setPhotosToActiveNote,
  clearNotesLogout,
  preloaderImage,
  setMessageDeleted,
  setMessageErrorSave,
  setAlertOpen,
} = journalSlice.actions;
