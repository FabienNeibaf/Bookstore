import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book.js';

const mapStateToProps = (state) => ({
  books: state.books,
});

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
        />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(BooksList);
