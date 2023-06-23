import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-2">
        <Routes>
          <Route path="/" element={<h1>Breaking News</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
