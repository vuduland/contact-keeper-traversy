/** @format */

import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    // if there are no contacts, returns a message
    return <h4>Please add a contact.</h4>;
  }

  // Embedded in Home.js
  return (
    // checking if filtered is empty, if it is not, it shows what is in filtered, if not, it shows nothing.
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
