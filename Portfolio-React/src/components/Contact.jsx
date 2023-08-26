import "../assets/CSS/components.css";
import Image from "../assets/backgrounds/full-removebg-preview.png";
import TypingText from "./TypingText";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram (2).png";
import github from "../assets/icons/github.png";

// script.js
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContainer glass" id="crt">
        <img src={Image} alt="Logo" className="profile-image" />
        <div className="cScanline"></div>
        <div className="links">
          <TypingText text="> Contact Me!!!" className="green" />
          <br />
          <TypingText
            text="> Email: mzyxplx@gmail.com"
            className="green"
            delay={4000}
          />
          <br />
          <TypingText text="> LINKS: -->" className="green" delay={10000} />
          <span className="icons">
            <a href="https://www.linkedin.com/in/abdullah-fawad-ba821b244/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/abdullah__0_0_1/">
              <img src={instagram} alt="instagram" className="insta" />
            </a>
            <a href="https://github.com/MZYXPLX/MZYXPLX">
              <img src={github} alt="github" className="git" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
