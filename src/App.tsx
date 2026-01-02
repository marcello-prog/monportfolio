import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Expérience from "./components/Expérience";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


// import Mes_projets from "./components/Mes_projets"

export default function App() {
    useEffect(() => {
    Aos.init({ 
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  },[]); // The empty dependency array([]) for the effect to run once

  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <div>
        <About />
      </div>

      <div className="p-5 md:px-[15%]">
        <Expérience />
        <Projets />
      </div>
      <div>
        <Footer />
      </div>

      {/* Projets/> */}
    </div>
  );
}
