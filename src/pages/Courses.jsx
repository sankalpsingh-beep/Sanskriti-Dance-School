import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PageIntro from "../components/common/PageIntro";
import ornateArchFrame from "../assets/images/Karnataka Temple Pillar Card Background.png";

const courses = [
  ["01", "Classical Dance", "Foundation in technique, rhythm, expression and movement."],
  ["02", "Dance Training", "Regular practice sessions for students developing their skills."],
  ["03", "Performance Preparation", "Guidance for students preparing for stage presentations."]
];

export default function Courses() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          eyebrow="CLASSES & COURSES"
          title="Learn the art through practice."
          text="Course details, levels, timings and admissions can be added here as the final curriculum is confirmed."
        />
        <section className="section courses-catalog">
          <div className="container course-grid">
            {courses.map(([number, title, text]) => (
              <article className="course-card ornate-card course-card--arch" key={number}>
                <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                <div className="course-card__content">
                  <span className="course-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to="/contact">Enquire</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
