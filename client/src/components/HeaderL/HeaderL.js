import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SociaIcons from "../SociaIcons/SociaIcons";
import menuData from "../../data/menuData";

import avatar from "../../assets/img/avatar.png";
import {
    UilTimes,
    UilBars,
    UilDownloadAlt,
    UilMoon,
} from "@iconscout/react-unicons";

export default function HeaderL() {
    const [hidden, setHidden] = useState(false);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <div className="nav__logo">
                    <img className="nav__logo-avatar" src={avatar} alt="" />
                    <div className="nav__logo-inner">
                        <div className="nav__logo-title">Максим Щукин</div>
                        <div className="nav__logo-subtitle">
                            Frontend Developer
                        </div>
                    </div>
                </div>
                <div className={hidden ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {menuData.map(({ link, exect, icon, title }, i) => {
                            return (
                                <li className="nav__item">
                                    <NavLink
                                        to={link}
                                        className="nav__link"
                                        key={i}
                                        exect={exect}
                                        onClick={() => {
                                            setHidden(!hidden);
                                        }}
                                    >
                                        <div className="nav__icon">{icon}</div>
                                        {title}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <a
                        href="/"
                        className="button-o button-flex nav__menu-button"
                    >
                        Resume <UilDownloadAlt className="button__icon" />
                    </a>
                    <ul className="social-icon__list">
                        <SociaIcons
                            style="social-icon__item"
                            to="/"
                            target="_blank"
                            icon="telegram"
                        />
                        <SociaIcons
                            style="social-icon__item"
                            to="/"
                            target="_blank"
                            icon="vk"
                        />
                        <SociaIcons
                            style="social-icon__item"
                            to="/"
                            target="_blank"
                            icon="telegram"
                        />
                        <SociaIcons
                            style="social-icon__item"
                            to="/"
                            target="_blank"
                            icon="github"
                        />
                    </ul>
                    <UilTimes
                        className="nav__close"
                        id="nav__close"
                        onClick={() => {
                            setHidden(!hidden);
                        }}
                    />
                </div>
                <div className="nav__btn">
                    <UilMoon className="nav__mode" />
                    <UilBars
                        className="nav__toggle"
                        onClick={() => {
                            setHidden(!hidden);
                        }}
                    />
                </div>
            </nav>
        </header>
    );
}
