import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsAndCondition from "./pages/terms-and-condition/TermsAndCondition";

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsAndCondition />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
