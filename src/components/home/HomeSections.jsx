import React from "react";
import { Link } from "react-router-dom";
import useHomeSectionEntrance from "../../hooks/useHomeSectionEntrance";
import ornateArchFrame from "../../assets/images/Karnataka Temple Pillar Card Background.png";
import communityVideo from "../../assets/images/PixVerse_V6_Image_Text_540P_Animate_the_upload.mp4";
import paramparaBg1 from "../../assets/images/PramparaBG1.png";
import paramparaBg2 from "../../assets/images/PramparaBG2.png";
import paramparaBg3 from "../../assets/images/PramparaBG3.png";
import paramparaBg4 from "../../assets/images/PramparaBG4.png";

const gurus = [
  {
    title: "Guru Vidushi\nDr. Mala Shashikanth",
    text: "Founder-Director of Kaishiki Natyavahini and a leading Nanjanagudu exponent; Sanskriti's guiding Guru for over two decades."
  },
  {
    title: "Natyacharya\nDr. C. Radhakrishna",
    text: "A Kolar Parampare pioneer who guided our founder's advanced training."
  },
  {
    title: "Late Padma Bhushan\nDr. K. Venkatalakshamma",
    text: "A Mysuru Bharatanatya legend who gave our founder exclusive abhinaya training."
  },
  {
    title: "Vidwan R. K. Padmanabha",
    text: "Our founder's Guru in Carnatic classical music."
  }
];

const milestones = [
  {
    title: "Navapallava (fresh sprouts)",
    text: "The youngest children of Sanskriti took the stage, and the Rajathapatha series was first announced."
  },
  {
    title: "Mysuru Wodeyara Sangeetopasane (music devotion)",
    text: "A documentary presentation by musicologist Dr. Meera Rajaram on the Wodeyar kings of Mysuru and their patronage of classical music."
  },
  {
    title: "A study of dance traditions",
    text: "Singaramani Dr. Padmini Shreedhar presented a comparative study of classical dance compositions in the Tanjavur and Mysore traditions."
  }
];

export function ParamparaSection({ archCards = false, animatedBackground = false }) {
  return (
    <section className={`section parampara-section${animatedBackground ? " parampara-section--animated" : ""}`} id="parampara">
      {animatedBackground && (
        <div className="parampara-background" aria-hidden="true">
          {[paramparaBg1, paramparaBg2, paramparaBg3, paramparaBg4].map((image, index) => (
            <span
              className="parampara-background__slide"
              key={image}
              style={{ "--slide-image": `url(${image})`, "--slide-index": index }}
            />
          ))}
        </div>
      )}
      <div className="container">
        <div className="section-heading home-section-heading">
          <div>
        <p className="eyebrow">OUR PARAMPARA (LINEAGE)</p>
            <h2>The lineage we bow to</h2>
          </div>
        </div>
        <p className="home-section-intro">
          A river is known by its source. Sanskriti is a humble torchbearer of
          the Nanjanagudu Parampare of Bharatanatya, and whatever we offer on
          stage is first an offering to the teachers who shaped us. We remember
          them here with gratitude.
        </p>
        <div className="home-card-grid guru-grid">
          {gurus.map((guru, index) => (
            <article
              className={`home-info-card guru-card ornate-card${archCards ? ` course-card course-card--arch about-arch-card${index === 1 ? " about-arch-card--second" : ""}` : ""}`}
              key={guru.title}
            >
              {archCards ? (
                <>
                  <img className="course-card__frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                  <div className="course-card__content">
                    <span className="course-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{guru.title}</h3>
                    <p>{guru.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <span className="card-ornament" aria-hidden="true">❋</span>
                  <h3>{guru.title}</h3>
                  <p>{guru.text}</p>
                </>
              )}
            </article>
          ))}
        </div>
        <p className="parampara-closing">
          Nanjanagudu is our home, yet we hold the sister traditions of
          Karnataka, Muguru, Mysuru and Kolara in equal reverence. Senior Gurus
          of each parampara are regularly invited to teach our students, so that
          no stream of this heritage is forgotten.
        </p>
        <Link className="text-link" to="/about">Know our Parampara</Link>
      </div>
    </section>
  );
}

export function GuruSection() {
  return (
    <section className="guru-profile section" id="our-guru">
      <div className="container guru-profile-grid">
        <div className="guru-profile-mark" aria-hidden="true">
          <span>ಗುರು</span>
          <span className="guru-mark-caption">THE GURU</span>
        </div>
        <div className="guru-profile-copy">
          <p className="eyebrow">OUR GURU</p>
          <h2>Suchitra Alaknanda</h2>
          <p className="guru-title-line">Founder and Director</p>
          <p>
            Dancer, musician, actor and, above all, teacher. Guru Suchitra
            founded Sanskriti with a single wish: that the children of this land
            should grow up knowing, loving and taking pride in the art of their
            own soil.
          </p>
          <p>
            Trained for over two decades in the Nanjanagudu Parampare, she is
            also a graded artist of All India Radio, and her voice has given life
            to countless dance recitals. She holds a Master’s degree in
            Performing Arts.
          </p>
          <p>
            Her choreographies include <em>Sita Swayamvara</em>, <em>Girija Kalyana</em>,
            <em> Hoysala Vaibhava</em>, <em>Dashavatara</em>, <em>Haridasa Nritya Sampada</em>
            and <em>Ramachandram Bhavayami</em>.
          </p>
          <p>
            She has been honoured with the Kempegowda Award for her contribution
            to art and culture. At Sanskriti, we see this honour as belonging
            equally to the Gurus who shaped her.
          </p>
        <Link className="button button-primary guru-journey-link" to="/guru-suchitra">
          Read Guru Suchitra’s journey
        </Link>
        </div>
      </div>
    </section>
  );
}

export function RajathapathaSection() {
  return (
    <section className="section rajathapatha-section" id="rajathapatha">
      <div className="container">
        <p className="eyebrow">A SILVER JUBILEE JOURNEY</p>
        <h2 className="home-display-heading">Rajathapatha: the silver path</h2>
        <h3 className="rajathapatha-subheading">A journey of gratitude, one step at a time</h3>
        <h3 className="rajathapatha-selected-heading">Selected presentations</h3>
        <div className="rajathapatha-copy">
          <p>
            To honour Sanskriti’s journey, our founder chose not a single
            celebration, but a journey. She named it Rajathapatha, the silver path.
          </p>
          <p>
            Her wish was that this series should be more than a platform for
            dancers. It should lead our students back to the roots of their art:
            its history, its patrons, its protectors and the many streams that
            flow within it. To take pride in a tradition, one must first come to
            know it.
          </p>
        </div>
        <div className="milestone-list">
          {milestones.map((milestone) => (
            <article className="milestone ornate-card" key={milestone.title}>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className="text-link" to="/about">Walk the Rajathapatha</Link>
      </div>
    </section>
  );
}

export function CommunitySection() {
  const { sectionRef, stage, motionClass } = useHomeSectionEntrance();
  return (
    <section ref={sectionRef} className={`community-section home-story-section section ${motionClass}`} id="support">
      <span className="home-story-ornament" aria-hidden="true" />
      <video className="community-background-video" autoPlay muted loop playsInline aria-hidden="true" tabIndex={-1}>
        <source src={communityVideo} type="video/mp4" />
      </video>
      <div className="container community-grid">
        <div className="community-copy">
          <p className="eyebrow home-motion-primary" inert={stage === "waiting"}>ART FOR EVERY CHILD</p>
          <h2 className="home-motion-primary" inert={stage === "waiting"}>No child turned away for want of means</h2>
          <div className="section-copy home-motion-reveal" inert={stage !== "revealed"}>
            <p>
              Some children are blessed with talent but not the means to learn.
              Sanskriti trains children from underprivileged backgrounds,
              children’s homes and municipal schools free of cost, with the same
              care and the same place on stage as every other student.
            </p>
            <a className="text-link" href="mailto:sanskriti.suchitra@gmail.com?subject=Support%20a%20Student">Support a student</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StagesSection() {
  return (
    <section className="section stages-section" id="stages">
      <div className="container">
        <p className="eyebrow">WITH GRATITUDE</p>
        <h2 className="home-display-heading">Stages that have blessed us</h2>
        <p className="home-section-intro">
          By the grace of our Gurus, our students have been given the privilege
          of offering their art on revered stages across India and abroad.
        </p>
        <p className="stages-closing">
          Our senior students have presented their Rangapravesha (solo stage
          debut), received the national scholarship of the Centre for Cultural
          Resources and Training, and earned recognition as graded artists of
          Doordarshan. Each of these is a blessing we receive with gratitude.
        </p>
      </div>
    </section>
  );
}

export function AtAGlanceSection() {
  return (
    <section className="at-a-glance">
      <div className="container glance-grid">
        <div className="glance-item">
          <strong>25+</strong>
          <span>years of service to the arts</span>
        </div>
        <div className="glance-item">
          <strong>4</strong>
          <span>Karnataka paramparas of Bharatanatya honoured</span>
        </div>
        <p>Nanjanagudu · Muguru · Mysuru · Kolara</p>
      </div>
    </section>
  );
}
