import { Container } from "lucide-react";
import {Facebook, Youtube, Twitter} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center pt-10 pb-10" >
        <aside>
          <Container className="w-10 h-10"/>
          <p className="font-bold">
            Marcel<span className="text-warning">DEV</span>
          </p>
          <p className="mb-10">
            Copyright © {new Date().getFullYear()}  All rights reserved MarcelDEV.
          </p>
          <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </aside>
        
      </footer>
    </div>
  );
};

export default Footer;
