
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:order-1 md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="Placeholder - Replace with Naufal's photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-dark p-3 rounded-full border-2 border-teal shadow-lg">
                <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center">
                  <span className="text-teal font-bold text-sm">AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:order-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-light">
              Hi, I'm <span className="text-teal">Naufal</span>
            </h1>
            <div className="text-xl md:text-2xl font-light mb-6 text-light/90">
              Full-Stack Developer, Software Analyst, and aspiring AI Engineer
            </div>
            <p className="text-base md:text-lg mb-8 text-light/80 max-w-lg mx-auto md:mx-0">
              Dedicated to crafting impactful, data-driven solutions and bringing over 5 years of 
              experience developing robust systems for financial technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToExperience}
                className="bg-teal text-dark hover:bg-teal/90 font-medium text-base group"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-teal text-teal hover:bg-teal/10"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
