import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  return (
    <nav className="nav-menu-list">
      <NavLink className="nav-menu-item grid" to="/">
        Home
      </NavLink>
      <NavLink className="nav-menu-item grid" to="/about">
        About
      </NavLink>
      <NavLink className="nav-menu-item grid" to="/project">
        Work
      </NavLink>
      <NavLink className="nav-menu-item grid" to="/contact">
        Contact
      </NavLink>
    </nav>
  )
}
