import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from './Book.js';
import CategoryFilter from './CategoryFilter.js';

const BooksList = ({
  books, filter, removeBook, changeFilter, className,
}) => {
  const visibleBooks = filter === 'All'
    ? books
    : books.filter((book) => book.category === filter);

  return (
    <div className={className}>
      <CategoryFilter changeFilter={changeFilter} />

      {visibleBooks.map((book) => (
        <Book key={book.id} book={book} removeBook={removeBook} />
      ))}
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
  className: PropTypes.string.isRequired,
};

const StyledBookList = styled(BooksList)`
  margin: auto
`;

export default StyledBookList;
