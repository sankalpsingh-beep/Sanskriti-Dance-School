import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import CoursePreview from "../components/home/CoursePreview";
import FestivalSection from "../components/home/FestivalSection";
import HomeFooter from "../components/home/HomeFooter";
import { CommunitySection } from "../components/home/HomeSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <Hero />
        <Welcome />
        <CoursePreview />
        <FestivalSection />
        <CommunitySection />
        <HomeFooter />
      </main>
      <Footer />
    </>
  );
}
