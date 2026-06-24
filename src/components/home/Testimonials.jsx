import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Ranchi, Jharkhand",
    quote: "VasuDham has changed the way we eat! Our rotis are softer, and we can actually taste the difference from regular flour. My kids love it.",
    initials: "PS",
    color: "#C8922A",
  },
  {
    name: "Rajesh Kumar",
    location: "Chattarpur, Delhi",
    quote: "Been using VasuDham for over a year now. The stone-ground quality is unmatched. My whole family has noticed we feel more energetic and healthy.",
    initials: "RK",
    color: "#4A6741",
  },
  {
    name: "Meena Patil",
    location: "Bangalore, Karnataka",
    quote: "Finally found an atta that makes perfect parathas! The texture is exactly right — not too coarse, not too fine. Highly recommended.",
    initials: "MP",
    color: "#8B3A2A",
  },
  {
    name: "Sunita Devi",
    location: "Ranchi, Jharkhand",
    quote: "We've been switching various brands for years. VasuDham is where we stopped. Fresh, healthy, and the packaging keeps it fresh for a long time.",
    initials: "SD",
    color: "#6B4226",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <p className="section-label">What People Say</p>
          <h2 className="section-title">Loved by Families</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonials__card" key={i}>
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__quote">"{t.quote}"</p>
              <div className="testimonials__author">
                <div
                  className="testimonials__avatar"
                  style={{ background: t.color + "22", color: t.color, borderColor: t.color + "44" }}
                >
                  {t.initials}
                </div>
                <div>
                  <strong className="testimonials__name">{t.name}</strong>
                  <span className="testimonials__location">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
