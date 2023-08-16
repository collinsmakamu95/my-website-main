import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiHackthebox } from "react-icons/si";
import LOGO from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={LOGO} alt="cmm logo" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div className="footer__contacts">
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://hackthebox.com" target="_blank">
          <SiHackthebox />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;CMM. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
