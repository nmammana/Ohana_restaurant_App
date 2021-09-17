import React from 'react'
import './Header.scss';
import logo from '../../assets/images/LOGO_OHANA.png'

export default function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo-container">
                    <a href="#">
                        <img src={logo} alt="logo"></img>
                    </a>
                </div>
            </div>
        </header>
    )
}
