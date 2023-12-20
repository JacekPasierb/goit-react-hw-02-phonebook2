import { useEffect } from "react";
import { ContactForm } from "./components/ContactForm/ContactsForm";
import "./App.css";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "./redux/operations";
import { getError, getIsLoading } from "./redux/selector";

export const App = () => {

  const dispatch = useDispatch();
 const isLoading = useSelector(getIsLoading);
 const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
