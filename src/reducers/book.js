import { CREATE_BOOK, REMOVE_BOOK } from '../actions';
import uuid from '../utils/uuid';

const books = (state = {}, action) => {
  const books = state[action.book.category] || [];
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        [action.book.category]: [...books, { id: uuid(), ...action.book }],
      };
    case REMOVE_BOOK:
      return state[action.book.category].filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default books;
