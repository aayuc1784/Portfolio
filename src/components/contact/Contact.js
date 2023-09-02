import React from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_54nux2d', 'template_0u4ennn', form.current, 'oaeLXfpp-LQA3RrMQ')
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Toucn</h5>
            <h2>Contact Me</h2>
            
            <div className="container contac__container">
                <div className="contact__options">

                    <article className="contact__option">
                        <MdOutlineMailOutline className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>chauhanaayu100@gmail.com</h5>
                        <a href="mailto:chauhanaayu100@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <FaLinkedin className="contact__option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>aayuc1784@LinkedIn</h5>
                        <a href="https://linkedin.com/in/aayuc1784" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+91-7037894142</h5>
                        <a href="https://wa.me/+917037894142" target="_blank">Send a Message</a>
                    </article>
                </div>
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea name="name" rows="7" placeholder="Your Message" required/>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            </div>
        </section>
    )
}

export default Contact
