import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Routes>
        <Route path="#home" element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} />
        <Route path="#experience" element={<Experience />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
