import { useState } from "react";
import "./GalleryPage.css";

const galleryItems = [
  {
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    title: "Golden Wheat Fields",
    category: "Farm",
  },
  {
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    title: "Classic Whole Wheat Atta",
    category: "Product",
  },
  {
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
    title: "Multigrain Blend",
    category: "Product",
  },
  {
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    title: "Freshly Baked Bread",
    category: "Recipe",
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    title: "Soft Rotis on Tawa",
    category: "Recipe",
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    title: "Healthy Home Cooking",
    category: "Lifestyle",
  },
  {
    img: "https://images.unsplash.com/photo-1596797882870-8c33c67e5e8d?w=600&q=80",
    title: "Chakki Stone Grinding",
    category: "Process",
  },
  {
    img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=80",
    title: "Fresh Wheat Harvest",
    category: "Farm",
  },
  {
    img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&q=80",
    title: "Paratha Perfection",
    category: "Recipe",
  },
  {
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    title: "Premium Packaging",
    category: "Product",
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    title: "Nutritious Meals",
    category: "Lifestyle",
  },
  {
    img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80",
    title: "Quality Control",
    category: "Process",
  },
];

const categories = ["All", "Product", "Farm", "Recipe", "Process", "Lifestyle"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <div className="gallery-hero">
        <div className="gallery-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1400&q=80"
            alt="Gallery"
          />
          <div className="gallery-hero__overlay" />
        </div>
        <div className="container gallery-hero__content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Our Gallery</p>
          <h1 className="gallery-hero__title">From Farm to Your Kitchen</h1>
          <p className="gallery-hero__desc">
            A visual journey through our wheat fields, milling process, products, and the happy kitchens we serve.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="gallery-filter">
        <div className="container gallery-filter__inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter__btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="gallery-grid container">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="gallery-grid__item"
            onClick={() => setLightbox(item)}
          >
            <img src={item.img} alt={item.title} />
            <div className="gallery-grid__overlay">
              <span className="gallery-grid__category">{item.category}</span>
              <h3 className="gallery-grid__title">{item.title}</h3>
              <span className="gallery-grid__zoom">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="lightbox__img" />
            <div className="lightbox__info">
              <span className="lightbox__cat">{lightbox.category}</span>
              <h3 className="lightbox__title">{lightbox.title}</h3>
            </div>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
