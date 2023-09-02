import React from "react";
import HeaderSocials from "./HeaderSocials";
import CTA from "./CTA";
// import People from '../../assets/Mern.jpg';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Aayush Chauhan</h1>
                <h4>Upcoming Intern' 24 at Bank of New York Mellon</h4>
                <h5>Competitive Programmer</h5>
                <h5>Tech-Enthusaist</h5>
            </div>
            <CTA/>
            <HeaderSocials/>
            {/* <div className="me">
                <img src={People} alt="" />
            </div> */}
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </header>
    )
}

export default Header