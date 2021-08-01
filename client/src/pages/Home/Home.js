import React from 'react';
import SociaIcons from '../../components/SociaIcons/SociaIcons'
import Photo from '../../assets/img/item-1.png';
import {
    UilGithubAlt,
    UilInstagram,
    UilTelegramAlt,
    UilMessage,
    UilMouseAlt,
    UilArrowDown
} from '@iconscout/react-unicons'

export default function Home() {
    return (
        <section className='home section' id="home">
            <div className="home__content container">
                <div className="home__head">
                    <div className="home__social">
                        <UilTelegramAlt className="home__social-icon" />
                        <UilGithubAlt className="home__social-icon" />
                        <UilInstagram className="home__social-icon" />
                    </div>
                    <div className="home__img">
                        {/* <img src={Photo} alt="" className="home__img-blob" /> */}
                        <svg viewBox="0 0 480 480" className="home__img-item" >
                            <path d="M373,347Q310,454,179,416.5Q48,379,89,269.5Q130,160,207,132.5Q284,105,360,172.5Q436,240,373,347Z" />
                        </svg>
                    </div>
                </div>
                <div className="home__data">
                    <h1 className="home__title">Hi, I'am Maxim</h1>
                    <h3 className="home__subtitle">Frontend developer</h3>
                    <p className="home__description">High level expirience in web design and developer knowledge, producing quality work.</p>
                    <a href="/" className='button-b button-b-flex home__button'>
                        Contact me<UilMessage className="button-b__icon" />
                    </a>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button">
                        <UilMouseAlt className="home__scroll-mouse" />
                        <span className="home__scroll-name">Scroll down</span>
                        <UilArrowDown className="home__scroll-arrow" />
                    </a>
                </div>
            </div>
        </section>
    )
}
