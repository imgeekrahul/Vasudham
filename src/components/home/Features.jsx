import "./Features.css";

const features = [
  {
    icon: "🌾",
    title: "Stone-Ground Purity",
    desc: "Traditional stone-grinding preserves the bran, germ, and all natural nutrients your family deserves.",
  },
  {
    icon: "🧪",
    title: "No Additives",
    desc: "Zero preservatives, zero artificial colours. Just pure wheat flour the way nature intended.",
  },
  {
    icon: "💛",
    title: "Rich in Nutrients",
    desc: "High in dietary fibre, iron, and B-vitamins — every roti carries a dose of wholesome goodness.",
  },
  {
    icon: "🤌",
    title: "Perfect Texture",
    desc: "Smooth, soft dough that rolls easily. Fluffy rotis and parathas every single time.",
  },
  {
    icon: "🌱",
    title: "Sustainably Sourced",
    desc: "We partner with trusted farmers who grow wheat using responsible, eco-conscious practices.",
  },
  {
    icon: "📦",
    title: "Fresh Every Batch",
    desc: "Small-batch milling means you always get the freshest flour, packed right after grinding.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <p className="section-label">Why VasuDham</p>
          <h2 className="section-title">Goodness in Every Grain</h2>
          <p className="section-subtitle">
            From wheat field to kitchen — we preserve the natural integrity of every grain so your family eats better.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div className="features__card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="features__icon">{f.icon}</div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
