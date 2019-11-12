import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import CATEGORIES from '../utils/categories';
import styled from 'styled-components';

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

const BooksForm = ({ createBook, className }) => {
  const initialState = { title: '', category: CATEGORIES[0] };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title && state.category) {
      createBook(state);
      setState(initialState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section className={className}>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input name="title" value={state.title} type="text" placeholder="Title" />
        <select name="category" value={state.category}>
          {CATEGORIES.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledComponent = styled(BooksForm)`
  h2 {
    text-transform: uppercase;
  }
`;

export default connect(
  null,
  mapDispatchToProps,
)(StyledComponent);
