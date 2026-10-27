import React from "react";
import { Link } from "react-router-dom";
import useHomeSectionEntrance from "../../hooks/useHomeSectionEntrance";
import heroImageOne from "../../assets/images/NewHeroImages (1).png";
import heroImageTwo from "../../assets/images/NewHeroImages (2).png";
import heroImageThree from "../../assets/images/NewHeroImages (3).png";
import heroImageFour from "../../assets/images/NewHeroImages (4).png";

export default function Hero() {
  const { sectionRef, stage, motionClass } = useHomeSectionEntrance();
  return (
    <section ref={sectionRef} className={`hero ${motionClass}`}>
      <div className="hero-image-background" aria-hidden="true">
        <img className="hero-slide hero-slide-one" src={heroImageOne} alt="" />
        <img className="hero-slide hero-slide-two" src={heroImageTwo} alt="" />
        <img className="hero-slide hero-slide-three" src={heroImageThree} alt="" />
        <img className="hero-slide hero-slide-four" src={heroImageFour} alt="" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy home-motion-primary" inert={stage === "waiting"}>
          <p className="invocation">Sri Gurubhyo Namaha</p>
          <p className="invocation-meaning">Salutations to our Gurus</p>
          <h1>Every step we take begins at the feet of our Gurus.</h1>
          <p className="hero-text">
            For over twenty-five years, Sanskriti has humbly carried forward
            the Nanjanagudu Parampare (tradition) of Bharatanatya and
            Carnatic classical music in Bengaluru.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="button button-link">Our Story</Link>
            <Link to="/courses" className="button button-primary">Begin Learning with Us</Link>
          </div>
        </div>
        <aside className="hero-tradition home-motion-reveal" aria-label="Sanskriti's artistic traditions">
          <p className="hero-tradition__eyebrow">OUR LIVING TRADITION</p>
          <h2>Rooted in heritage.<br />Carried forward together.</h2>
          <ul>
            <li>Bharatanatya</li>
            <li>Carnatic classical music</li>
            <li>Guru-Shishya Parampara</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
