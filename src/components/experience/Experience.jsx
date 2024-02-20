import React from "react";
import { BiLogoFlutter } from "react-icons/bi";
import { SiDart } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoFirebase } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { SiWireshark } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";

import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiLogoFlutter className="experience__icon" />
              <div>
                <h4>FLUTTER</h4>
{/*                 <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <SiDart className="experience__icon" />
              <div>
                <h4>DART</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiLogoJavascript className="experience__icon" />
              <div>
                <h4>JAVASCRIPT</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__icon" />
              <div>
                <h4>REACT</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__icon" />
              <div>
                <h4>HTML</h4>
{/*                 <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiLogoCss3 className="experience__icon" />
              <div>
                <h4>CSS</h4>
{/*                 <small className="text-light">Intermediate</small>{" "} */}
              </div>
            </article>
          </div>
        </div>

        {/* =========== END OF FRONT-END =========== */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiLogoNodejs className="experience__icon" />
              <div>
                <h4>Node.js</h4>
{/*                 <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFiletypeSql className="experience__icon" />
              <div>
                <h4>SQL</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiLogoFirebase className="experience__icon" />
              <div>
                <h4>Firebase</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiLogoMongodb className="experience__icon" />
              <div>
                <h4>MongoDB</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiLogoPython className="experience__icon" />
              <div>
                <h4>Python</h4>
{/*                 <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* =========== END OF BACK-END =========== */}

        <div className="cyber__front">
          <h3>Cyber Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiKalilinux className="experience__icon" />
              <div>
                <h4>Kali Linux</h4>
{/*                 <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiLogoPython className="experience__icon" />
              <div>
                <h4>Python</h4>
{/*                 <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <SiWireshark className="experience__icon" />
              <div>
                <h4>Wireshark</h4>
{/*                 <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
