import React from 'react';
import SociaIcons from '../../components/SociaIcons/SociaIcons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Максим Щукин</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">Home</a>
            </li>
            <li>
              <a href="#project" className="footer__link">Project</a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#services" className="footer__link">Services</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contactme</a>
            </li>
          </ul>
          <div className="footer__socials">
            <SociaIcons  mainStyle="footer__socials-list" class="footer__socials-item" />
          </div>
        </div>

        <p className="footer__copy">&#169; Shuckin.io / All rights reserved.</p>
      </div>
    </footer>
  )
}
