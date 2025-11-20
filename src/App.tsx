import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Expérience from "./components/Expérience";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
// import Mes_projets from "./components/Mes_projets"

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <div >
          <About />
          <div className="p-5 md:px-[15%]">
            <Expérience/>
            <Projets/>
            
          </div>
          <div>
             <Footer />
          </div>
         
          {/* Projets/> */}
      </div>

    </div>
  )
}