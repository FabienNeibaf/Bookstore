import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch({ type: CREATE_BOOK, book }),
});

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(state);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={state.value}
        type="text"
        placeholder="Title"
        onChange={handleChange}
      />
      <select name="category" value={state.value} onChange={handleChange}>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
