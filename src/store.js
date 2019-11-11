import { createStore } from 'redux';
import reducer from './reducers';
import uuid from './utils/uuid.js';

const initialState = {
  books: [
    {
      id: uuid(),
      title: 'Redux',
      category: 'Learning',
    },
    {
      id: uuid(),
      title: 'React',
      category: 'Learning',
    },
  ],
};

const store = createStore(reducer, initialState);

export default store;