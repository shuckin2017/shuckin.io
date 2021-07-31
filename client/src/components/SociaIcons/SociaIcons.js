import React from 'react';
import { Link } from 'react-router-dom';
import { UilInstagram, UilGithub, UilVk} from '@iconscout/react-unicons'

export default function SociaIcons() {
  return (
    <div className="social-icon__list">
      <Link
        to="/"
        className="social-icon__item"
        target="_blank">
        <UilGithub />
      </Link>
      <Link
        to="/"
        className="social-icon__item"
        target="_blank">
        <UilInstagram />
      </Link>
      <Link
        to="/"
        className="social-icon__item"
        target="_blank">
        <UilVk/>
      </Link>
    </div>
  )
}
