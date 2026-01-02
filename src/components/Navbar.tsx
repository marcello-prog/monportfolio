import { Container } from "lucide-react";

const Navbar = () => {
  return (
   <div className="flex  items-center relative ">
      <div className="flex justify-center md:justify-between px-40 left-0 p-5 top-0   fixed     z-20 w-full bg-base-100 items-center">
        <a
        href="#"
        className="flex items-center font-bold text-3xl md:text-2xl w-50"
        id="home"
      >
        <Container className="mr-1 " />
        Marcel<span className="text-warning">Dev</span>
      </a>
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <a
            href="#Acceuil"
            className="btn btn-sm btn-ghost  focus:ring "
          >
            Acceuil
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="btn btn-sm btn-ghost focus:outline-none  focus:ring"
          >
            À propos
          </a>
        </li>
        <li>
          <a
            href="#Expériences"
            className="btn btn-sm btn-ghost focus:outline-none focus:ring"
          >
            Expériences
          </a>
        </li>
        <li>
          <a
            href="#Projets"
            className="btn btn-sm btn-ghost focus:outline-none  focus:ring"
          >
            Projets
          </a>
        </li>
      </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
