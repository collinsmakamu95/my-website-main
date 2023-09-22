import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./contact.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wy9ql9u",
        "template_s5625ix",
        form.current,
        "Zm9_PZ6bPeSxcYwRf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <AiOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>devbycmm@gmail.com</h5>
            <a href="mailto:devbycmm@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
        </div>
        {/* ----- Start of Form below ----- */}

        {/* <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Write Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
