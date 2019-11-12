import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CATEGORIES from '../utils/categories';

const BooksForm = ({ createBook }) => {
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
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default BooksForm;
