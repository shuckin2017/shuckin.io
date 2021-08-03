import React from 'react';
import { Link } from 'react-router-dom';
import {
  UilInstagramAlt,
  UilGithub,
  UilVk,
  UilTelegram,
  UilWhatsappAlt
} from '@iconscout/react-unicons'

export default function SociaIcons(props) {
  return (
    <div className={props.mainStyle}>
      <Link
        to="/"
        className={props.class}
        target="_blank">
        <UilGithub />
      </Link>
      <Link
        to="/"
        className={props.class}
        target="_blank">
        <UilInstagramAlt />
      </Link>
      <Link
        to="/"
        className={props.class}
        target="_blank">
        <UilVk />
      </Link>
      <Link
        to="/"
        className={props.class}
        target="_blank">
        <UilTelegram />
      </Link>
      <Link
        to="/"
        className={props.class}
        target="_blank">
        <UilWhatsappAlt />
      </Link>
    </div>
  )
}
