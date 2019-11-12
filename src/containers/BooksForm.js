import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createBook } from '../actions';
import CATEGORIES from '../utils/categories';

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
      <div className="container">
        <h2>Add new book</h2>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input
            name="title"
            value={state.title}
            type="text"
            placeholder="Title"
          />
          <select name="category" value={state.category}>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </section>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const styledBooksForm = styled(BooksForm)`
  .container {
    max-width: 1200px;
    margin: auto;
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.18px;
    color: #888888;
  }

  form {
    margin: 1rem 0;
    display: flex;

    * {
      height: 45px;
      border-radius: 4px;
      border: solid 1px #e8e8e8;
      background-color: #ffffff;
      box-sizing: border-box;
      font-family: 'Montserrat';
      font-size: 16px;
      letter-spacing: -0.15px;
      color: #c4c4c4;
    }

    input {
      flex: auto;
      text-indent: 1rem;
      color: black;

      &::placeholder{
        color: #c4c4c4;
      }
    }

    select {
      text-indent: 1rem;
      width: 30%;
      margin: 0 2rem;

      option{
        font-size: 1rem;
        font-weight:300;
      }
    }

    button {
      width: 20%;
      background-color: #0290ff;
      color: white;
      font-family: 'Roboto Slab';
      font-size: 13px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export default connect(
  null,
  mapDispatchToProps,
)(styledBooksForm);
