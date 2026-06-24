import "./Footer.css";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-name">VasuDham</span>
            <span className="footer__logo-atta">Atta</span>
          </div>
          <p className="footer__tagline">
            Pure. Natural. Nourishing.<br />
            Crafted from the finest wheat grains for your family's health.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" aria-label="Facebook" className="footer__social-icon">f</a>
            <a href="https://instagram.com" aria-label="Instagram" className="footer__social-icon">in</a>
            <a href="https://twitter.com" aria-label="YouTube" className="footer__social-icon">▶</a>
          </div>
        </div>

        <div className="footer__nav">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => navigate("home")}>Home</button></li>
            <li><button onClick={() => navigate("gallery")}>Gallery</button></li>
            <li><button onClick={() => navigate("contact")}>Contact Us</button></li>
          </ul>
        </div>

        <div className="footer__branches">
          <h4>Our Branches</h4>
          <ul>
            <li>
              <span className="footer__branch-dot" />
              <div>
                <strong>Ranchi</strong>
                <p>Ranchi, Jharkhand</p>
              </div>
            </li>
            <li>
              <span className="footer__branch-dot" />
              <div>
                <strong>Delhi</strong>
                <p>Chattarpur, Delhi</p>
              </div>
            </li>
            <li>
              <span className="footer__branch-dot" />
              <div>
                <strong>Bangalore</strong>
                <p>Basavanagara, Bangalore</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <a href="tel:7979064070" className="footer__phone">
            📞 +91 79790 64070
          </a>
          <p className="footer__hours">Mon – Sat: 9 AM – 7 PM</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} VasuDham. All rights reserved.</p>
          <p className="footer__made">Made with ❤️ for healthy families</p>
        </div>
      </div>
    </footer>
  );
}
