import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";


import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selector";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../redux/operations";

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {isLoading && !error ? (
          <p>Contacts loading...</p>
        ) : filteredContacts.length === 0 && !error ? (
          <p>The Phonebook is empty. Add your first contact. </p>
        ) : (
          filteredContacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
              {name}: {number}
              <button type="submit" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
