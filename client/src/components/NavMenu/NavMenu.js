import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <nav className="nav-menu-list">
      <Link className="nav-menu-item grid" to="/" exact>
        Главная
      </Link>
      <Link className="nav-menu-item grid" to="/about">
        Обо мне
      </Link>
      <Link className="nav-menu-item grid" to="/project">
        Портфолио
      </Link>
      <Link className="nav-menu-item grid" to="/contact">
        Контакты
      </Link>
    </nav>
  )
}
