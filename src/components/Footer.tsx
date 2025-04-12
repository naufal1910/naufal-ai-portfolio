
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/80 py-8 border-t border-light/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold font-montserrat">
              <span className="text-teal">Naufal</span>
              <span className="text-light">.</span>
            </div>
            <p className="text-light/60 text-sm mt-2">
              Full-Stack Developer & AI Engineer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-light/60 text-sm">
              © {currentYear} Naufal. All rights reserved.
            </p>
            <p className="text-light/40 text-xs mt-1">
              Designed with passion and purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
