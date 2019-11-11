import { CREATE_BOOK, REMOVE_BOOK } from '../actions';
import uuid from '../utils/uuid';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { id: uuid(), ...action.book }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
