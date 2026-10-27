import React from "react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logoMark from "../../assets/images/sanskriti-logo-circle.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  function selectMenuItem(to, event) {
    if (!open || window.innerWidth > 850 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      setOpen(false);
      return;
    }
    event.preventDefault();
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      navigate(to);
    }, 180);
  }

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="nav-logo" to="/" onClick={() => setOpen(false)} aria-label="Sanskriti Centre for Performing Arts home">
          <img src={logoMark} alt="" />
          <span className="nav-logo-copy">
            <span className="nav-logo-wordmark">Sanskriti</span>
            <span className="nav-logo-subtitle">Centre for Performing Arts</span>
          </span>
        </Link>

        <button
          className={`menu-button ${open ? "active" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => { setClosing(false); setOpen(!open); }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? "open" : ""} ${closing ? "closing" : ""}`}>
          <NavLink to="/" end onClick={(event) => selectMenuItem("/", event)} className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <div className="nav-dropdown">
            <NavLink to="/about" onClick={(event) => selectMenuItem("/about", event)} className={({ isActive }) => isActive ? "active nav-dropdown-trigger" : "nav-dropdown-trigger"}>
              About Us <span className="dropdown-chevron" aria-hidden="true" />
            </NavLink>
            <div className="nav-dropdown-menu">
              <Link to="/about#center" onClick={(event) => selectMenuItem("/about#center", event)}>Sanskriti Centre for Performing Arts</Link>
              <Link to="/guru-suchitra" onClick={(event) => selectMenuItem("/guru-suchitra", event)}>Guru Suchitra Alaknanda</Link>
            </div>
          </div>
          <NavLink to="/rajathapatha" onClick={(event) => selectMenuItem("/rajathapatha", event)} className={({ isActive }) => isActive ? "active" : ""}>
            Rajathapatha
          </NavLink>
          <Link className="nav-enquire" to="/contact" onClick={(event) => selectMenuItem("/contact", event)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
