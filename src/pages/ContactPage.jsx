import { useState } from "react";
import "./ContactPage.css";

const branches = [
  {
    city: "Ranchi",
    state: "Jharkhand",
    address: "Ranchi, Jharkhand – 834001",
    icon: "🌿",
    mapLink: "https://maps.google.com/?q=Ranchi+Jharkhand",
  },
  {
    city: "Chattarpur",
    state: "New Delhi",
    address: "Chattarpur, New Delhi – 110074",
    icon: "🏙️",
    mapLink: "https://maps.google.com/?q=Chattarpur+New+Delhi",
  },
  {
    city: "Basavanagara",
    state: "Bangalore",
    address: "Basavanagara, Bangalore – 560037",
    icon: "🌆",
    mapLink: "https://maps.google.com/?q=Basavanagara+Bangalore+Karnataka",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
            alt="Contact"
          />
          <div className="contact-hero__overlay" />
        </div>
        <div className="container contact-hero__content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Get In Touch</p>
          <h1 className="contact-hero__title">We'd Love to Hear from You</h1>
          <p className="contact-hero__desc">
            Have a question, want to place a bulk order, or just want to know more?
            Reach out — our team is happy to help.
          </p>
        </div>
      </div>

      <div className="contact-body container">
        {/* Left — form */}
        <div className="contact-form-wrap">
          <h2 className="contact-form-title">Send Us a Message</h2>
          <p className="contact-form-sub">Fill in your details and we'll get back to you within 24 hours.</p>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success__icon">✅</div>
              <h3>Thank You!</h3>
              <p>We've received your message and will get back to you soon.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__field">
                  <label>Nearest Branch</label>
                  <select name="city" value={form.city} onChange={handleChange}>
                    <option value="">Select branch</option>
                    <option value="Ranchi">Ranchi, Jharkhand</option>
                    <option value="Delhi">Chattarpur, Delhi</option>
                    <option value="Bangalore">Basavanagara, Bangalore</option>
                  </select>
                </div>
              </div>

              <div className="contact-form__field">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us what you need — product enquiry, bulk order, distributor tie-up..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact-form__submit">
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Right — info */}
        <div className="contact-info">
          {/* Phone */}
          <div className="contact-info__phone-card">
            <div className="contact-info__phone-icon">📞</div>
            <div>
              <h3>Call Us Directly</h3>
              <a href="tel:7979064070" className="contact-info__phone-num">
                +91 79790 64070
              </a>
              <p>Mon – Sat, 9 AM to 7 PM</p>
            </div>
          </div>

          {/* Branches */}
          <h3 className="contact-info__branches-title">Our Branches</h3>
          <div className="contact-info__branches">
            {branches.map((b, i) => (
              <div className="contact-info__branch" key={i}>
                <div className="contact-info__branch-icon">{b.icon}</div>
                <div className="contact-info__branch-body">
                  <strong>{b.city}</strong>
                  <span>{b.state}</span>
                  <p>{b.address}</p>
                  <a href={b.mapLink} target="_blank" rel="noopener noreferrer">
                    View on Map →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
