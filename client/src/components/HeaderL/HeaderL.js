import React from 'react'
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps
} from '@iconscout/react-unicons'



export default function HeaderL() {
  const menuItem = ['Home', 'Skills', 'Service', 'Portfolio', 'About', 'Contactme']

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="/">
            <span className="nav__logo-title">Максим Щукин</span>
          </a>
        </div>
        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="/" className="nav__link"><UilEstate />{menuItem[0]}</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link"><UilBriefcaseAlt />{menuItem[1]}</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link"><UilFileAlt />{menuItem[2]}</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link"><UilScenery />{menuItem[3]}</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link"><UilUser />{menuItem[4]}</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link"><UilMessage />{menuItem[5]}</a>
            </li>
          </ul>
          <UilTimes className="nav__close" id="nav__close" />
        </div>
        <div className="nav__btn">
          <div className="nav__toggle" id="nav">
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  )
}
