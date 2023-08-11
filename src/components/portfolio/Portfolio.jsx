import React from "react";
import "./portfolio.css";
import PORT1 from "../../assets/bgflowers.jpg";

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
    github: "https://github.com",
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

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
