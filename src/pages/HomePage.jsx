import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Products from "../components/home/Products";
import Branches from "../components/home/Branches";
import Testimonials from "../components/home/Testimonials";
import CTABanner from "../components/home/CTABanner";

export default function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Features />
      <Products navigate={navigate} />
      <Branches navigate={navigate} />
      <Testimonials />
      <CTABanner navigate={navigate} />
    </>
  );
}
