import React from "react";
import { Link } from "react-router-dom";
import useHomeSectionEntrance from "../../hooks/useHomeSectionEntrance";
import ornateArchFrame from "../../assets/images/Karnataka Temple Pillar Card Background.png";

const courses = [
  {
    number: "01",
    title: "Bharatanatya",
    text: "Learn the Nanjanagudu Parampare through systematic practice and research."
  },
  {
    number: "02",
    title: "Carnatic Classical Music",
    text: "Study the musical tradition that gives life to dance and song."
  },
  {
    number: "03",
    title: "Theatre",
    text: "Explore performance, storytelling and expression through theatre."
  },
  {
    number: "04",
    title: "Yoga",
    text: "Build steadiness, awareness and a strong foundation for artistic practice."
  },
  {
    number: "05",
    title: "Veda-Patha",
    text: "Learn the practice of Vedic chanting."
  },
  {
    number: "06",
    title: "Natyashastra",
    text: "Explore the principles, language and tradition of Indian performance."
  }
];

export default function CoursePreview() {
  const { sectionRef, stage, motionClass } = useHomeSectionEntrance();
  return (
    <section ref={sectionRef} className={`courses-preview home-story-section section ${motionClass}`}>
      <span className="home-story-ornament" aria-hidden="true" />
      <div className="container">
        <div className="section-heading home-motion-primary" inert={stage === "waiting"}>
          <div>
            <p className="eyebrow">LEARNING AT SANSKRITI</p>
            <h2>What is learnt here</h2>
          </div>
          <Link className="text-link" to="/courses">Explore our classes</Link>
        </div>

        <div className="course-grid home-motion-cards" inert={stage !== "revealed"}>
          {courses.map((course) => (
            <article className="course-card ornate-card course-card--arch" key={course.number}>
              <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
              <div className="course-card__content">
                <span className="course-number">{course.number}</span>
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <Link to="/courses">Learn more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
