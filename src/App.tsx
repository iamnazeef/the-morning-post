import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="selection:bg-black selection:text-white">
      <Navbar />
      <div className="container mx-auto px-2">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
