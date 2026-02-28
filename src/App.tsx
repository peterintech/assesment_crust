import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import Photospage from "./pages/Photospage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<Photospage />} />
      </Routes>
    </Router>
  );
};

export default App;
