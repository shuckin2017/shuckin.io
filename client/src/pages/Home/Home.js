import React from 'react';
import SociaIcons from '../../components/SociaIcons/SociaIcons';
import { UilMessage } from '@iconscout/react-unicons'

export default function Home() {
    return (
        <section className='home section' id="home">
            <div className="home__container container">
                <div className="home__wrapper">
                    <div className="home__social">
                        <SociaIcons />
                    </div>
                    <div className="home__img">

                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hi, I'am Maxim</h1>
                        <h3 className="home__subtitle">Frontend developer</h3>
                        <p className="home__description">High level expirience in web design and developer knowledge, producing quality work.</p>
                        <a href="/" className='btn btn-default btn-home'>
                            <UilMessage/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
