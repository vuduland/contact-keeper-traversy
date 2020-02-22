/** @format */

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state, // current state
        contacts: [...state.contacts, action.payload], // state is immutable but the spread operator allows us to update our state
      };
    default:
      return state;
  }
};
