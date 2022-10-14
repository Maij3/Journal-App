import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FiresbaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNotes,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
  setMessageDeleted,
  updateImage,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNotes());
    const { uid } = getState().auth;
    const { notes } = getState().journal;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };
    const newDoc = doc(collection(FiresbaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    console.log({ note });
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    const docRef = doc(FiresbaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateNote(note));
    console.log({ note });
  };
};


export const startSaveImage = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    console.log({ note });
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    const docRef = doc(FiresbaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateImage(note));
    console.log({ note });
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    //await fileUpload(files[0])
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const photoUrls = await Promise.all(fileUploadPromises);
    dispatch(setPhotosToActiveNote(photoUrls));
    //
    //dispatch(startSaveImage());
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note, messageDelete } = getState().journal;
    console.log("Title", note.title);
    const docRef = doc(FiresbaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
    dispatch(setMessageDeleted(note.title));
  };
};
