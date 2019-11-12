import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook, removeBook } from '../actions';
import BooksList from './BooksList.js';
import BooksForm from '../components/BooksForm.js';

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
  removeBook: (book) => dispatch(removeBook(book)),
});

const mapStateToProps = (state) => ({
  books: state.books,
});


const App = ({ createBook, removeBook, books }) => (
  <div>
    <BooksList removeBook={removeBook} books={books} />
    <BooksForm createBook={createBook} />
  </div>
);


App.propTypes = {
  createBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
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
