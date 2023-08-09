import "./about.css";
import { BsAward } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import secondMe from "../../assets/cmm16.png";

import React from "react";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={secondMe} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>

            <article className="about__card">
              <AiOutlineCode className="about__icon" />
              <h5>Languages</h5>
              <small>3 Proficient</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            non expedita est voluptas? Exercitationem quibusdam, quia aliquam
            necessitatibus doloremque nobis repellat blanditiis omnis laborum
            quod. Ex quam cum consectetur aliquam!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
