import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from './BooksForm';

const CategoryFilter = ({ changeFilter }) => (
  <select id="" onChange={(e) => changeFilter(e.target.value)}>
    {['All'].concat(CATEGORIES).map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
