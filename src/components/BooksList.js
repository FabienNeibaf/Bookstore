import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';
import CategoryFilter from './CategoryFilter.js';

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const visibleBooks = filter === 'All'
    ? books
    : books.filter((book) => book.category === filter);

  return (
    <div>
      <CategoryFilter changeFilter={changeFilter} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {visibleBooks.map((book) => (
            <Book key={book.id} book={book} removeBook={removeBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  filter: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default BooksList;
