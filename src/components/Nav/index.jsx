import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a
                href="/#"
                onClick={() => setActiveNav("#")}
                rel="noopener noreferrer"
                className={activeNav === "/#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                rel="noopener noreferrer"
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experiences"
                onClick={() => setActiveNav("#experiences")}
                rel="noopener noreferrer"
                className={activeNav === "#experiences" ? "active" : ""}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                rel="noopener noreferrer"
                className={activeNav === "#services" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                rel="noopener noreferrer"
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
