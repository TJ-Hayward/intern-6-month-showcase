import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Vanessa' activeStyle>
            Vanessa
          </NavLink>
          <NavLink to='/Marlene' activeStyle>
            Marlene
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
