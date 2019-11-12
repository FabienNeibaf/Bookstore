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
  font-family: 'Montserrat';
  font-weight: 700;
  color: #888888;
  padding: 0 1rem;
  display: flex;
  margin: 1rem auto;
  max-width: 1200px;
  align-items: center;
  box-sizing: border-box;

  select {
    padding: 5px;
    margin-left: 5px;
    min-width: 200px;
    border: 1px solid #aaa;

    height: 2rem;
    border-radius: 4px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-size: 16px;
    letter-spacing: -0.15px;
    color: #c4c4c4;
    option {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;

// * {
//   height: 45px;
//   border-radius: 4px;
//   border: solid 1px #e8e8e8;
//   background-color: #ffffff;
//   box-sizing: border-box;
//   font-family: 'Montserrat';
//   font-size: 16px;
//   letter-spacing: -0.15px;
//   color: #c4c4c4;
// }

// input {
//   flex: auto;
//   text-indent: 1rem;
//   color: black;

//   &::placeholder{
//     color: #c4c4c4;
//   }
// }

// select {
//   text-indent: 1rem;
//   width: 30%;
//   margin: 0 2rem;

//   option{
//     font-size: 1rem;
//     font-weight:300;
//   }
// }
