
import React from "react";
import { 
  Briefcase, 
  Calendar, 
  ChevronRight,
  Building,
  Wrench,
  Database
} from "lucide-react";

const ExperienceItem = ({
  period,
  title,
  company,
  description,
  icon: Icon,
}: {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal/20 text-teal border border-teal/30">
          <Icon size={20} />
        </div>
        {/* Vertical line */}
        <div className="w-0.5 grow bg-teal/20 my-2"></div>
      </div>

      <div className="pb-12">
        <span className="text-sm text-light/60 flex items-center gap-1 mb-1">
          <Calendar size={14} /> {period}
        </span>
        <h3 className="text-xl font-bold text-teal mb-1">{title}</h3>
        <h4 className="text-lg font-medium text-light/80 mb-3">{company}</h4>
        <p className="text-light/70">{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      period: "2018 – Present",
      title: "Software Analyst",
      company: "PT. Finexus",
      description:
        "Designing technical solutions using Java, SQL, and Spring Framework for debit/credit card management systems. Collaborating with QA teams and authoring comprehensive documentation to ensure robust and maintainable solutions.",
      icon: Briefcase,
    },
    {
      period: "2014 – 2017",
      title: "Mechanical Engineer",
      company: "G to G in South Korea",
      description:
        "Solved complex mechanical and technical problems, applying analytical thinking and innovative approaches to engineering challenges in a cross-cultural work environment.",
      icon: Wrench,
    },
    {
      period: "2010 – 2013",
      title: "IT – MIS Staff",
      company: "PT. Soon Poh Technologies",
      description:
        "Built a desktop application to streamline manual data entry processes, significantly improving operational efficiency and reducing error rates across departments.",
      icon: Building,
    },
    {
      period: "2009 – 2010",
      title: "Training Employee",
      company: "PT. Astra Honda Motor",
      description:
        "Gained valuable experience in data entry and SAP systems, establishing a strong foundation in enterprise software operations and data management principles.",
      icon: Database,
    },
  ];

  return (
    <section id="experience" className="bg-dark/50">
      <div className="container mx-auto">
        <h2 className="section-heading">
          My <span className="text-teal">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              period={exp.period}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              icon={exp.icon}
            />
          ))}
          
          {/* Last item doesn't need vertical line */}
          <div className="flex gap-4 md:gap-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal/20 text-teal border border-teal/30">
              <ChevronRight size={20} />
            </div>
            <div className="pb-4">
              <h3 className="text-xl font-semibold text-teal">Looking forward</h3>
              <p className="text-light/70">Expanding skills in AI and Machine Learning...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
