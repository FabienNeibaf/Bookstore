import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../utils/categories';

const CategoryFilter = ({ changeFilter }) => {
  const handleFilterChange = (e) => {
    const { value } = e.target;
    changeFilter(value);
  };

  return (
    <select onChange={handleFilterChange}>
      {['All'].concat(CATEGORIES).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
