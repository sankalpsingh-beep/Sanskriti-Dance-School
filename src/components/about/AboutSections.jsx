import React from "react";
import { Link } from "react-router-dom";
import ornateArchFrame from "../../assets/images/Karnataka Temple Pillar Card Background.png";
import aboutImage1 from "../../assets/images/AboutUS (1).png";
import aboutImage2 from "../../assets/images/AboutUS (2).png";
import aboutImage3 from "../../assets/images/AboutUS (3).png";
import aboutImage4 from "../../assets/images/AboutUS (4).png";
import serviceImage1 from "../../assets/images/Section7About1 (1).png";
import serviceImage2 from "../../assets/images/Section7About1 (2).png";
import serviceImage3 from "../../assets/images/Section7About1 (3).png";
import serviceImage4 from "../../assets/images/Section7About1 (4).png";

export function AboutIntroSection() {
  return (
    <section className="section about-story-section" id="center">
      <div className="container about-story-inner">
        <figure className="about-story-visual">
          <div className="about-story-image-stack" role="img" aria-label="Scenes from Sanskriti's dance and music traditions">
            <img className="about-story-image about-story-image-one" src={aboutImage1} alt="" />
            <img className="about-story-image about-story-image-two" src={aboutImage2} alt="" />
            <img className="about-story-image about-story-image-three" src={aboutImage3} alt="" />
            <img className="about-story-image about-story-image-four" src={aboutImage4} alt="" />
          </div>
          <figcaption className="about-story-caption">
            <span>Guru–Shishya Parampara</span>
            <small>Tradition carried forward</small>
          </figcaption>
        </figure>
        <div className="about-story-copy">
        <p className="eyebrow">OUR STORY</p>
        <h2 className="home-display-heading">A humble offering to the arts</h2>
        <p className="about-long-copy">
          Sanskriti Centre for Performing Arts is a cultural, non-profit
          charitable trust in Bengaluru, founded by Suchitra Alaknanda. For over
          twenty-five years, we have devoted ourselves to preserving and sharing
          Karnataka’s classical performing arts: Bharatanatya in the
          Nanjanagudu Parampare, Carnatic classical music and theatre.
        </p>
        <p className="about-long-copy">
          Everything we do rests on one belief. These ancient and pure art forms
          are not ours to own. They were entrusted to us through the
          Guru-Shishya Parampara (the sacred bond between teacher and disciple),
          and our duty is to prepare the young to become their torchbearers and
          carry them to the generation that follows.
        </p>
        </div>
      </div>
    </section>
  );
}

export function AboutLearningSection() {
  const festivals = [
    ["Naada Nupura", "Our annual festival of music and dance."],
    ["Bhaava Taranga", "A festival that gives our budding artists their place on stage."],
    ["Ankura & Nrithyaarpana", "Platforms for solo performances by our upcoming artists."]
  ];

  return (
    <section className="section about-learning-section">
      <div className="container">
        <p className="eyebrow">LEARNING &amp; PERFORMANCE</p>
        <h2 className="home-display-heading">A dancer is not made by dance alone</h2>
        <p className="home-section-intro">
          Learning at Sanskriti is holistic, systematic and rooted in research.
          Alongside dance and music, students are introduced to Yoga, Veda-Patha
          (Vedic chanting), Nattuvanga (conducting a recital), Taala (rhythm) and
          advanced abhinaya (the art of expression), through classes and
          workshops led by experienced Gurus and eminent scholars.
        </p>
        <p className="home-section-intro">
          Students are also guided through the examinations of the Karnataka
          Secondary Education Examination Board, so that they may step forward
          as qualified artists and, one day, as worthy teachers.
        </p>
        <h3 className="about-festival-heading">What is learnt must then be offered to the audience.</h3>
        <div className="home-card-grid about-festival-grid">
          {festivals.map(([name, description], index) => (
            <article className="home-info-card ornate-card course-card course-card--arch about-arch-card" key={name}>
              <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
              <div className="course-card__content">
                <span className="course-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutRajathapathaSection() {
  return (
    <section className="about-rajathapatha-section section">
      <div className="container about-rajathapatha-inner">
        <div>
          <p className="eyebrow">A SILVER JUBILEE JOURNEY</p>
          <h2 className="home-display-heading">Rajathapatha: the silver path</h2>
        </div>
        <div>
          <p>
            To honour more than twenty-five years of service, Suchitra conceived
            Rajathapatha, a series of gatherings that leads our students back to
            the roots of their art.
          </p>
          <Link className="text-link" to="/rajathapatha">Walk the Rajathapatha</Link>
        </div>
      </div>
    </section>
  );
}

export function AboutServiceAndStagesSection() {
  const serviceImages = [serviceImage1, serviceImage2, serviceImage3, serviceImage4];

  return (
    <section className="section about-service-section">
      <div className="container about-service-layout">
        <div className="about-service-copy">
        <div className="about-service-block">
          <p className="eyebrow">SERVICE &amp; BLESSINGS</p>
          <h2 className="home-display-heading">What society gave us, we return</h2>
          <p>
            Society has given us our strength and encouragement, and we consider
            it our duty to give back. Sanskriti offers free training to children
            from underprivileged backgrounds, children’s homes and municipal
            schools. We also visit schools in and around our neighbourhood to
            hold lecture demonstrations and workshops, so that more children may
            meet the cultural heritage of Karnataka, perhaps for the first time.
          </p>
        </div>
        <div className="about-service-block about-stages-block">
          <p className="eyebrow">WITH GRATITUDE</p>
          <h2 className="home-display-heading">Stages that have blessed us</h2>
          <p>
            By the grace of our Gurus, our students have offered their art on
            revered stages in India and abroad. Our senior students have
            presented their Rangapravesha (solo stage debut), received the
            national scholarship of the Centre for Cultural Resources and
            Training, and earned recognition as graded artists of Doordarshan.
            Each is a blessing we receive with gratitude.
          </p>
        </div>
        </div>
        <aside className="about-service-card" aria-label="Bharatanatyam dancers at historic temples">
          <div className="about-service-card__image-frame">
            {serviceImages.map((image, index) => (
              <img
                className="about-service-card__slide"
                key={image}
                src={image}
                alt={index === 0 ? "Bharatanatyam dancer performing in a historic temple" : ""}
                aria-hidden={index !== 0}
                loading="lazy"
                style={{ "--slide-index": index }}
              />
            ))}
          </div>
          <div className="about-service-card__motto" aria-label="Learn, perform, grow">
            <span>LEARN</span>
            <span>PERFORM</span>
            <span>GROW</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function AboutClosingSection() {
  return (
    <section className="home-cta section">
      <div className="container cta-box about-closing-box">
        <div>
          <p className="eyebrow">A CLOSING INVITATION</p>
          <h2>Walk this path with us</h2>
          <p className="closing-copy">
            Whether you come as a student, a parent, a rasika (lover of the
            arts) or a well-wisher, you are welcome here.
          </p>
        </div>
        <div className="closing-actions">
          <Link className="button button-primary" to="/contact?enquiry=classes">Enquire about classes</Link>
          <Link className="button button-secondary" to="/contact?enquiry=support-sanskriti">Offer your support</Link>
        </div>
      </div>
    </section>
  );
}
