import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_kfofuge",
                "template_aalu1vd",
                form.current,
                "DJ8e4928t7kY4st8c"
            )
            e.target.reset()
            
    };
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <HiOutlineMail className="contact-option-icon" />
                        <h4>Email</h4>
                        <h5>agungharwinn@gmail.com</h5>
                        <a
                            href="mailto:agungharwinn@gmail.com?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact-option">
                        <RiMessengerLine className="contact-option-icon" />
                        <h4>Messenger</h4>
                        <h5>Agung Harwin N</h5>
                        <a
                            href="https://m.me/itzmewind"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact-option">
                        <BsWhatsapp className="contact-option-icon" />
                        <h3>WhatsApp</h3>
                        <h4>+62 812 1381 5491</h4>
                        <a
                            href="https://api.whatsapp.com/send?phone=081213815491"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        className="form-control"
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
