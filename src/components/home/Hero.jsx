import "./Hero.css";

export default function Hero({ navigate }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600&q=80"
          alt="Wheat fields"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge fade-up">
          <span>🌾</span> Pure & Natural Flour
        </div>
        <h1 className="hero__title fade-up fade-up-delay-1">
          The Heart of Every<br />
          <span className="hero__title-accent">Indian Kitchen</span>
        </h1>
        <p className="hero__desc fade-up fade-up-delay-2">
          VasuDham — crafted from the finest wheat, stone-ground to preserve
          nutrients, taste, and tradition. Trusted by families across Jharkhand, Delhi & Bangalore.
        </p>
        <div className="hero__actions fade-up fade-up-delay-3">
          <button className="btn-primary" onClick={() => navigate("gallery")}>
            Explore Our Products ↗
          </button>
          <button className="btn-outline hero__outline-btn" onClick={() => navigate("contact")}>
            Find Us Near You
          </button>
        </div>

        <div className="hero__stats fade-up fade-up-delay-4">
          <div className="hero__stat">
            <strong>3</strong>
            <span>Cities</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>10k+</strong>
            <span>Happy Families</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>100%</strong>
            <span>Natural</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-dot" />
      </div>
    </section>
  );
}
