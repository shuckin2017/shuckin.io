import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import servicesData from '../../data/servicesData'
import {
    UilArrowRight,
    UilTimes,
    UilCheckCircle
} from '@iconscout/react-unicons'


export default function Services() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    
    return (
        <section className="section services" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What is offer</span>
            <div className="container services__container grid">
                {
                    servicesData.map((item, i) => {
                        return (
                            <div className="services__content" key={i}>
                                <div>
                                    {item.icon}
                                    <h3 className="services__title">{item.titleFirst}<br />{item.titleSecond} </h3>
                                </div>
                                <span className="button button-b-flex button-small button-link services__button" onClick={() => setOpen(i => !i)}>
                                    View More
                                    <UilArrowRight className="button__icon" />
                                </span>
                                <Popup
                                    open={open}
                                    modal
                                    closeOnDocumentClick
                                    keepTooltipInside=".services__modal-close">
                                    <div className="services__modal">
                                        <div className="services__modal-content">
                                            <h4 className="services__modal-title">{item.titleFirst}<br />{item.titleSecond} </h4>
                                            <UilTimes className="services__modal-close" onClick={closeModal} />
                                            <ul className="services__modal-services grid">
                                                {
                                                    item.elements.map((elem, i) => {
                                                        return (
                                                            <li className="services__modal-service" key={i}>
                                                                <UilCheckCircle className="services__modal-icon" />
                                                                <p>{elem.name}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}
