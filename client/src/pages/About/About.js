import React from "react";
import Photo from "../../assets/img/item-1.png";

import { UilDownloadAlt } from "@iconscout/react-unicons";

export default function About() {
    return (
        <section className="section about" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My inproduction</span>
            <div className="container about__container grid">
                <img src={Photo} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Numquam odio eos accusantium dolore rem in nihil a
                        dicta enim est.
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">08+</span>
                            <span className="about__info-name">
                                Years
                                <br /> experince
                            </span>
                        </div>
                        <div>
                            <span className="about__info-title">20+</span>
                            <span className="about__info-name">
                                Completed
                                <br /> project
                            </span>
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name">
                                Companies
                                <br /> worked
                            </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a
                            href="/"
                            className="button-b button-b-flex about__button"
                        >
                            Download CV
                            <UilDownloadAlt className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
