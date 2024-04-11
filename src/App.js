import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Social />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
