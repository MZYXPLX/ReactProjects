import "../assets/CSS/components.css";
import Image from "../assets/backgrounds/full-removebg-preview.png";
import TypingText from "./TextTypingEffect/TypingText";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram (2).png";
import github from "../assets/icons/github_pix.png";

// script.js
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContainer glass" id="crt">
        <div className="scanline"></div>
        <img src={Image} alt="Logo" />
        <div className="links">
          <TypingText text="> Contact Me!!!" className="green" />
          <TypingText
            text="> Email: mzyxplx@gmail.com"
            className="green"
            delay={4000}
          />
          <TypingText text="> LINKS: " className="green" delay={10000} />
          <div className="icons">
            <a href="https://www.linkedin.com/in/abdullah-fawad-ba821b244/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-fawad-ba821b244/">
              <img src={instagram} alt="instagram" className="insta" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-fawad-ba821b244/">
              <img src={github} alt="github" className="git" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
