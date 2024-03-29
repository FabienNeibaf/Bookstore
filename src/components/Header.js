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
  font-family: 'Montserrat';
`;

const Navigation = styled.nav`
  flex: auto;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;

    li {
      margin-left: 1.5rem;
      font-size: 13px;
      letter-spacing: 1.9px;
      text-transform: uppercase;
      color: #121212;
      opacity: 0.5;

      &.active {
        opacity: 1;
      }
    }
  }
`;

const Profile = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: solid 1px #e8e8e8;
`;

const Header = ({ className }) => (
  <header className={className}>
    <div className="container">
      <Brand>Bookstore CMS</Brand>
      <Navigation>
        <ul>
          <li className="active">Books</li>
          <li>Categories</li>
        </ul>
      </Navigation>
      <Profile />
    </div>
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Header)`
  background-color: #ffffff;
  margin-bottom: 2rem;

  .container {
    display: flex;
    padding: 10px;
    align-items: center;
    box-sizing: border-box;

    height: 95px;
    max-width: 1200px;
    margin: auto;
  }
`;
