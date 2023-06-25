import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NewsProvider from "./context/NewsContext";
import MobileNav from "./components/Mobilenav";
const Search = lazy(() => import("./pages/Search"));

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const body = document.querySelector("body");

  const handleMobileNav = (operation: string) => {
    switch (operation) {
      case "open":
        if (body) {
          body.style.overflowY = "hidden";
        }
        setIsMobileNavOpen(true);
        break;
      case "close":
        if (body) {
          body.style.overflow = "auto";
        }
        setIsMobileNavOpen(false);
        break;
      default:
        console.log("Invalid operation");
    }
  };

  return (
    <div className="selection:bg-black selection:text-white">
      <Navbar handleMobileNav={handleMobileNav} />
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        handleMobileNav={handleMobileNav}
      />
      <div className="container mx-auto px-2">
        <Suspense fallback={<span>Loading</span>}>
          <NewsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </NewsProvider>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
