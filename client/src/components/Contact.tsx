import { Mail, Github, Linkedin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:momchil@example.com";
  };

  const handleResumeDownload = () => {
    // This would typically download a PDF resume
    console.log("Resume download initiated");
  };

  return (
    <section id="contact" className="py-16 px-6 hero-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Ready to collaborate on the next breakthrough? Whether it's research, design, or innovation, 
            I'm excited to connect with fellow creators and problem-solvers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-blue-100">momchil@example.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-blue-100">linkedin.com/in/momchilg</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-blue-100">github.com/momchilg</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleEmailClick}
            className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>
          <Button 
            onClick={handleResumeDownload}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 bg-transparent"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
