import React from 'react'

import './Footer.scss';
import '../../assets/icons/coolicons.scss'


export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <section className="social-media">
                    <a href="#" className="body1 resto-name">OHANA Porteña</a>
                    <ul className="social-media__list">
                        <li className="social-media__item">
                            <a className="media-tag body1" href="https://www.instagram.com/ohana.barr/"><i className="ci-instagram"></i></a>
                        </li>
                        <li className="social-media__item">
                            <a className="media-tag body1" href="https://www.facebook.com/ohanabarr"><i className="ci-facebook"></i></a>
                        </li>
                        <li className="social-media__item">
                            <a className="media-tag body1" href="https://twitter.com/Ohanabarr"><i className="ci-twitter"></i></a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}
