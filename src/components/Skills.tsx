
import React from "react";
import { CheckCircle } from "lucide-react";

// Skill category component
const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: string[] 
}) => {
  return (
    <div className="bg-dark/50 rounded-lg p-6 border border-light/10">
      <h3 className="text-xl font-semibold mb-4 text-teal">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-teal/80" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Progress bar component
const SkillBar = ({ 
  name, 
  percentage 
}: { 
  name: string; 
  percentage: number 
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-light/90">{name}</span>
        <span className="text-teal">{percentage}%</span>
      </div>
      <div className="w-full bg-light/10 rounded-full h-2">
        <div
          className="bg-teal h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "PHP", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Spring Framework", "Linux", "Git", "Maven", "RESTful APIs"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "Langchain", "Transfer Learning", "Data Analysis"]
    },
    {
      title: "Other Skills",
      skills: ["Agile/Scrum", "Secure Coding", "Technical Documentation", "Problem Solving"]
    }
  ];

  const coreSkills = [
    { name: "Java Development", percentage: 90 },
    { name: "Spring Framework", percentage: 85 },
    { name: "SQL & Database Design", percentage: 80 },
    { name: "Machine Learning", percentage: 65 },
    { name: "Deep Learning", percentage: 60 },
  ];

  return (
    <section id="skills" className="bg-dark/50">
      <div className="container mx-auto">
        <h2 className="section-heading">
          Technical <span className="text-teal">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-light">Core Proficiency</h3>
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-light">AI Engineering Focus</h3>
            <p className="text-light/70 mb-6">
              Currently expanding my expertise in artificial intelligence and machine learning,
              with a focus on developing intelligent solutions for real-world problems.
            </p>
            <div className="relative p-6 border border-teal/30 rounded-lg bg-teal/5">
              <div className="absolute -top-3 left-4 bg-dark px-2 text-teal font-medium">
                Learning Path
              </div>
              <ul className="space-y-2 text-light/80">
                <li>• Deep Learning Architectures</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Applications</li>
                <li>• AI Ethics & Responsible Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
