import { createSelector } from 'reselect';

const getFilter = (state) => state.filter;
const getBooks = (state) => state.books;

const getFilteredBooks = createSelector(
  [getFilter, getBooks],
  (filter, books) => (
    filter === 'All'
      ? books
      : books.filter((book) => book.category === filter)
  ),
);

export default getFilteredBooks;
