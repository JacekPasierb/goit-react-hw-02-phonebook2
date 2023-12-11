import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from "./ContactForm.module.css"

export default class ContactsForm extends Component {
  state = {
    name: "",
    number:"",
  };
  changeName = (e) => this.setState({ name: e.target.value });
  changeNumber = (e) => this.setState({ number: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    const id = nanoid();

    this.props.addContact(id, name, number);
     this.setState({ name: "", number: "" });
  }
  render() {
   
    return (
      <form
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
        }}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.changeName}
          value={this.state.name}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.changeNumber}
          value={this.state.number}
        />
        <button type="submit" className={css.button}>Add contact</button>
      </form>
    );
  }
}
