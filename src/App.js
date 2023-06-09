import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Gaman-LandingPage" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
