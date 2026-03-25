import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimalTrading from "./pages/AnimalTrading";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import Story from "./pages/Story";
import AnimalTradingRo from "./pages/ro/AnimalTrading";
import ContactRo from "./pages/ro/Contact";
import GalleryRo from "./pages/ro/Gallery";
import HomeRo from "./pages/ro/Home";
import OfferingsRo from "./pages/ro/Offerings";
import StoryRo from "./pages/ro/Story";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(174,94,52,0.18),_transparent_58%)]" />
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/animal-trading" element={<AnimalTrading />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/ro" element={<HomeRo />} />
            <Route path="/ro/povestea-noastra" element={<StoryRo />} />
            <Route path="/ro/comert-animale" element={<AnimalTradingRo />} />
            <Route path="/ro/galerie" element={<GalleryRo />} />
            <Route path="/ro/oferte" element={<OfferingsRo />} />
            <Route path="/ro/contact" element={<ContactRo />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
