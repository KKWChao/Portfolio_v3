import { useState } from "react";

import Home from "@/scenes/Home";
import Navbar from "@/scenes/Navbar";
import About from "@/scenes/About";
import ContactMe from "@/scenes/ContactMe";
import Projects from "@/scenes/Projects";
import Footer from "@/scenes/Footer";

function App() {
  return (
    <div className="app scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
