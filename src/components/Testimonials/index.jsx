import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination,Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
const data = [
    {
        avatar: AVTR1,
        name: "Tina Snow",
        review: "Lorem i. Ad quisqs ratione vero nobis fugiat, perspiciatis quidem debitis provident? Consectetur ipsam quas earum doloremque id aut in consequatur, fugiat maiores, corrupti commodi veritatis, aperiam adipisci unde.",
    },
    {
        avatar: AVTR2,
        name: "Abah Jajang",
        review: "sit ametrehenne vero nobis fugiat, perspiciatis quidem debitis provident? Consectetur ipsam quas earum doloremque id aut in consequatur, fugiat maiores, corrupti commodi veritatis, aperiam adipisci unde.",
    },
    {
        avatar: AVTR3,
        name: "Abigael Ghe",
        review: "ipisiAd quis vero nobis fugiat, perspiciatis quidem debitis provident? Consectetur ipsam quas earum doloremque id aut in consequatur, fugiat maiores, corrupti commodi veritatis, aperiam adipisci unde.",
    },
    {
        avatar: AVTR4,
        name: "Wa eras ",
        review: "Reprehena autem libero vitae maivero nobis fugiat, perspiciatis quidem debitis provident? Consectetur ipsam quas earum doloremque id aut in consequatur, fugiat maiores, corrupti commodi veritatis, aperiam adipisci unde.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials-container"
                modules={[Pagination,Navigation]}
                navigation
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            
            >
                {data.map(({ avatar, name, review }, index) => (
                    <SwiperSlide key={index} className="testimonial">
                        <div className="client-avatar">
                            <img src={avatar} alt={name} />
                        </div>
                        <h5 className="client-name">{name}</h5>
                        <small className="client-review">{review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
