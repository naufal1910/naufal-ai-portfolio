
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContactItem = ({ 
  icon: Icon, 
  title, 
  value, 
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string;
  href: string;
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-4 rounded-lg bg-dark/30 border border-light/10 hover:border-teal/40 transition-colors group"
    >
      <div className="mr-4 bg-teal/20 text-teal p-3 rounded-full group-hover:bg-teal/30 transition-colors">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-light/60 text-sm">{title}</p>
        <p className="text-light font-medium">{value}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-dark/50">
      <div className="container mx-auto">
        <h2 className="section-heading">
          Get In <span className="text-teal">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-light">Contact Information</h3>
            
            <ContactItem 
              icon={Mail} 
              title="Email" 
              value="naufal.izar@gmail.com" 
              href="mailto:naufal.izar@gmail.com"
            />
            
            {/* <ContactItem 
              icon={Phone} 
              title="Phone" 
              value="+123 456 7890" 
              href="tel:+1234567890"
            /> */}
            
            <ContactItem 
              icon={Linkedin} 
              title="LinkedIn" 
              value="linkedin.com/in/naufal-nazaruddin" 
              href="https://www.linkedin.com/in/naufal-nazaruddin/"
            />
            
            <ContactItem 
              icon={Github} 
              title="GitHub" 
              value="github.com/naufal1910" 
              href="https://github.com/naufal1910"
            />
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3 text-light">Follow me</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/" 
                  className="bg-light/10 hover:bg-teal/20 text-light hover:text-teal p-3 rounded-full transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  className="bg-light/10 hover:bg-teal/20 text-light hover:text-teal p-3 rounded-full transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-dark/30 rounded-lg p-6 border border-light/10">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-light">
              <MessageSquare className="mr-2 h-5 w-5 text-teal" />
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-light/80 block text-sm">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Naufal Nazaruddin"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark/50 border-light/20 focus:border-teal text-light"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-light/80 block text-sm">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="naufal.izar@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark/50 border-light/20 focus:border-teal text-light"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-light/80 block text-sm">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-dark/50 border-light/20 focus:border-teal text-light"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-light/80 block text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-dark/50 border-light/20 focus:border-teal text-light resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-teal hover:bg-teal/90 text-dark w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
