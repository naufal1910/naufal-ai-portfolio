
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, Languages } from "lucide-react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <h2 className="section-heading">
          About <span className="text-teal">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal">Naufal</h3>
            <p className="text-light/80 mb-6">
              With a background in full-stack development, I am actively pursuing an AI engineering path to harness the power of machine learning and deep learning for real-world impact.
            </p>
            <p className="text-light/80 mb-6">
              My journey started in mechanical engineering, where I developed strong problem-solving skills. Over time, I transitioned to software development, focusing on building robust enterprise solutions for financial technology companies.
            </p>
            <p className="text-light/80 mb-8">
              I'm passionate about combining technical expertise with business insights to create intelligent applications that solve complex problems efficiently and effectively.
            </p>
            
            <Button className="bg-teal hover:bg-teal/90 text-dark" asChild>
              <a href="#" download="naufal_resume.pdf">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          
          <div className="space-y-8">
            <div className="bg-dark/50 p-6 rounded-lg border border-light/10">
              <div className="flex items-start mb-4">
                <GraduationCap className="text-teal h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-light mb-1">Education</h4>
                  <p className="text-teal font-medium">Master of Management Information System</p>
                  <p className="text-light/70">Binus University</p>
                </div>
              </div>
              
              <div className="pl-9">
                <p className="text-sm text-light/60 mb-2">Additional certifications:</p>
                <ul className="space-y-1 text-light/80">
                  <li>• Java Professional Certification</li>
                  <li>• Spring Framework Specialist</li>
                  <li>• Introduction to AI & Machine Learning (Coursera)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-dark/50 p-6 rounded-lg border border-light/10">
              <div className="flex items-start mb-4">
                <Languages className="text-teal h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-light mb-2">Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>English</span>
                        <span className="text-teal">Fluent</span>
                      </div>
                      <div className="w-full bg-light/10 rounded-full h-1.5">
                        <div className="bg-teal h-1.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Indonesian</span>
                        <span className="text-teal">Native</span>
                      </div>
                      <div className="w-full bg-light/10 rounded-full h-1.5">
                        <div className="bg-teal h-1.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Korean</span>
                        <span className="text-teal">Basic</span>
                      </div>
                      <div className="w-full bg-light/10 rounded-full h-1.5">
                        <div className="bg-teal h-1.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
