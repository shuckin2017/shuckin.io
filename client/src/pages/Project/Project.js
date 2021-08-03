import React from 'react';
import {
  UilMessage
} from '@iconscout/react-unicons';
import ProjectImg from '../../assets/img/project.png'

export default function Project() {
  return (
    <section className="section project">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/" className='button-b button-b-flex button-white'>
              Contact me<UilMessage className="button-b__icon project__icon button__icon" />
            </a>
          </div>
          <img src={ProjectImg} alt="" className="project__img"/>
        </div>
      </div>
    </section>
  )
}
