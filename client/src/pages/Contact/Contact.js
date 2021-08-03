import React from 'react';
import {
    UilMobileAndroid,
    UilEnvelope,
    UilMapMarker,
    UilMessage
} from '@iconscout/react-unicons';

export default function Contact() {
    return (
        <section className="section contact" id="contact">
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Get in touch</span>
            <div className="container contact__container grid">
                <div>
                    <div className="contact__info">
                        <UilMobileAndroid className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Call me</h3>
                            <span className="contact__sub">+7 (999) 999-99-99</span>
                        </div>
                    </div>
                    <div className="contact__info">
                        <UilEnvelope className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__sub">shuckin@mail.ru</span>
                        </div>
                    </div>
                    <div className="contact__info">
                        <UilMapMarker className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__sub">Russia - Moscow</span>
                        </div>
                    </div>
                </div>
                <form action="#" className="contact__form">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="#" className="contact__label">Name</label>
                            <input type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="#" className="contact__label">Email</label>
                            <input type="email" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="#" className="contact__label">Phone</label>
                            <input type="telephone" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="#" className="contact__label">Message</label>
                            <textarea name="" id="" cols="30" rows="7" className="contact__input"></textarea>
                        </div>
                        <div>
                            <a href="#" className="button-b button-b-flex">
                                Send Message <UilMessage className="contact__icon-form"/>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
