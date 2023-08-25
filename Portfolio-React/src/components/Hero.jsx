import Image from "../assets/backgrounds/download-removebg-preview.png";
import "../assets/CSS/components.css";
import TypingText from "./TextTypingEffect/TypingText";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroContainer glass" id="crt">
        <div className="scanline"></div>
        <img src={Image} alt="Logo" />
        <TypingText text="> Welcome to my terminal" className="green" />
        <TypingText
          text="> I am Abdullah Fawad, A web developer and designer"
          delay={4000}
          className="green"
        />
        <TypingText
          text="> Learn more about me by clicking the options above"
          delay={7000}
          className="green"
        />
      </div>
    </section>
  );
}
