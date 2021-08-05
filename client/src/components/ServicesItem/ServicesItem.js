import React from "react";
import {
    UilCheckCircle,
} from "@iconscout/react-unicons";

export default function ServicesItem({i, name}) {
    return (
        <li className="services__modal-service" key={i}>
            <UilCheckCircle className="services__modal-icon" />
            <p>{name}</p>
        </li>
    );
}
