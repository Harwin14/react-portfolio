import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pos.jpg";
import IMG2 from "../../assets/pb.jpg";
import IMG3 from "../../assets/cm.png";
import IMG4 from "../../assets/portfolio2.jpg";
import IMG5 from "../../assets/portfolio3.jpg";
import IMG6 from "../../assets/portfolio4.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Point Of Sales",
        github: "https://github.com/Harwin14/Point-Of-Sales",
        demo: "https://dribbble.com/shots/21507278-Point-Of-Sales",
    },
    {
        id: 2,
        image: IMG2,
        title: "PhoneBooks-App (ReactJs, Redux, React-native ,VueJs)",
        github: "https://github.com/Harwin14/ReactNative-Phonebook",
        demo: "https://dribbble.com/shots/21507298-Phonebooks-app",
    },
    {
        id: 3,
        image: IMG3,
        title: "coming soon",
        github: "https://github.com/Harwin14",
        demo: "https://dribbble.com/Harwin14",
    },
    {
        id: 4,
        image: IMG4,
        title: "coming soon",
        github: "https://github.com/Harwin14",
        demo: "https://dribbble.com/Harwin14",
    },
    {
        id: 5,
        image: IMG5,
        title: "coming soon",
        github: "https://github.com/Harwin14",
        demo: "https://dribbble.com/Harwin14",
    },
    {
        id: 6,
        image: IMG6,
        title: "coming soon",
        github: "https://github.com/Harwin14",
        demo: "https://dribbble.com/Harwin14",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                {data.map(({ id, image, title, github, demo }) => (
                    <article key={id} className="portfolio-item">
                        <div className="portfolio-item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio-item-cta">
                            <a href={github} className="btn">
                                Github
                            </a>
                            <a
                                href={demo}
                                className="btn btn-primary"
                                target="_blank"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
