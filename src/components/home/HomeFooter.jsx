import React from "react";
import { Link } from "react-router-dom";
import useHomeSectionEntrance from "../../hooks/useHomeSectionEntrance";

export default function HomeFooter() {
  const { sectionRef, stage, motionClass } = useHomeSectionEntrance();
  return (
    <section ref={sectionRef} className={`home-cta home-story-section section ${motionClass}`}>
      <span className="home-story-ornament" aria-hidden="true" />
      <div className="container cta-box">
        <div>
          <p className="eyebrow home-motion-primary" inert={stage === "waiting"}>A CLOSING INVITATION</p>
          <h2 className="home-motion-primary" inert={stage === "waiting"}>Come, sit with us</h2>
          <p className="closing-copy home-motion-reveal" inert={stage !== "revealed"}>
            The lamp was lit long before us. We ask only to keep it burning,
            and we would be honoured to have you beside us.
          </p>
        </div>
        <div className="closing-actions home-motion-reveal" inert={stage !== "revealed"}>
          <Link className="button button-primary" to="/contact?enquiry=classes">Enquire about classes</Link>
          <Link className="button button-secondary" to="/contact?enquiry=support-sanskriti">Offer your support</Link>
          <Link className="button button-tertiary closing-rajathapatha-link" to="/rajathapatha">Walk the Rajathapatha</Link>
        </div>
      </div>
    </section>
  );
}
