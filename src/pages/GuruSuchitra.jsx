import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PageIntro from "../components/common/PageIntro";
import suchitra1 from "../assets/images/Sucitra1.jpg";
import suchitra2 from "../assets/images/Sucitra2.JPG";
import suchitra3 from "../assets/images/Suchitra3.JPG";
import suchitra4 from "../assets/images/Suchitra4.JPG";
import suchitra5 from "../assets/images/Suchitra5.jpg";
import ornateArchFrame from "../assets/images/Karnataka Temple Pillar Card Background.png";

const suchitraPhotos = [suchitra1, suchitra2, suchitra3, suchitra4, suchitra5];

const training = [
  {
    title: "Bharatanatyam",
    text: "Over two decades of training in the Nanjanagudu Parampare under Vid. Dr. Mala Shashikanth, followed by advanced study with Natyacharya Dr. C. Radhakrishna."
  },
  {
    title: "Abhinaya",
    text: "Specialized in abhinaya under Padma Bhushan awardee Late Dr. K. Venkatalakshamma, one of Mysore’s greatest Bharatanatyam exponents."
  },
  {
    title: "Carnatic music",
    text: "Trained with Gana Kalabhushana Vid. R. K. Padmanabha, she is an All India Radio graded artist and vocalist for traditional dance recitals."
  }
];

export default function GuruSuchitra() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [pendingPhoto, setPendingPhoto] = useState(null);
  const [isPhotoTransitioning, setIsPhotoTransitioning] = useState(false);

  useEffect(() => {
    suchitraPhotos.forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    if (pendingPhoto !== null) return undefined;

    const timer = window.setTimeout(() => {
      setPendingPhoto((activePhoto + 1) % suchitraPhotos.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [activePhoto, pendingPhoto]);

  useEffect(() => {
    if (!isPhotoTransitioning || pendingPhoto === null) return undefined;

    const timer = window.setTimeout(() => {
      setActivePhoto(pendingPhoto);
      setPendingPhoto(null);
      setIsPhotoTransitioning(false);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [isPhotoTransitioning, pendingPhoto]);

  useEffect(() => {
    document.title = "Guru Suchitra Alaknanda | Sanskriti Centre for Performing Arts";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Meet Guru Vid. Smt. Suchitra Alaknanda: dancer, musician, actor, teacher, and founder of Sanskriti Centre for Performing Arts."
    );
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".guru-suchitra-page > .page-intro, .guru-suchitra-page > .section"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("guru-motion-pending");
        entry.target.classList.add("guru-motion-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    sections.forEach((section) => {
      section.classList.add("guru-motion-pending");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="guru-suchitra-page">
        <PageIntro
          eyebrow="MEET OUR GURU"
          title="Guru Vid. Smt. Suchitra Alaknanda"
          text="A multifaceted artist and teacher, carrying the Nanjanagudu Parampare forward through dance, music, and generations of students."
        />

        <section className="guru-suchitra-profile section">
          <div className="container guru-suchitra-profile-grid">
            <figure className="guru-suchitra-portrait">
              <div className="guru-suchitra-photo-stage">
                <img
                  key={activePhoto}
                  className={`guru-suchitra-photo guru-suchitra-photo-current ${activePhoto === 1 ? "is-landscape" : ""}`}
                  src={suchitraPhotos[activePhoto]}
                  alt={`Guru Vid. Smt. Suchitra Alaknanda, photo ${activePhoto + 1} of 5`}
                />
                {pendingPhoto !== null && (
                  <img
                    key={pendingPhoto}
                    className={`guru-suchitra-photo guru-suchitra-photo-next${isPhotoTransitioning ? " is-visible" : ""} ${pendingPhoto === 1 ? "is-landscape" : ""}`}
                    src={suchitraPhotos[pendingPhoto]}
                    alt=""
                    aria-hidden="true"
                    onLoad={() => setIsPhotoTransitioning(true)}
                  />
                )}
              </div>
              <figcaption className="guru-suchitra-card-motto" aria-label="Learn, perform, grow">
                <span>LEARN</span>
                <span>PERFORM</span>
                <span>GROW</span>
              </figcaption>
            </figure>
            <div className="guru-suchitra-intro">
              <p className="eyebrow">ARTIST · MUSICIAN · ACTOR · TEACHER</p>
              <h2>“Suchitra Aunty,” as her students fondly call her</h2>
              <p>
                Guru Vid. Smt. Suchitra Alaknanda is an accomplished dancer,
                musician, recognized actor, and teacher in Bharatanatyam and
                Carnatic music. Through her work, she has inspired more than
                100 students in the arts.
              </p>
              <p>
                Her emotive movement and vocal accompaniment bring depth to
                traditional dance recitals. Her warm, resonant voice has touched
                the hearts of listeners, while her teaching carries forward the
                traditions she has received from her Gurus.
              </p>
            </div>
          </div>
        </section>

        <section className="guru-suchitra-training section">
          <div className="container">
            <div className="section-heading guru-suchitra-heading">
              <div>
                <p className="eyebrow">A LIFE IN THE ARTS</p>
                <h2>Grounded in tradition</h2>
              </div>
              <p>Her learning spans dance, expression, and Carnatic music.</p>
            </div>
            <div className="guru-suchitra-training-grid">
              {training.map((item, index) => (
                <article className="guru-suchitra-training-card home-info-card ornate-card course-card course-card--arch" key={item.title}>
                  <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                  <div className="course-card__content">
                    <span className="course-number" aria-hidden="true">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="guru-suchitra-work section">
          <div className="container guru-suchitra-work-grid">
            <div>
              <p className="eyebrow">STUDY & STAGE</p>
              <h2>Scholarship shaped by practice</h2>
            </div>
            <div>
              <p>
                Alongside her artistic training, Guru Suchitra holds a Master’s
                degree in Performing Arts from Karnataka Bharatagama
                Prathishtana, affiliated with Gangubai Hangal University of
                Music and Performing Arts.
              </p>
              <p>
                Her performances at cultural organizations and festivals have
                been widely appreciated. She has composed and choreographed
                several acclaimed dance works and adaptations, and has led
                lecture demonstrations and workshops on the Nanjanagudu
                Parampare.
              </p>
            </div>
          </div>
        </section>

        <section className="guru-suchitra-honours section">
          <div className="container">
            <p className="eyebrow">RECOGNITION</p>
            <h2>Honours for a life of service to the arts</h2>
            <div className="guru-suchitra-awards">
              <article className="guru-suchitra-award home-info-card ornate-card course-card course-card--arch">
                <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                <div className="course-card__content">
                  <span className="course-number" aria-hidden="true">01</span>
                  <h3>Kempegowda Award</h3>
                  <p>Honouring her contributions to art and culture.</p>
                </div>
              </article>
              <article className="guru-suchitra-award home-info-card ornate-card course-card course-card--arch">
                <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                <div className="course-card__content">
                  <span className="course-number" aria-hidden="true">02</span>
                  <h3>
                    Bharatakala-<br />
                    praveena Natyacharya VSK Award
                  </h3>
                  <p>Recognising her work to preserve and share the Nanjanagudu Parampare.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}




