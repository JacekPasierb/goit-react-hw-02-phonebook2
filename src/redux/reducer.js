import { addContact, deleteContact } from "./actions";

export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case addContact.type:
            return [...state, action.payload];
        case deleteContact.type:
            return state.filter(contact => contact.id !== action.payload);
        default:
            return state;
    }
}