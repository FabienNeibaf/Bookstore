import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook, removeBook } from '../actions';
import BooksList from '../containers/BooksList.js';
import BooksForm from '../containers/BooksForm.js';

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
  removeBook: (book) => dispatch(removeBook(book)),
});

const App = ({ createBook, removeBook }) => (
  <div>
    <BooksList removeBook={removeBook} />
    <BooksForm createBook={createBook} />
  </div>
);

App.propTypes = {
  createBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
