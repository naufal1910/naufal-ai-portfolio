
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? "bg-dark/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold font-montserrat">
          <span className="text-teal">Naufal Nazaruddin</span>
          <span className="text-light">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-light hover:text-teal transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-light hover:text-teal transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-light hover:text-teal transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-light hover:text-teal transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-light hover:text-teal transition-colors font-medium"
          >
            About
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-teal text-dark hover:bg-teal/90"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light hover:text-teal"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md shadow-lg py-6 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-light hover:text-teal transition-colors py-2 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-light hover:text-teal transition-colors py-2 text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-light hover:text-teal transition-colors py-2 text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-light hover:text-teal transition-colors py-2 text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-light hover:text-teal transition-colors py-2 text-left"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal text-dark hover:bg-teal/90 w-full"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
