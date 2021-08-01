import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SociaIcons from '../SociaIcons/SociaIcons'

import avatar from '../../assets/img/avatar.png';
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilBars,
  UilDownloadAlt
} from '@iconscout/react-unicons'


export default function HeaderL() {
  const [hidden, setHidden] = useState(false);
  const menuList = [
    {
      title: 'Home',
      link: '/',
      exect: true,
      icon: <UilEstate />
    },
    {
      title: 'Skills',
      link: '/',
      icon: <UilBriefcaseAlt />
    },
    {
      title: 'Service',
      link: '/',
      icon: <UilFileAlt />
    },
    {
      title: 'Portfolio',
      link: '/work',
      icon: <UilScenery />
    },
    {
      title: 'About',
      link: '/about',
      icon: <UilUser />
    },
    {
      title: 'Contactme',
      link: '/contact',
      icon: <UilMessage />
    }
  ]

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__logo">
          <img className="nav__logo-avatar" src={avatar} alt="" />
          <div className="nav__logo-inner">
            <span className="nav__logo-title">Максим Щукин</span>
            <span className="nav__logo-subtitle">Frontend Developer</span>
          </div>
        </div>
        <div className={hidden ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {
              menuList.map((item, index) => {
                return (
                  <li className="nav__item">
                    <NavLink
                      to={item.link}
                      className="nav__link"
                      key={index}
                      exect={index.exect}
                      onClick={() => {
                        setHidden(!hidden);
                      }}>
                      <div className="nav__icon">
                        {item.icon}
                      </div>
                      {item.title}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
          <a href="/" className="button-o button-flex nav__menu-button">
            Resume <UilDownloadAlt className="button__icon" />
          </a>
          <SociaIcons class="social-icon__item"/>
          <UilTimes
            className="nav__close"
            id="nav__close"
            onClick={() => {
              setHidden(!hidden);
            }} />

        </div>
        <div className="nav__btn">
          <UilBars
            className="nav__toggle"
            id="nav"
            onClick={() => {
              setHidden(!hidden);
            }} />
        </div>
      </nav>
    </header>
  )
}
