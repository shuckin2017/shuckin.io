import React from 'react'
import { UilInstagramAlt } from '@iconscout/react-unicons'
import { UilVk } from '@iconscout/react-unicons'
import { UilTelegram } from '@iconscout/react-unicons'
import { UilWhatsappAlt } from '@iconscout/react-unicons'
import { UilFacebook } from '@iconscout/react-unicons'

export default function SociaIcons() {
  return (
    <div className="social-icon__list">
      <a href="/" className="social-icon__item">
        <UilInstagramAlt /></a>
      <a href="/" className="social-icon__item">
        <UilVk className="social-icon__item" /></a>
      <a href="/" className="social-icon__item">
        <UilTelegram className="social-icon__item" /></a>
      <a href="/" className="social-icon__item">
        <UilWhatsappAlt className="social-icon__item" /></a>
      <a href="/" className="social-icon__item">
        <UilFacebook className="social-icon__item" /></a>
    </div>
  )
}
