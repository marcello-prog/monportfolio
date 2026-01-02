import { Container, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center md:justify-between p-4 text-3xl md:text-xl font-bold pl-0">
      <a href="#" className="flex items-center">
        <Container className="mr-2"/>
        Marcel<span className="text-warning">DEV</span>
      </a>
        
        <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost rounded bg-red">Acceuil</a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-ghost rounded bg-red">A propos</a>
        </li>
        <li>
          <a href="#Expérience" className="btn btn-sm btn-ghost rounded bg-red">Mes expériences</a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost rounded bg-red">Mes projets</a>
        </li>
      </ul>
      <Menu className="md:hidden " />
      
    </div>
  );
};

export default Navbar;
