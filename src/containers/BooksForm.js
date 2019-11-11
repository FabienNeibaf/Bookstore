import React from 'react';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <input name="title" type="text" placeholder="Title" />
    <select name="category">
      {CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    <button type="submit">Add Book</button>
  </form>
);

export default BooksForm;
