import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-2">
        <Routes>
          <Route path="/" element={<h1>The Morning Post</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
