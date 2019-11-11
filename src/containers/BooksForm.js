import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(state);
    setState({ title: '', category: '' });
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

export default BooksForm;
