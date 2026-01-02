import { Mail } from "lucide-react";
import img from "../assets/img3.jpg";
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between md:my-32 my-10" id="Home">
      <div className="flex flex-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br /> je suis Marcello
          <span className="text-warning">Dev</span>
        </h1>
        <p className="my-4 text-center md:text-left">
          je suis un développeur full stack <br /> avec 5 ans d'expérience en
          utilisant React et <br />
          Node.js. Contactez-moi si vous avez besoin de mes services.
        </p>
        <a href="#" className="btn btn-warning md:w-fit  text-black">
          <Mail className="mr-1 w-5 h-5" />
          Contactez-moi
        </a>
      </div>

      <div className="md:ml-8" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="5s">
        <img src={img}
          alt="code image"
          className="w-96 h-96 rounded-lg mt-10 object-cover border-8 border-warning shadow-xl"
          style={{
            borderRadius: "71% 29% 35% 65% / 53% 51% 49% 47%",
          }}
        />  
      </div>
    </div>
  );
};

export default Home;
