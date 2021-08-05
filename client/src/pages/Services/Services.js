import React, { useState } from "react";
import Popup from "reactjs-popup";
import servicesData from "../../data/servicesData";
import ServicesItem from "../../components/ServicesItem/ServicesItem";
import {
    UilArrowRight,
    UilTimes
} from "@iconscout/react-unicons";

export default function Services() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <section className="section services" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What is offer</span>
            <div className="container services__container grid">
                {servicesData.map(({icon, titleFirst, titleSecond, elements }, i) => {
                    return (
                        <div className="services__content" key={i}>
                            <div>
                                {icon}
                                <h3 className="services__title">
                                    {titleFirst}
                                    <br />
                                    {titleSecond}{" "}
                                </h3>
                            </div>
                            <span
                                className="button button-b-flex button-small button-link services__button"
                                onClick={() => setOpen((i) => !i)}
                            >
                                View More
                                <UilArrowRight className="button__icon" />
                            </span>
                            <Popup
                                open={open}
                                modal
                                closeOnDocumentClick
                                keepTooltipInside=".services__modal-close"
                            >
                                <div className="services__modal">
                                    <div className="services__modal-content">
                                        <h4 className="services__modal-title">
                                            {titleFirst}
                                            <br />
                                            {titleSecond}{" "}
                                        </h4>
                                        <UilTimes
                                            className="services__modal-close"
                                            onClick={closeModal}
                                        />
                                        <ul className="services__modal-services grid">
                                            {elements.map(({name}, i) => {
                                                return (
                                                    <ServicesItem name={name} i={i}/>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
