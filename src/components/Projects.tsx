
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Project card component
const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags,
  links
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: Array<{ label: string; url: string; icon: React.ElementType }>;
}) => {
  return (
    <Card className="bg-dark/50 border border-light/10 overflow-hidden h-full hover:border-teal/40 transition-colors group">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
      </div>
      <CardHeader className="pt-4">
        <CardTitle className="text-xl text-teal">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs py-1 px-2 bg-light/10 text-light/70 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-light/70">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {links.map((link, index) => (
          <Button 
            key={index} 
            variant="outline" 
            size="sm" 
            className="text-light border-light/20 hover:bg-teal/20 hover:border-teal"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="mr-1 h-3.5 w-3.5" />
              {link.label}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Brain Tumor Diagnosis",
      description: "This project is part of my master's thesis, developed to fulfill the graduation requirement of the Master of Information System Management program at BINUS University. It applies transfer learning to detect and classify brain tumors from MRI scans, achieving up to 99% accuracy with the Xception model and incorporates Grad-CAM for model interpretability. The research was presented at the International Conference on Data Engineering and Enterprise System (ICDEES 2024) and is scheduled for publication with Springer.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      tags: ["AI", "Machine Learning", "Transfer Learning", "Healthcare"],
      links: [
        { label: "Colab", url: "https://colab.research.google.com/drive/17yRSNnh1DtWPr4BpdNxUpPgM1khCPBhG?usp=sharing", icon: ExternalLink },
        { label: "Video", url: "https://youtu.be/4yEhACN2vVE", icon: Play },
        { label: "Research Paper", url: "https://binusianorg-my.sharepoint.com/personal/naufal_nazaruddin_binus_ac_id/_layouts/15/guestaccess.aspx?share=Efo9BncW_DFGnYOFrEm0AnAB1051gmlMJz9Uyq1HCm-K-w&e=aRL8uS", icon: ExternalLink }
      ]
    },
    {
      title: "Carrfella - Career Agent Advisor",
      description: "Carrfella is Career Agent Advisor that helps job-seekers instantly evaluate and enhance their resume for any job description.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      tags: ["AI", "Natural Language Processing", "Career Development"],
      links: [
        { label: "GitHub", url: "https://github.com/naufal1910/carrfella_prototype", icon: Github },
        { label: "Video Demo", url: "https://youtu.be/X0qFlVjtYT0", icon: Play }
      ]
    },
    {
      title: "Credit Card Management System",
      description: "A full-stack development project for a comprehensive debit and credit card management system, built for financial institutions. Responsible for the end-to-end lifecycle, from requirement gathering to deployment.",
      image: "https://images.unsplash.com/photo-1561414926-7f3f921a2e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      tags: ["Java", "Spring Framework", "SQL", "Financial Tech"],
      links: []
    },
    {
      title: "Data Entry Automation Tool",
      description: "Built a desktop application with VB6 to automate and streamline manual data entry processes for increased efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      tags: ["VB6", "Desktop App", "Automation", "Efficiency"],
      links: []
    }
  ];

  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-heading">
          My <span className="text-teal">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
