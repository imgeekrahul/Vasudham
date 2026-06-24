import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <button className="navbar__logo" onClick={() => navigate("home")}>
          <div className="navbar__logo-icon">
            <WheatIcon />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">VasuDham</span>
            <span className="navbar__logo-sub">Atta</span>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.id}>
              <button
                className={`navbar__link ${currentPage === l.id ? "navbar__link--active" : ""}`}
                onClick={() => navigate(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="navbar__cta" onClick={() => navigate("contact")}>
          Get in Touch
        </button>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <button
              key={l.id}
              className={`navbar__mobile-link ${currentPage === l.id ? "active" : ""}`}
              onClick={() => { navigate(l.id); setMenuOpen(false); }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function WheatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 24V10M14 10C14 10 11 7 8 8C8 8 9 11 14 10ZM14 10C14 10 17 7 20 8C20 8 19 11 14 10Z" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 16C14 16 11 13 8 14M14 16C14 16 17 13 20 14" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14 20C14 20 11 17 8 18M14 20C14 20 17 17 20 18" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="6" r="2" fill="#C8922A"/>
    </svg>
  );
}
