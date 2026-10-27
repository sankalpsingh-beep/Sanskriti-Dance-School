import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PageIntro from "../components/common/PageIntro";
import ornateArchFrame from "../assets/images/Karnataka Temple Pillar Card Background.png";

const sessions = [
  {
    step: "Step 1",
    title: "Navapallava (fresh sprouts)",
    details: "26 January 2024 | Viveka Auditorium, Jayanagar",
    text: "The path began with our youngest. At Navapallava, part of our annual Bhaava Taranga festival, the little ones of Sanskriti took the stage, and the Rajathapatha series was announced to warm applause. Smt. and Sri Prabhakar Rao, founders of the Santosh Kumar Rao Charitable Trust, graced the occasion and blessed the children."
  },
  {
    step: "Step 2",
    title: "Mysuru Wodeyara Sangeetopasane",
    text: "Musicologist Dr. Meera Rajaram presented her research on the Wodeyar kings of Mysuru, whose patronage gave classical music and its artists their place of honour in society. Nearly every king of the dynasty, she shared, was a gifted artist, a devoted patron, or both. The session ended in a standing ovation. The gathering was blessed by Guru Dr. Mala Shashikanth and art critic Sri H. N. Narahari Rao, who also unveiled the Rajathapatha logo."
  },
  {
    step: "Step 3",
    title: "Karnataka’s Bharatanatya traditions",
    text: "Guru Dr. Mala Shashikanth, founder of the Bharatagama Pratishtana, spoke to our students on the many styles of Bharatanatya in Karnataka: what they share, what makes each one unique, and how all of them belong to the rich Karnataka Parampare."
  },
  {
    step: "Step 4",
    title: "Lecture demonstration by Singaramani Dr. Padmini Shreedhar",
    details: "3 August 2024 | Nani Angala, Suchitra Cinema and Cultural Academy, Banashankari",
    text: "Dr. Padmini Shreedhar, Artistic Director of Nritya Gaana Academy for Performing Arts, offered a comparative study of classical dance compositions in the Tanjavur and Mysore traditions."
  }
];

const furtherSessions = [
  {
    title: "Rangabhoga",
    text: "An upcoming lecture-demonstration by Dr. Karuna Vijayendra on a rare and nearly forgotten tradition."
  },
  {
    title: "Harikatha",
    text: "An upcoming storytelling presentation by Sri Sharath Prabhat, weaving together music, dance, speech and humour."
  },
  {
    title: "The nuances of music in a dance recital",
    text: "An upcoming exploration of how raga and mood shape a dance production."
  }
];

export default function Rajathapatha() {
  useEffect(() => {
    document.title = "Rajathapatha: The Silver Path | Sanskriti Centre for Performing Arts";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Rajathapatha is the silver jubilee series of Sanskriti Centre for Performing Arts: gatherings that explore the history, patrons and traditions of Karnataka’s classical arts."
    );
    const page = document.querySelector(".rajathapatha-page");
    if (!page) return undefined;

    const muralSection = page.querySelector(".rajathapatha-thought");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollFrame = 0;

    const updateMuralParallax = () => {
      scrollFrame = 0;
      if (!muralSection || reducedMotionQuery.matches) return;

      const bounds = muralSection.getBoundingClientRect();
      const distanceFromCenter = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
      const parallax = Math.max(-18, Math.min(18, distanceFromCenter * 0.035));
      muralSection.style.setProperty("--mural-parallax-y", `${parallax}px`);
    };

    const requestMuralParallax = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateMuralParallax);
    };

    const revealTargets = page.querySelectorAll(":scope > section, .raj-event-card, .further-session");
    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("rajathapatha-revealed"));
      return undefined;
    }

    revealTargets.forEach((target) => target.classList.add("rajathapatha-reveal"));
    window.addEventListener("scroll", requestMuralParallax, { passive: true });
    window.addEventListener("resize", requestMuralParallax);
    requestMuralParallax();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("rajathapatha-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    revealTargets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestMuralParallax);
      window.removeEventListener("resize", requestMuralParallax);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="rajathapatha-page">
        <PageIntro
          eyebrow="A SILVER JUBILEE JOURNEY"
          title="Rajathapatha: the silver path"
          text="Twenty-five years, walked one step at a time."
        />

        <section className="section rajathapatha-thought">
          <div className="rajathapatha-mural-art" aria-hidden="true">
            <span className="rajathapatha-mural-mandala" />
            <span className="rajathapatha-mural-dust rajathapatha-mural-dust-one" />
            <span className="rajathapatha-mural-dust rajathapatha-mural-dust-two" />
            <span className="rajathapatha-mural-dust rajathapatha-mural-dust-three" />
            <span className="rajathapatha-mural-dust rajathapatha-mural-dust-four" />
            <span className="rajathapatha-mural-dust rajathapatha-mural-dust-five" />
            <svg className="rajathapatha-mural-butterfly" viewBox="0 0 44 34">
              <g className="rajathapatha-butterfly-wings">
                <path className="rajathapatha-butterfly-wing rajathapatha-butterfly-wing-left" d="M22 17C17 7 8 2 4 6 0 10 5 16 12 18 6 22 8 29 14 29c4 0 7-5 8-12Z" />
                <path className="rajathapatha-butterfly-wing rajathapatha-butterfly-wing-right" d="M22 17c5-10 14-15 18-11 4 4-1 10-8 12 6 4 4 11-2 11-4 0-7-5-8-12Z" />
                <path className="rajathapatha-butterfly-body" d="M22 12c-2 3-2 8 0 12 2-4 2-9 0-12Zm0 1c-2-5-5-7-7-7m7 7c2-5 5-7 7-7" />
              </g>
            </svg>
          </div>
          <div className="container narrow">
            <p className="eyebrow">THE THOUGHT BEHIND IT</p>
            <h2 className="home-display-heading">A journey, not a single celebration</h2>
            <p>
              To honour more than twenty-five years of service, Suchitra chose
              not one grand evening, but a journey. She named it Rajathapatha,
              the silver path.
            </p>
            <p>
              Her wish was that the series should be more than a platform for
              dancers. It should lead our students back to the roots of their
              art: where it came from, how it changed over the generations, and
              who protected and nurtured it along the way.
            </p>
            <p>
              We believe that pride in a tradition begins with knowing it. So,
              on this path, we sit at the feet of scholars and Gurus, and we listen.
            </p>
          </div>
        </section>

        <section className="section rajathapatha-steps">
          <div className="container">
            <p className="eyebrow">THE STEPS SO FAR</p>
            <h2 className="home-display-heading">The steps we have taken</h2>
            <div className="raj-event-grid">
              {sessions.map((session, index) => (
                <article className="raj-event-card ornate-card" key={session.title}>
                  <img className="rajathapatha-card-frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                  <span className="raj-event-step" aria-label={session.step}>{String(index + 1).padStart(2, "0")}</span>
                  <div className="rajathapatha-card-content">
                    <h3>{session.title}</h3>
                    {session.details && <p className="raj-event-details">{session.details}</p>}
                    <p>{session.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rajathapatha-further section">
          <div className="container narrow">
            <p className="eyebrow">FURTHER STEPS</p>
            <h2 className="home-display-heading">The path continues</h2>
            <p>
              Upcoming sessions will continue our conversations about
              Karnataka’s performing arts.
            </p>
            <div className="further-session-list">
              {furtherSessions.map((session, index) => (
                <article className="further-session ornate-card" key={session.title}>
                  <img className="rajathapatha-card-frame" src={ornateArchFrame} alt="" aria-hidden="true" />
                  <span className="further-session-badge" aria-label={`Step ${index + 1}`}>
                    {index + 1}
                  </span>
                  <div className="rajathapatha-card-content">
                    <h3>{session.title}</h3>
                    <p>{session.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rajathapatha-destination section">
          <div className="container narrow">
            <p className="eyebrow">NAADA NUPURA · 2026</p>
            <h2 className="home-display-heading">The path leads to Naada Nupura 2026</h2>
            <p>
              The silver path arrives at our silver jubilee festival, where our
              students offer Aparajithe, a dance production honouring the
              unconquered feminine. We would be honoured by your presence.
            </p>
            <p className="rajathapatha-event-details">
              Sunday, 22 November 2026 <span aria-hidden="true">|</span> 10:30 AM onwards
              <br />
              Meenakshi Rangamancha, Kumarans Auditorium, Doddakalasandra, Bengaluru
            </p>
            <Link
              className="button festival-button"
              to="/contact?enquiry=reserve-seat"
            >
              Reserve Your Seat
            </Link>
          </div>
        </section>

        <section className="rajathapatha-closing section">
          <svg className="rajathapatha-closing-mandala" viewBox="0 0 300 300" aria-hidden="true" focusable="false">
            <g fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="150" cy="150" r="42" />
              <circle cx="150" cy="150" r="61" />
              <circle cx="150" cy="150" r="88" />
              <circle cx="150" cy="150" r="116" />
              <path id="closing-mandala-petal" d="M150 27 C166 48 166 67 150 82 C134 67 134 48 150 27Z" />
              <use href="#closing-mandala-petal" transform="rotate(22.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(45 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(67.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(90 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(112.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(135 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(157.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(180 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(202.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(225 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(247.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(270 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(292.5 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(315 150 150)" />
              <use href="#closing-mandala-petal" transform="rotate(337.5 150 150)" />
            </g>
          </svg>
          <div className="container narrow">
            <div className="rajathapatha-closing-lotus" aria-hidden="true">
              <svg viewBox="0 0 72 48" focusable="false">
                <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M36 39C22 39 12 35 7 28c10-1 18 1 24 7-5-9-7-17-4-25 6 6 9 13 9 22 0-13 4-22 11-27 2 10-1 19-7 28 7-7 15-10 25-9-5 8-15 14-29 15Z" />
                  <path d="M17 40h38M36 32v9M27 39c3-2 6-3 9-3s6 1 9 3" />
                </g>
              </svg>
            </div>
            <p>
              To every Guru, scholar and well-wisher who has walked a part of
              this path with us, our humble pranams (respectful salutations).
            </p>
            <div className="rajathapatha-closing-divider" aria-hidden="true">
              <svg viewBox="0 0 180 24" focusable="false">
                <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h62c7 0 11-4 16-8 2 4 5 7 8 8-3 1-6 4-8 8-5-4-9-8-16-8M176 12h-62c-7 0-11-4-16-8-2 4-5 7-8 8 3 1 6 4 8 8 5-4 9-8 16-8" />
                  <path d="M90 4c5 4 7 6 7 8s-2 4-7 8c-5-4-7-6-7-8s2-4 7-8Z" />
                  <circle cx="90" cy="12" r="2" />
                </g>
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
