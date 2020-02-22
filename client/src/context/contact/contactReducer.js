/** @format */

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state, // current state
        contacts: [...state.contacts, action.payload] // state is immutable but the spread operator allows us to update our state
      };
    case DELETE_CONTACT:
      return {
        ...state, // current state
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ) // state.contacts === current contacts array; filer(...) is all contacts that are not in this id; action.payload is sent in the ContactItem component
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
