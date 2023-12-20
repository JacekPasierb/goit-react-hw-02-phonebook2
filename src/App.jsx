
import { ContactForm } from "./components/ContactForm/ContactsForm";
import "./App.css";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";



export const App = () => {


  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
     
      <ContactList />
    </div>
  );
};
