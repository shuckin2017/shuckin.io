import React from 'react';

import avatar from '../../assets/img/avatar.png';
import NavMenu from '../NavMenu/NavMenu'
import Button from '../Button/Button'

export default function Header() {
  return (
    <header className="header shadow">
      <div className="header_wrapper container">
        <div className="header_logo">
          <img className="header_logo-avatar" src={avatar} alt="" />
          <div className="header_logo-title">
            <span className="header_title">Максим</span>
            <span className="header_title header_title-name">Щукин</span>
            <span className="header_subtitle">Software Developer</span>
          </div>
        </div>
        <NavMenu/>
        <Button title="here me"/>
      </div>
    </header>
  )
}
