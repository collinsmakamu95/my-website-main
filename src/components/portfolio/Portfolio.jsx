import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import PORT1 from "../../assets/bgflowers.jpg";
import { BsGithub } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// DATA SET ? //

const data = [
  {
    id: 1,
    image: PORT1,
    title: "PROJECT TITLE",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: PORT1,
    title: "PROJECT TITLE",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: PORT1,
    title: "PROJECT TITLE",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    image: PORT1,
    title: "PROJECT TITLE",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 5,
    image: PORT1,
    title: "PROJECT TITLE",
    github: <a href=""></a>,
    demo: "https://dribble.com",
  },
  {
    id: 6,
    image: PORT1,
    title: "PROJECT TITLE",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container"
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          375: { slidesPerView: 1, spaceBetween: 10 },
          425: { slidesPerView: 1, spaceBetween: 10 },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  <BsGithub />
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  <CgMediaLive className="portfolio__icon" />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
