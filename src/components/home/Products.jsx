import "./Products.css";

const products = [
  {
    name: "Classic Whole Wheat Atta",
    weight: "5 kg / 10 kg",
    tag: "Bestseller",
    tagColor: "gold",
    desc: "Stone-ground from 100% whole wheat. Perfect for soft, nutritious rotis every day.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
  },
  {
    name: "Multigrain Atta",
    weight: "5 kg",
    tag: "New",
    tagColor: "green",
    desc: "A power-packed blend of wheat, jowar, bajra, and ragi for complete family nutrition.",
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80",
  },
  {
    name: "Chakki Fresh Atta",
    weight: "2 kg / 5 kg / 10 kg",
    tag: "Pure",
    tagColor: "brown",
    desc: "Freshly milled chakki atta for the authentic taste and texture of homemade rotis.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
  },
];

export default function Products({ navigate }) {
  return (
    <section className="products">
      <div className="container">
        <div className="products__header">
          <div>
            <p className="section-label">Our Range</p>
            <h2 className="section-title">Products You'll Love</h2>
          </div>
          <button className="btn-outline" onClick={() => navigate("gallery")}>
            View All →
          </button>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <div className="products__card" key={i}>
              <div className="products__img-wrap">
                <img src={p.img} alt={p.name} className="products__img" />
                <span className={`products__tag products__tag--${p.tagColor}`}>{p.tag}</span>
              </div>
              <div className="products__info">
                <h3 className="products__name">{p.name}</h3>
                <p className="products__weight">Available in: {p.weight}</p>
                <p className="products__desc">{p.desc}</p>
                <button className="products__btn" onClick={() => navigate("contact")}>
                  Enquire Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
