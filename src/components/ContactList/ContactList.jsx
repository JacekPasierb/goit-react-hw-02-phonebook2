import React, { Component } from "react";
import css from "./ContactList.module.css";

export default class ContactList extends Component {
  render() {
      const { contacts, filter, deleteContact } = this.props;
      const filteredContact = contacts.filter(contact => 
          contact.name.toLowerCase().includes(filter)
      )
    return (
      <>
        <ul className={css.list}>
          {filteredContact.map((contact) => (
            <li key={contact.id}>
              {" "}
              {contact.name}: {contact.number}{" "}
              <buton
                type="button"
                onClick={() => deleteContact(contact.id)}
                 className={css.button}
              >
                Delete
              </buton>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
