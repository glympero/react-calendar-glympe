import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <header>
      <h1>Code Exercise for JS/React Developer</h1>
      <div className="container">
        <NavLink to="/" className="item" activeClassName="is-active" exact={true}>Calendar</NavLink>
        <NavLink to="/about" className="item" activeClassName="is-active">Help Page</NavLink>
      </div>
    </header>
  );

export default Header;