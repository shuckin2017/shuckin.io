import React from "react";

export default function SkilsItem({i, name, pensent}) {
    return (
        <div className="skills__data" key={i}>
            <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__nubmer">{pensent}</span>
            </div>
            <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
            </div>
        </div>
    );
}
