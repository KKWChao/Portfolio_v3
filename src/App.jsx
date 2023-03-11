import { useState } from "react";

import Home from "@/scenes/Home";
import Navbar from "@/scenes/Navbar";
import About from "@/scenes/About";
import ContactMe from "@/scenes/ContactMe";
import Projects from "@/scenes/Projects";
import Footer from "@/scenes/Footer";
import Technologies from "@/scenes/Technologies";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
