import { nanoid } from "nanoid";
import React, { Component } from "react";
import ContactsForm from "./components/ContactForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  changeFilter = (e) => this.setState({ filter: e.target.value });
  addContact = (id, name, number) => {
    const { contacts } = this.state;

    const isName = contacts.some((contact) => contact.name === name);
    if (isName) {
      alert("Kontakt o tej nazwie już istnieje!");
      return;
    }

    const newContact = { id, name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const actualContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: actualContacts,
      filter: "",
    });
  }
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact} />

        <h2>Kontakty</h2>
        <Filter changeFilter={this.changeFilter} filter={filter} />
        <ContactList contacts={contacts} filter={filter.toLowerCase()} deleteContact={ this.deleteContact} />
      </>
    );
  }
}
