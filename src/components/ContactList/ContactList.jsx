import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";

import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const formatPhoneNumber = (phoneNumber) => {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6)}`;
  };
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ul>
        {filteredContacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            {contact.name}: {formatPhoneNumber(contact.number)}
            <button
              type="submit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
