import "./Branches.css";

const branches = [
  {
    city: "Ranchi",
    state: "Jharkhand",
    address: "Ranchi, Jharkhand",
    img: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=500&q=80",
    mapQuery: "Ranchi+Jharkhand",
  },
  {
    city: "Delhi",
    state: "NCR",
    address: "Chattarpur, New Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&q=80",
    mapQuery: "Chattarpur+New+Delhi",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    address: "Basavanagara, Bangalore",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=80",
    mapQuery: "Basavanagara+Bangalore",
  },
];

export default function Branches({ navigate }) {
  return (
    <section className="branches">
      <div className="container">
        <div className="branches__header">
          <p className="section-label">Presence</p>
          <h2 className="section-title">Find Us Near You</h2>
          <p className="section-subtitle">
            Serving wholesome atta across three vibrant cities. Fresh from our mills to your kitchen.
          </p>
        </div>

        <div className="branches__grid">
          {branches.map((b, i) => (
            <div className="branches__card" key={i}>
              <div className="branches__img-wrap">
                <img src={b.img} alt={b.city} className="branches__img" />
                <div className="branches__img-overlay" />
                <div className="branches__city-badge">
                  <span className="branches__city">{b.city}</span>
                  <span className="branches__state">{b.state}</span>
                </div>
              </div>
              <div className="branches__body">
                <div className="branches__address">
                  <span>📍</span> {b.address}
                </div>
                <div className="branches__actions">
                  <a
                    href={`https://maps.google.com/?q=${b.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branches__map-btn"
                  >
                    View on Map →
                  </a>
                  <button className="branches__contact-btn" onClick={() => navigate("contact")}>
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
