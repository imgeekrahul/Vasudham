import "./CTABanner.css";

export default function CTABanner({ navigate }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
          alt="Fresh rotis"
          className="cta-banner__img"
        />
        <div className="cta-banner__overlay" />
      </div>
      <div className="container cta-banner__content">
        <p className="section-label" style={{ color: "var(--gold-light)" }}>Get Started</p>
        <h2 className="cta-banner__title">Ready to Taste the Difference?</h2>
        <p className="cta-banner__desc">
          Order VasuDham from your nearest branch or reach out to us directly.
          Your healthier kitchen journey starts with one bag.
        </p>
        <div className="cta-banner__actions">
          <button className="btn-primary" onClick={() => navigate("contact")}>
            Order Now →
          </button>
          <a href="tel:7979064070" className="cta-banner__phone">
            📞 +91 79790 64070
          </a>
        </div>
      </div>
    </section>
  );
}
