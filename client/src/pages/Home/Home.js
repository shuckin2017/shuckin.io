import React from 'react';
import Photo from '../../assets/img/item-1.png';
import {
    UilMessage,
    UilMouseAlt,
    UilArrowDown
} from '@iconscout/react-unicons'

export default function Home() {
    return (
        <section className='home section' id="home">
            <div className="home__container container">
                <div className="home__inner">
                    <div className="home__img">
                        <img src={Photo} alt="" className="home__img-blob" />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hi, I'am Maxim</h1>
                        <h3 className="home__subtitle">Frontend developer</h3>
                        <p className="home__description">High level expirience in web design and developer knowledge, producing quality work.</p>
                        <a href="/" className='button-b button-b-flex home__button'>
                            Contact me<UilMessage className="button-b__icon" />
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button">
                        <UilMouseAlt className="home__scroll-mouse"/>
                        <span className="home__scroll-name">Scroll down</span>
                        <UilArrowDown className="home__scroll-arrow"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
