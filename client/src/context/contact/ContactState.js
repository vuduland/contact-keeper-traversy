/** @format */

import React, { useReducer } from 'react'; // to have access to state and also dispatch, to dispatch to our reducer
import uuid from 'uuid'; // to work with hard coded dummy data, foorrrrrr nowwwwww
import ContactContext from './contactContext';
import contactReducter from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Rico Quintanilla',
        email: 'jaycoquin@gmail.com',
        phone: '111-111-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Delia Bouhan',
        email: 'where.am.I.?@gmail.com',
        phone: '111-111-3333',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState); // state allows access to anything in our state; dispatch allows us to dispatch objects to the reducer
  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
