import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button onClick={() => handleRemove(book)} type="button">
        delete
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
