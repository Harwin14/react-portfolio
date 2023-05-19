import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
    return (
        <section id="about">
            <h5>get to know</h5>
            <h1>About Me</h1>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={Me} alt="About Image" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className="about-icon" />
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                        </article>
                        <article className="about-card">
                            <FiUsers className="about-icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about-card">
                            <VscFolderLibrary className="about-icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iure ipsam harum recusandae asperiores maiores
                        eius dignissimos placeat, sapiente adipisci incidunt
                        cumque ratione odio. Mollitia doloribus, et dolor
                        praesentium perferendis ab!
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's a Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
