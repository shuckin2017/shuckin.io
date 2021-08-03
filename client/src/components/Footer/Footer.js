import React from 'react';
import SociaIcons from '../../components/SociaIcons/SociaIcons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Maxim</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">Home</a>
            </li>
            <li>
              <a href="#about" className="footer__link">About</a>
            </li>
            <li>
              <a href="#service" className="footer__link">Service</a>
            </li>
          </ul>
          <div className="footer__socials">
            <SociaIcons className="footer__socials-item" />
          </div>
        </div>
        
        <p className="footer__copy">&#169; Shuckin. All rights reserved.</p>
      </div>
    </footer>
  )
}
