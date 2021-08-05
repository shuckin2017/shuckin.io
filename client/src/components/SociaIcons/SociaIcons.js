import React from "react";
import { Link } from "react-router-dom";
import {
    UilInstagramAlt,
    UilGithub,
    UilVk,
    UilTelegram,
    UilWhatsappAlt,
} from "@iconscout/react-unicons";

export default function SociaIcons({ mainStyle, style, to, target, icon }) {
    const setIcon = (icon) => {
        switch (icon) {
            case "github":
                return <UilGithub />;
            case "instagram":
                return <UilInstagramAlt />;
            case "vk":
                return <UilVk />;
            case "telegram":
                return <UilTelegram />;
            case "whatsapp":
                return <UilWhatsappAlt />;

            default:
                return null;
        }
    };

    return (
        <li mainStyle={mainStyle}>
            <Link to={to} className={style} target={target}>
                {setIcon(icon)}
            </Link>
        </li>
    );
}
