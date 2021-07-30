import React from 'react';
import avatar from '../../assets/img/avatar.png';

export default function Header() {
    return (
            <div className="header bg-white shadow-xl montserrat z-10">
            <div className="sm:container sm:mx-auto flex justify-between items-center py-2 text-md">
            <div className="logo flex items-center">
                <img className="mr-3 avatar" src={avatar} alt="" />
                <div className="name flex flex-col items-start">
                    <span className="font-bold -mb-2">Maxim</span>
                    <span className="font-bold -mb-1">Shuchukin</span>
                    <span className="font-light">Software Developer</span>
                </div>
            </div>
            <nav className="flex nav  font-medium">
                <ul className="flex">
                    <li className="nav-menu mr-5"><a href="/">Home</a></li>
                    <li className="nav-menu mr-5"><a href="/">About</a></li>
                    <li className="nav-menu mr-5"><a href="/">Work</a></li>
                    <li className="nav-menu mr-5"><a href="/">Blog</a></li>
                    <li className="nav-menu"><a href="/">Contact</a></li>
                </ul>
            </nav>
            <div className="btn font-medium">
                <button className="rounded-full py-2 px-9 bg-primary text-white">HIRE ME</button>
            </div>
        </div>
        </div>
    )
}
