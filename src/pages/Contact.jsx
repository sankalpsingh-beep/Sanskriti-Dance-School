import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useSearchParams } from "react-router-dom";
import contactDancer from "../assets/images/Contact Bharatanatyam Dancer.png";

const contactIntents = {
  classes: {
    subject: "Classes and admissions",
    message: "I’m interested in learning about classes at Sanskriti.\n\nPlease share information about courses, age groups, class schedules and admissions."
  },
  "support-sanskriti": {
    subject: "Supporting Sanskriti",
    message: "I would like to support Sanskriti Centre for Performing Arts.\n\nPlease contact me with details about ways to contribute."
  },
  "reserve-seat": {
    subject: "Naada Nupura 2026 seat reservation",
    message: "I would like to reserve seats for Naada Nupura 2026: Aparajithe.\n\nNumber of seats:\n\nEvent: Sunday, 22 November 2026 at 10:30 AM onwards\nVenue: Meenakshi Rangamancha, Kumarans Auditorium, Doddakalasandra, Bengaluru\n\nPlease share the reservation details."
  },
  "support-festival": {
    subject: "Supporting the Naada Nupura 2026 festival",
    message: "I would like to support the Naada Nupura 2026: Aparajithe festival.\n\nPlease contact me with details about ways to contribute."
  }
};

export default function Contact() {
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const prefill = contactIntents[searchParams.get("enquiry")];

  useEffect(() => {
    document.title = "Contact Us | Sanskriti Centre for Performing Arts";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Contact Sanskriti Centre for Performing Arts in Jayanagar, Bengaluru, for classes, performances and general enquiries."
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiryType = formData.get("subject");
    formData.set("access_key", "6f578b36-df06-4861-8f84-6d9ea3e42052");
    formData.set("subject", `Website enquiry: ${enquiryType}`);

    setIsSubmitting(true);
    setNotice("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "The enquiry could not be sent.");
      }
      setNotice("Thank you. Your enquiry has been sent to Sanskriti.");
      form.reset();
    } catch (error) {
      setNotice("We couldn’t send your enquiry just now. Please try again or email Sanskriti directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-section">
          <div className="container contact-layout">
            <aside className="contact-art-panel">
              <img src={contactDancer} alt="Bharatanatyam dancer in an emerald and orange silk costume beside a carved temple pillar" />
              <div className="contact-art-caption">
                <span>Tradition, carried forward</span>
                <span>Sanskriti Centre for Performing Arts</span>
              </div>
            </aside>

            <div className="contact-main-panel">
              <header className="contact-heading">
                <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
                <h1>Let’s begin a conversation</h1>
                <p>Ask us about classes, performances, or the work of Sanskriti. We’ll be glad to help.</p>
              </header>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    Your name
                    <input name="name" type="text" autoComplete="name" required />
                  </label>
                  <label>
                    Email address
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                </div>
                <div className="contact-form-row">
                  <label>
                    Phone number <span className="contact-optional">(optional)</span>
                    <input name="phone" type="tel" autoComplete="tel" />
                  </label>
                  <label>
                    I’m enquiring about
                    <select name="subject" defaultValue={prefill?.subject || "Classes and admissions"} required>
                      <option>Classes and admissions</option>
                      <option>Performances and events</option>
                      <option>Supporting Sanskriti</option>
                      <option>General enquiry</option>
                      <option>Naada Nupura 2026 seat reservation</option>
                      <option>Supporting the Naada Nupura 2026 festival</option>
                    </select>
                  </label>
                </div>
                <label>
                  Your message
                  <textarea name="message" rows="5" defaultValue={prefill?.message || ""} required />
                </label>
                <div className="contact-form-submit">
                  <button className="contact-submit-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send enquiry"} <span aria-hidden="true">→</span>
                  </button>
                  <p className="contact-form-note">Your message will be delivered to Sanskriti by email.</p>
                </div>
                <p className="contact-form-status" role="status" aria-live="polite">{notice}</p>
              </form>

              <div className="contact-direct-details">
                <a href="tel:+918026637590">Call +91-80-2663 7590</a>
                <a href="mailto:sanskriti.suchitra@gmail.com">Email Sanskriti</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
