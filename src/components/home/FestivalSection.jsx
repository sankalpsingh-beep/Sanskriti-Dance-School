import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useHomeSectionEntrance from "../../hooks/useHomeSectionEntrance";
import aparajitheIllustration from "../../assets/images/Sanskriti Aparaajithe Anniversary.png";

export default function FestivalSection() {
  const { sectionRef, stage, motionClass } = useHomeSectionEntrance();
  const particleCanvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = particleCanvasRef.current;
    const context = canvas?.getContext("2d");
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!section || !canvas || !context || isReducedMotion || !hasFinePointer) {
      return undefined;
    }

    let particles = [];
    let animationFrame = 0;
    let lastPointer = null;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

    const resizeCanvas = () => {
      const { width, height } = section.getBoundingClientRect();
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawParticles = () => {
      animationFrame = 0;
      const { width, height } = section.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      particles = particles.filter((particle) => particle.life > 0);

      particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life = Math.max(0, particle.life - 0.018);
        context.beginPath();
        context.fillStyle = `rgba(239, 201, 128, ${particle.life * 0.58})`;
        context.arc(particle.x, particle.y, particle.radius * particle.life, 0, Math.PI * 2);
        context.fill();
      });

      if (particles.length) {
        animationFrame = window.requestAnimationFrame(drawParticles);
      }
    };

    const handlePointerMove = (event) => {
      const bounds = section.getBoundingClientRect();
      const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (lastPointer) {
        const distance = Math.hypot(point.x - lastPointer.x, point.y - lastPointer.y);
        if (distance > 28) {
          particles.push({
            ...point,
            life: 1,
            radius: 1.4 + Math.random() * 1.2,
            velocityX: (Math.random() - 0.5) * 0.35,
            velocityY: -0.25 - Math.random() * 0.35
          });
          particles = particles.slice(-18);
          if (!animationFrame) animationFrame = window.requestAnimationFrame(drawParticles);
        }
      }
      lastPointer = point;
    };

    resizeCanvas();
    section.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrame);
      particles = [];
    };
  }, [sectionRef]);

  const handlePosterPointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--poster-rotate-x", `${y * -2.4}deg`);
    event.currentTarget.style.setProperty("--poster-rotate-y", `${x * 2.8}deg`);
  };

  const resetPosterTilt = (event) => {
    event.currentTarget.style.setProperty("--poster-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--poster-rotate-y", "0deg");
  };

  return (
    <section ref={sectionRef} className={`festival-feature festival-cinematic section ${motionClass}`} id="festivals">
      <span className="festival-intro-curtain" aria-hidden="true" />
      <span className="festival-mandala" aria-hidden="true" />
      <canvas ref={particleCanvasRef} className="festival-particle-trail" aria-hidden="true" />
      <div className="container festival-feature-inner">
        <div className="festival-feature-copy" inert={stage === "waiting"}>
          <p className="eyebrow home-motion-primary">Silver Jubilee Festival</p>

          <h2 className="home-motion-primary">Naada Nupura 2026: Aparajithe</h2>

          <p className="festival-tagline home-motion-primary">
            The unconquered feminine
          </p>

          <p className="festival-description home-motion-reveal">
            In our silver jubilee year, we bow to the unconquered feminine:
            women of courage from our epics and our history. We invite you,
            with all humility, to be with us and bless our students.
          </p>

          <dl className="festival-event-details home-motion-reveal">
            <div>
              <dt>Date &amp; time</dt>
              <dd>
                Sunday, 22 November 2026 · 10:30 AM onwards
              </dd>
            </div>

            <div>
              <dt>Venue</dt>
              <dd>
                Meenakshi Rangamancha, Kumarans Auditorium,
                Doddakalasandra, Bengaluru
              </dd>
            </div>
          </dl>

          <div className="festival-actions home-motion-reveal">
            <Link
              className="button button-primary"
              to="/contact?enquiry=reserve-seat"
            >
              Reserve Your Seat
            </Link>

            <Link
              className="button festival-secondary-button"
              to="/contact?enquiry=support-festival"
            >
              Support the Festival
            </Link>
          </div>
        </div>
        <div className="festival-feature-image home-motion-artwork">
          <div
            className="festival-poster-stage"
            onPointerMove={handlePosterPointerMove}
            onPointerLeave={resetPosterTilt}
          >
            <img src={aparajitheIllustration} alt="Aparajithe, a Sanskriti silver jubilee festival illustration" />
          </div>
          <span className="festival-petal festival-petal-one" aria-hidden="true" />
          <span className="festival-petal festival-petal-two" aria-hidden="true" />
          <span className="festival-petal festival-petal-three" aria-hidden="true" />
          <span className="festival-petal festival-petal-four" aria-hidden="true" />
          <span className="festival-petal festival-petal-five" aria-hidden="true" />
          <span className="festival-petal festival-petal-six" aria-hidden="true" />
          <span className="festival-petal festival-petal-seven" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
