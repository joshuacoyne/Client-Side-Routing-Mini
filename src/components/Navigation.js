import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;