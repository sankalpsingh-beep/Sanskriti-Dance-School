import React from "react";
import { Link } from "react-router-dom";
import logoMark from "../../assets/images/sanskriti-logo-circle.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-lockup" aria-label="Sanskriti Centre for Performing Arts">
            <img className="footer-brand-mark" src={logoMark} alt="" />
            <span className="footer-brand-copy">
              <span className="footer-brand-wordmark">Sanskriti</span>
              <span className="footer-brand-subtitle">Centre for Performing Arts</span>
            </span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link className="footer-rajathapatha-button" to="/rajathapatha">Rajathapatha</Link>
        </div>

        <div className="footer-contact">
          <h2>Get in touch</h2>
          <p className="footer-director">Artistic Director: Suchitra Alaknanda</p>
          <div className="footer-contact-grid">
            <div className="footer-contact-item footer-contact-address">
              <span>VISIT</span>
              <address>#230, 45th Cross Road, 8th Block, Jayanagar, Bengaluru - 560070</address>
            </div>
            <div className="footer-contact-item">
              <span>CALL</span>
              <p><a href="tel:+918026637590">+91-80-2663 7590</a><br />
                <a href="tel:+919880367357">98803 67357</a> · <a href="tel:+919845049744">98450 49744</a></p>
            </div>
            <div className="footer-contact-item">
              <span>EMAIL</span>
              <p><a href="mailto:sanskriti.suchitra@gmail.com">sanskriti.suchitra@gmail.com</a><br />
                <a href="mailto:suchi.alaknanda@gmail.com">suchi.alaknanda@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Sanskriti Centre for Performing Arts. A charitable trust devoted to the classical performing arts of Karnataka.</div>
      <div className="footer-credit">Designed and maintained by Brand-Ignite</div>
    </footer>
  );
}

