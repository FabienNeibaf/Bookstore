import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  font-family: 'Roboto Slab', serif;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #121212;
`;

const Category = styled.h2`
  margin: 0;
  opacity: 0.5;
  font-family: 'Montserrat', sans-serif;;
  font-size: 14px;
  font-weight: bold;
  color: #121212;
`;

const Remove = styled.span`
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
  font-weight: 300;
  color: #4386bf;
  cursor: pointer;
`;

const Book = ({ book, removeBook, className }) => (
  <section className={className}>
    <div>
      <Category>{book.category}</Category>
      <Title>{book.title}</Title>
    </div>
    <div>
      <Remove
        onClick={() => removeBook(book)}
      >
        Remove
      </Remove>
    </div>
  </section>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Book)`
  display: flex;
  flex-direction: column;
  justify-content:space-between;

  margin: auto;
  margin-bottom:15px;
  padding: 1.5rem;
  max-width: 1200px;
  height: 170px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
  box-sizing:border-box;
`;
