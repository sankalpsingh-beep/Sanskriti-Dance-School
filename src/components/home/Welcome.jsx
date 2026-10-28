import React from "react";
import { Link } from "react-router-dom";
import useHomeSectionEntrance from "../../hooks/useHomeSectionEntrance";
import namasteImage from "../../assets/images/Bharatanatyam Dancer in a Stone Temple.png";
import terracottaOrnamentalBackground from "../../assets/images/Terracotta Temple-Inspired Ornamental Background.png";

export default function Welcome() {
  const { sectionRef, stage, motionClass } = useHomeSectionEntrance();

  return (
    <section
      ref={sectionRef}
      className={`welcome home-story-section section welcome-${stage} ${motionClass}`}
      style={{
        backgroundImage: `linear-gradient(105deg, rgba(29, 15, 10, .48) 0%, rgba(43, 20, 11, .28) 52%, rgba(25, 13, 9, .38) 100%), url("${terracottaOrnamentalBackground}")`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <span className="home-story-ornament" aria-hidden="true" />
      <div className="container two-column welcome-layout">
        <div className="welcome-copy-column">
          <div className="welcome-heading">
            <p className="eyebrow">NAMASKARA (WELCOME)</p>
            <h2>With folded hands, we welcome you.</h2>
          </div>

          <div className="section-copy welcome-copy" inert={stage !== "revealed"}>
            <p>
              Sanskriti was not built by us alone. It was given to us by our Gurus,
              through the Guru-Shishya Parampara, the sacred bond between teacher
              and disciple. Our task is simply to pass it on, whole and undiminished,
              to the children who come to us.
            </p>
            <Link className="text-link" to="/about">About Us</Link>
          </div>
        </div>

        <figure className="namaste-artwork">
          <img
            className="namaste-artwork__image"
            src={namasteImage}
            alt="Bharatanatyam dancer offering a namaskara in a stone temple"
          />
          <figcaption className="namaste-artwork__caption">A living tradition, carried forward</figcaption>
        </figure>
      </div>
    </section>
  );
}
