import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CATEGORIES from '../utils/categories';

const CategoryFilter = ({ changeFilter, className }) => {
  const handleFilterChange = (e) => {
    const { value } = e.target;
    changeFilter(value);
  };

  return (
    <div className={className}>
      Filter by:
      <select onChange={handleFilterChange}>
        {['All'].concat(CATEGORIES).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  className: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default styled(CategoryFilter)`
  padding: 1%;
  display: flex;
  margin: 1rem auto;
  max-width: 1200px;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;

  select {
    padding: 5px;
    margin-left: 5px;
    min-width: 200px;
    border-radius: 2px;
    border: 1px solid #aaa;
  }
`;
