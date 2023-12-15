import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./actions";

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload)
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex((contact) => contact.id === action.payload);
    state.splice(index, 1);
  },
});
