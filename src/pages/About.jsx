import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PageIntro from "../components/common/PageIntro";
import {
  AboutClosingSection,
  AboutIntroSection,
  AboutLearningSection,
  AboutRajathapathaSection,
  AboutServiceAndStagesSection
} from "../components/about/AboutSections";
import { GuruSection, ParamparaSection } from "../components/home/HomeSections";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Sanskriti Centre for Performing Arts";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "The story of Sanskriti: our Gurus, our lineage in the Nanjanagudu Parampare, our founder Suchitra Alaknanda, and over twenty-five years of service to the arts."
    );
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const sections = document.querySelectorAll(
      ".about-route > .page-intro, .about-route > .section"
    );

    if (!("IntersectionObserver" in window)) return undefined;

    const timers = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const section = entry.target;
        section.classList.add("about-motion-section", "home-motion-entered");
        if (section.classList.contains("about-story-section")) {
          section.classList.add("about-story-started");
        }
        if (section.classList.contains("page-intro")) {
          section.classList.add("about-intro-started");
        }
        if (section.classList.contains("about-learning-section")) {
          section.classList.add("about-learning-started");
        }
        if (section.classList.contains("parampara-section")) {
          section.classList.add("about-parampara-started");
        }
        observer.unobserve(section);
        timers.set(section, window.setTimeout(() => {
          section.classList.replace("home-motion-entered", "home-motion-revealed");
        }, 1000));
      });
    }, { threshold: 0.18 });

    sections.forEach((section) => {
      section.classList.add("about-motion-section", "home-motion-waiting");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="about-route">
        <PageIntro
          eyebrow="ABOUT US"
          title="Our story is the story of our Gurus."
          text="What we have received, and what we hope to pass on."
        />
        <AboutIntroSection />
        <ParamparaSection archCards animatedBackground />
        <GuruSection />
        <AboutLearningSection />
        <AboutRajathapathaSection />
        <AboutServiceAndStagesSection />
        <AboutClosingSection />
      </main>
      <Footer />
    </>
  );
}
