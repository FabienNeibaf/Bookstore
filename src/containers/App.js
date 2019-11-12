import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook, removeBook, changeFilter } from '../actions';
import BooksList from './BooksList.js';
import BooksForm from '../components/BooksForm.js';

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const mapStateToProps = (state) => ({
  filter: state.filter,
  books: state.books,
});

const App = ({ createBook, removeBook, changeFilter, filter, books }) => (
  <div>
    <BooksList
      removeBook={removeBook}
      filter={filter}
      books={books}
      changeFilter={changeFilter}
    />
    <BooksForm createBook={createBook} />
  </div>
);

App.propTypes = {
  filter: PropTypes.string.isRequired,
  createBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
