import React from "react";
import "./Footer.css";
import {FaFacebookSquare} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {ImTwitter} from 'react-icons/im';

const Footer = () => {
    return (
        <footer>
            <h1><a href="#" className="footer__logo">AAYUSH CHAUHAN</a></h1>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookSquare className="footer__logo"/></a>
                <a href="https://instagram.com"><GrInstagram className="footer__logo"/></a>
                <a href="https://twitter.com"><ImTwitter className="footer__logo"/></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; Aayush Chauhan. All Rights Reserved.
                    <br/>
                    The Website is still in development and progress is being made in the backend.
                </small>
            </div>
        </footer>
    )
}


export default Footer;