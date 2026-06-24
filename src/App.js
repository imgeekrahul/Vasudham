import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>
        {currentPage === "home" && <HomePage navigate={navigate} />}
        {currentPage === "gallery" && <GalleryPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
