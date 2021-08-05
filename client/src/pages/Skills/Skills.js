import React, { useState } from "react";
import SkilsItem from "../../components/SkillsItem/SkilsItem";
import { UilAngleDown } from "@iconscout/react-unicons";
import skillsData from "../../data/skillsData";

export default function Skills() {
    const [isHidden, setHidden] = useState(false);

    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="container skills__container grid">
                {skillsData.map(({ icon, title, subtitle, elements }, i) => {
                    return (
                        <div
                            className={
                                isHidden
                                    ? "skills__content skills__open"
                                    : "skills__content skills__close"
                            }
                            key={i}
                        >
                            <div className="skills__header">
                                <div className="skills__icon">{icon}</div>
                                <div className="skills__head">
                                    <h1 className="skills__title">{title}</h1>
                                    <span className="skills__subtitle">
                                        {subtitle}
                                    </span>
                                </div>
                                <UilAngleDown
                                    className="skills__arrow"
                                    data-index={i}
                                    onClick={() => setHidden(!isHidden)}
                                />
                            </div>
                            <div className="skills__list grid">
                                {elements.map(({ name, pensent }, i) => {
                                    return (
                                        <SkilsItem
                                            i={i}
                                            name={name}
                                            pensent={pensent}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
