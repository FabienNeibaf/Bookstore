import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const Seperator = styled.div`
  max-width: 1200px;
  margin: 2.5rem auto;
  height: 2px;
  background-color: #e8e8e8;
`;

const App = () => (
  <div>
    <Header />
    <BooksList />
    <Seperator />
    <BooksForm />
  </div>
);

export default App;
