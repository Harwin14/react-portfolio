import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer-logo">
                Harwin
            </a>
            <ul className="permalink">
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experiences">Experiences</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
                <div className="footer-socials">
                    <a href="https://facebook.com">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com">
                        <FiInstagram />
                    </a>
                    <a href="https://linkedin.com">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com">
                        <FiGithub />
                    </a>
                </div>
                <div className="footer-copyright">
                    <small>@copy; EGATOR Tutorials. All right reserved</small>
                </div>
        </footer>
    );
};

export default Footer;
