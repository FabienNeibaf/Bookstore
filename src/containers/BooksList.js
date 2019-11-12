import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book.js';
import CategoryFilter from '../components/CategoryFilter.js';

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const mapStateToProps = (state) => ({
  filter: state.filter,
  books: state.books,
});

const BooksList = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => (
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
          {books[filter].map((book) => (
            <Book
              key={book.id}
              book={book}
              removeBook={removeBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );

BooksList.propTypes = {
  filter: PropTypes.string.isRequired,
  books: PropTypes.shape(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
