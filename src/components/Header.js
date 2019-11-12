import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Brand = styled.h1`
  width: 240px;
  height: 37px;
  margin: 0;
  color: #0290ff;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: Montserrat;
`;

const Navigation = styled.nav`
  flex: auto;
  ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
    li {
      width: 59px;
      height: 16px;
      margin-left: 15px;
      font-family: Montserrat;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.9px;
      color: #121212;
    }
  }
`;

const Header = ({ className }) => (
  <header className={className}>
    <Brand>Bookstore CMS</Brand>
    <Navigation>
      <ul>
        <li>Books</li>
        <li>Categories</li>
      </ul>
    </Navigation>
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Header)`
  display: flex;
  padding: 10px;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
`;
