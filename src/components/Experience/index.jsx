import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
    return (
        <section id="experiences">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>Vue</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FrontEnd */}

                <div className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>Express JS</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>SQLite3</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
